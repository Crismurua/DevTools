'use strict';
import {
  Model, UUIDV4
} from 'sequelize';
import { UserAttributes } from './users';
import { Technology } from './technologies';

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
  Users? : UserAttributes[];
}

export enum Status {
  Active = 'active',
  Recruiting = 'recruiting',
  Closed = 'closed',
}

module.exports = (sequelize : any, DataTypes : any) => {
  class Projects extends Model <Project> 
  implements Project {
    id!: string;
    title!: string;
    description!: string;
    status!: Status;    

    static associate(models : any) {
      Projects.belongsToMany(models.Users, {
        through: 'ProjectTeam'
      })
      Projects.belongsToMany(models.Technologies, {
        through: 'ProjectStack'
      })
    }
  }
  Projects.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};