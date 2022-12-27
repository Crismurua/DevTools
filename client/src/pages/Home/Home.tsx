import React, { useEffect } from 'react';
import PeopleTable from './components/PeopleTable/PeopleTable';
import { getUsers } from '@/utils/fetchers';
import { useAppDispatch, useAppSelector } from '@/hooks/useTypedSelector';

export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	const people = useAppSelector(state => state.people)
	const dispatch = useAppDispatch();
	

	useEffect(() => {
		dispatch(getUsers())
	}, [])
	

	return ( 
		<PeopleTable />
	);
};

export default Home;
