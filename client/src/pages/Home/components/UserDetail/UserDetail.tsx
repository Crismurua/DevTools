import React from 'react';
import { useParams } from 'react-router-dom';

export interface UserDetailInterface {}

const UserDetail : React.FC<UserDetailInterface> = (props : any) => {
	const params = useParams()
	return <div>UserDetail</div>;
};

export default UserDetail;
