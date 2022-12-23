import { Person } from '@/models';
import { addFavourite, removeFavourite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Button, Checkbox } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export interface FavouriteTableInterface {}

const FavouriteTable : React.FC<FavouriteTableInterface> = () => {
	
	const page = 5;
	const dispatch = useDispatch();
	const favourites = useSelector((state : AppStore) => state.favourites)

	const handleClick = (person: Person) => {
		dispatch(removeFavourite(person))
	};


	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sorteable: false,
			headerName: '',
			width: 70,
			renderCell: (params: GridRenderCellParams)=> <>{
				<Button color="inherit" variant='outlined' aria-label='favourites' onClick={()=> handleClick(params.row)}>DELETE</Button>
			}</>
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
		},
		{
			field: 'levelOfHappiness',
			headerName: 'levelOfHappiness',
			flex: 1,
			renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
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

export default FavouriteTable;
