import React, {useEffect, useState} from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { addFavourite } from '@/redux/states';

export interface PeopleTableInterface {}

const PeopleTable : React.FC<PeopleTableInterface> = () => {
	const [selected, setSelected] = useState<Person[]>([]);
	const page = 5;
	const dispatch = useDispatch();
	const people = useSelector((state : AppStore) => state.people)
	const favourites = useSelector((state : AppStore) => state.favourites)

	const findPerson = (person :Person) => !!favourites.find(p => p.id === person.id)
	const filterPerson = (person :Person) => favourites.filter(p => p.id !== person.id)

	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selected, person]
		dispatch(addFavourite(filteredPeople))
		setSelected(filteredPeople)

	};

	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sorteable: false,
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams)=> <>{
				<Checkbox size="small" checked={findPerson(params.row)} onChange={()=>handleChange(params.row)}/>
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

	useEffect(() => {
		setSelected(favourites)
	}, [favourites])

	return (
		<div>
			<DataGrid 
				rows={people}
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

export default PeopleTable;
