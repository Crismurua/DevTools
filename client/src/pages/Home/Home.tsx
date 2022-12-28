import React, { useEffect } from 'react';
import PeopleTable from './components/PeopleTable/PeopleTable';
import { getTechnologies, getUsers } from '@/utils/fetchers';
import { useAppDispatch } from '@/hooks/useTypedSelector';

export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	const dispatch = useAppDispatch();
	

	useEffect(() => {
		dispatch(getTechnologies())
		dispatch(getUsers())
	}, [])
	

	return ( 
		<PeopleTable />
	);
};

export default Home;
