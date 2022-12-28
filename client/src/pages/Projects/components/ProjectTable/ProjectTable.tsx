import React, { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Project } from '@/models';
import { Button, Checkbox } from '@mui/material';
import { AppStore } from '@/redux/store';
import { addFavproject } from '@/redux/states';
import { useAppDispatch, useAppSelector } from '@/hooks/useTypedSelector';
import InfoIcon from '@mui/icons-material/Info';

export interface ProjectTableInterface {}

const ProjectTable : React.FC<ProjectTableInterface> = () => {
	const [selected, setSelected] = useState<Project[]>([]);
	const page = 7;
	const dispatch = useAppDispatch();
	const projects = useAppSelector((state : AppStore) => state.projects)
	const favourites = useAppSelector((state : AppStore) => state.favprojects)

	 const findProject = (project :Project) => !!favourites.find(p => p.id === project.id)
	 const filterProject = (project :Project) => favourites.filter(p => p.id !== project.id)

	const handleChange = (project: Project) => {
		 const filteredProject = findProject(project) ? filterProject(project) : [...selected, project]
		 dispatch(addFavproject(filteredProject))
		 setSelected(filteredProject)
		
	};

	const handleClick = (person : Project) => {

	};


	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sorteable: false,
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams)=> <>{
				<Checkbox size="small" checked={findProject(params.row)} onChange={()=>handleChange(params.row)}/>
			}</>
		},
		{
			field: 'title',
			headerName: 'Title',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
		},
		{
			field: 'description',
			headerName: 'Description',
			flex: 1,
			renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
		},
		{
			field: 'status',
			headerName: 'Status',
			flex: 0.5,
			renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
		},
		{
			field: 'action',
			type: 'action',
			sorteable: false,
			headerName: '',
			flex: 0.3,
			renderCell: (params: GridRenderCellParams)=> <>{
				<Button size="small" onChange={()=>handleClick(params.row)}><InfoIcon/></Button>
			}</>
		},
	];
	
	return (
		<div>
			<DataGrid 
				rows={projects}
				columns={columns}
				disableColumnSelector
				disableSelectionOnClick
				autoHeight
				pageSize={page}
				rowsPerPageOptions={[page]}
				getRowId={(row: any) => row.id}

			/>
		</div>
		);
};

export default ProjectTable;

