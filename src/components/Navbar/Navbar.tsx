import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {

	const stateFavorites = useSelector((store: AppStore) => store.favorites)

	console.log(stateFavorites)
	const handleClick = () => {
		dialogOpenSubject$.setSubject = true
	}

	return (
		<>
			<CustomDialog>
				<FavoriteTable />
			</CustomDialog>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Ivan Programing React-Typescript
					</Typography>
					<IconButton
						color="error"
						aria-label="favorites"
						component="label"
						onClick={handleClick}
					>
						<Badge badgeContent={stateFavorites.length} color="error">
							<FavoriteIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	);

};

export default Navbar;
