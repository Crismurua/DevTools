import { Person, Technology, Project } from '@/models';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailLayout } from '@/styled-components';

export interface ProjectDetailInterface {}

type ProjectId = {
	id:string;
}

const ProjectDetail : React.FC<ProjectDetailInterface> = () => {
	const [detail, setDetail] = useState<Project | Record<string,never>>({});
	const params = useParams<ProjectId>();
	

	React.useEffect(() => {
		axios.get<Project>(`http://localhost:3001/projects/${params.id}`)
			.then((p) => setDetail(p.data))
	}, []);

	return (
		<>
		<Typography variant="h3" component="h2" sx={{marginBottom: 10}}>
  			{detail.title}
		</Typography>
    <DetailLayout>
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
        <ListItemText primary="Description" secondary={detail.description} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Status" secondary={detail.status} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Background" secondary="Machine Learning" />
      </ListItem>
    </List>

	<Typography variant="h5" component="h2" sx={{marginTop: 3, display: 'inline'}}>
  			Technologies
		</Typography>
	{detail.Technologies?.map((t : Technology) => (<span>{t.name}</span>))}
	
  <Typography variant="h5" component="h2" sx={{marginTop: 3, display: 'inline'}}>
  			Development Team
		</Typography>
	{detail.Users?.map((t : Person) => (<span>{t.name}</span>))}
  </DetailLayout>
  </>
	);
};

export default ProjectDetail;

