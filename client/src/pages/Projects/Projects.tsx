import React, { useEffect } from 'react';
import { ProjectTable } from './components/ProjectTable';
import { getProjects } from '@/utils/fetchers';
import { useAppDispatch } from '@/hooks/useTypedSelector';
import { FavprojectsTable } from '@/pages/Projects/FavprojectsTable';
import CustomDialog, { dialogOpenSubject$ } from '@/components/CustomDialog/CustomDialog';
import { Button } from '@mui/material';

export interface ProjectsInterface {}

const Projects : React.FC<ProjectsInterface> = () => {
	const dispatch = useAppDispatch();
	

	useEffect(() => {
		dispatch(getProjects())
	}, [])

	const handleClick = () => {
		dialogOpenSubject$.setSubject = true;
	  }; 
	

	return ( 
		<>
		<CustomDialog>
			<FavprojectsTable/>
		</CustomDialog>
		<Button color="primary" variant='contained' aria-label='favprojects' sx={{margin: 4}} onClick={handleClick}>FAVOURITES</Button>
		<ProjectTable />
		</>
	);
};

export default Projects;
