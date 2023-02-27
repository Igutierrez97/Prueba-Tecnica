import { Person } from '@/models';
import { removeFavorite } from '@/redux/state';
import { AppStore } from '@/redux/store';
import { IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Delete} from '@mui/icons-material';
export interface FavoriteTableInterface {}

const FavoriteTable : React.FC<FavoriteTableInterface> = () => {

	 
	const pageSize = 5;
	
	const dispatch = useDispatch()

	const stateFavorites = useSelector((store: AppStore)=>store.favorites)

	const handleClick = (person: Person) => {
		dispatch(removeFavorite(person))
	
	}

	const column = [
		{
			field: 'favorite',
			type: 'actions',
			sorteable: false,
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams) => 
			<>{
				<IconButton
						color="error"
						aria-label="favorites"
						component="label"
						onClick={() => handleClick(params.row)}
						>
						<Delete/>
					</IconButton>
				
			}</>
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'levelOfHappiness',
			headerName: 'Level of happiness',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}
	]
	return <DataGrid
	columns={column}
	rows={stateFavorites}
	disableColumnSelector
	disableSelectionOnClick
	autoHeight
	pageSize={pageSize}
	rowsPerPageOptions={[pageSize]}
	getRowId={(row: any) => row.id}
/>;;
};

export default FavoriteTable;
