import { Project } from '@/models';
import { removeFavproject } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Button } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface FavouriteTableInterface {}

const FavprojectsTable : React.FC<FavouriteTableInterface> = () => {
	
	const page = 5;
	const dispatch = useDispatch();
	const favourites = useSelector((state : AppStore) => state.favprojects)

	const handleClick = (project: Project) => {
		dispatch(removeFavproject(project))
	};

	const handleRecruit = (project: Project) => {
		return
	};


	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sorteable: false,
			headerName: '',
			width: 70,
			renderCell: (params: GridRenderCellParams)=> <>{
				<Button color="error" variant='contained' aria-label='favourites' onClick={()=> handleClick(params.row)}>DELETE</Button>
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
			flex: 1,
			renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
		},
		{
			field: 'action',
			type: 'actions',
			sorteable: false,
			headerName: '',
			width: 70,
			renderCell: (params: GridRenderCellParams)=> <>{
				<Button color="success" variant='contained' aria-label='favourites' onClick={()=> handleRecruit(params.row)}>RECRUIT</Button>
			}</>
		},
	];

	return (
		<div>
			<DataGrid 
				rows={favourites}
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

export default FavprojectsTable;

