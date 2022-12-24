'use strict';
import {
  Model, UUIDV4
} from 'sequelize';

export interface Project {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  status: string;
}

module.exports = (sequelize : any, DataTypes : any) => {
  class Projects extends Model <Project> 
  implements Project {
    id!: string;
    title!: string;
    description!: string;
    status!: string;    

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