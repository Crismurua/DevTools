import { Person } from "./people";
import { Technology } from "./technologies";

export interface Project {
  setTechnologies?: any;
  setUsers?: any;
  addUser?: any;
  addTechnologies?: any;
  id: string;
  title: string;
  description: string;
  status: Status;
  Technologies? : Technology[];
  Users? : Person[];
}

export enum Status {
  Active = 'active',
  Recruiting = 'recruiting',
  Closed = 'closed',
}