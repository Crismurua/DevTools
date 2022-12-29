import React, {useEffect, useState} from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Person } from '@/models';
import { Button, Checkbox } from '@mui/material';
import { AppStore } from '@/redux/store';
import { addFavourite } from '@/redux/states';
import { useAppDispatch, useAppSelector } from '@/hooks/useTypedSelector';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

export interface PeopleTableInterface {}

const PeopleTable : React.FC<PeopleTableInterface> = () => {
	const [selected, setSelected] = useState<Person[]>([]);
	const page = 7;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const people = useAppSelector((state : AppStore) => state.people)
	const favourites = useAppSelector((state : AppStore) => state.favourites)

	const findPerson = (person :Person) => !!favourites.find(p => p.id === person.id)
	const filterPerson = (person :Person) => favourites.filter(p => p.id !== person.id)

	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selected, person]
		dispatch(addFavourite(filteredPeople))
		setSelected(filteredPeople)

	};

	const handleClick = (person : Person) => {
		navigate(`/${person.id}`)
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
			field: 'email',
			headerName: 'Email',
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
			field: 'action',
			type: 'actions',
			sorteable: false,
			headerName: '',
			flex: 0.3,
			renderCell: (params: GridRenderCellParams)=> <>{
				<Button size="small" onClick={()=>handleClick(params.row)}><InfoIcon/></Button>
			}</>
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
