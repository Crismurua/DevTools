import { Project } from "./projects";
import { Technology } from "./technologies";

export interface Person {
      addProjects?: any;
      addTechnologies?: any;
      id: string;
      name: string;
      email: string;
      company: string;
      Technologies? : Technology[];
      Projects? : Project[];
    }
    

