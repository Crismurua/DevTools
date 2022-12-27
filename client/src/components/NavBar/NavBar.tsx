import { AppStore } from '@/redux/store';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CustomDialog, { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { FavouriteTable } from './FavouriteTable';
import { useNavigate } from 'react-router-dom';


export interface NavBarInterface {}

const NavBar : React.FC<NavBarInterface> = () => {
  const favourites = useSelector((state : AppStore) => state.favourites)
  const navigate = useNavigate();
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  }; 

	return (
    <>
    <CustomDialog>
      <FavouriteTable />
    </CustomDialog>
		<AppBar position="fixed" >
        <Toolbar sx={{ justifyContent: 'space-around' }}>
        <Button color="inherit" variant='outlined' aria-label='projects' sx={{textDecoration: 'none'}} onClick={() => navigate('projects')}>PROJECTS</Button>
    
          <Button color="inherit" variant='outlined' aria-label='favourites' onClick={handleClick}>FAVOURITES</Button>
          <Button color="inherit" variant='outlined' aria-label='settings' onClick={() => navigate('settings')}>SETTINGS</Button>
        </Toolbar>
      </AppBar>
      </>
  );
};

export default NavBar;
