import { AppStore } from '@/redux/store';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CustomDialog, { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { FavouriteTable } from './FavouriteTable';


export interface NavBarInterface {}

const NavBar : React.FC<NavBarInterface> = () => {
  const favourites = useSelector((state : AppStore) => state.favourites)

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  }; 

	return (
    <>
    <CustomDialog>
      <FavouriteTable />
    </CustomDialog>
		<AppBar position="fixed">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Project-User
          </Typography>
          <Button color="inherit" variant='outlined' aria-label='favourites' onClick={handleClick}>Favourites</Button>
        </Toolbar>
      </AppBar>
      </>
  );
};

export default NavBar;
