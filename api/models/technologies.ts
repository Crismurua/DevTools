'use strict';
import {
  Model
} from 'sequelize';

export interface Technology {
  id: number;
  name: string;
}

module.exports = (sequelize : any, DataTypes : any) => {
  class Technologies extends Model <Technology>
    implements Technology {
      id!: number;
      name!: string;

      static associate(models : any) {
        Technologies.belongsToMany(models.Users, {
          through: 'UserStack'
        })
        Technologies.belongsToMany(models.Projects, {
          through: 'ProjectStack'
        })
    }
  }
  Technologies.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Technologies',
  });
  return Technologies;
};