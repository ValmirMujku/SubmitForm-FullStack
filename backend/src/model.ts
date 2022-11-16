import {Model, DataTypes,InferAttributes, InferCreationAttributes,} from 'sequelize';
import db from './db'

interface formAttribute{
    id:number;
    email:string;
    password:string;
    age:number;
    gender:string;
    createdAt:Date;
    updatedAt:Date;
}

export default class FormInstance extends Model<formAttribute>{}
FormInstance.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
        autoIncrementIdentity:true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:false,
    },
    age:{
        type:DataTypes.NUMBER,
        allowNull:false,
        defaultValue:false,
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:false,
    },
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE,

},{
    tableName: 'forms',
    sequelize:db
});