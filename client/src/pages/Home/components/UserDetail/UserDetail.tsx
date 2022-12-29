import { Person, Technology } from '@/models';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export interface UserDetailInterface {}

type PersonId = {
	id:string;
}

const UserDetail : React.FC<UserDetailInterface> = () => {
	const [detail, setDetail] = useState<Person | any>({});
	const params = useParams<PersonId>();
	

	React.useEffect(() => {
		axios.get<Person>(`http://localhost:3001/users/${params.id}`)
			.then((p) => setDetail(p.data))
	}, [])
	return (
		<>
		<Typography variant="h3" component="h2" sx={{marginBottom: 10}}>
  			{detail.name}
		</Typography>
		<List
      sx={{
        width: '40%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={detail.email} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Company" secondary={detail.company} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Background" secondary="Full Stack Developer" />
      </ListItem>
    </List>

	<Typography variant="h5" component="h2" sx={{marginTop: 3, display: 'inline'}}>
  			Technologies
		</Typography>
	{detail.technologies?.map((t : Technology) => (<span>{t.name}</span>))}
	</>
	);
};

export default UserDetail;
