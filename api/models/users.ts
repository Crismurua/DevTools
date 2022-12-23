'use strict';
import {
  Model, UUIDV4
} from 'sequelize';

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  company: string;
}

module.exports = (sequelize : any, DataTypes : any) => {
  class Users extends Model<UserAttributes> 
  implements UserAttributes {
    id!: string;
    name!: string;
    email!: string;
    company!: string;
    
    static associate(models : any) {
      Users.belongsToMany(models.Projects, {
        through: 'ProjectTeam'
      })
      Users.belongsToMany(models.Technologies, {
        through: 'UserStack'
      })
    }
  }
  Users.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};