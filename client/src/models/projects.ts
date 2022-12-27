import { Person } from "./people";

export interface Project {
    id: string;
    title: string;
    description: string;
    status: Status;
    
    Users: Person[];
  }
  
  export enum Status {
    Active = 'active',
    Recruiting = 'recruiting',
    Closed = 'closed',
  }