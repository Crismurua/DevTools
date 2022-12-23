'use strict';
import {
  Model
} from 'sequelize';

export interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
}

module.exports = (sequelize : any, DataTypes : any) => {
  class Projects extends Model <Project> 
  implements Project {
    id!: number;
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
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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