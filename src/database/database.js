import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(`postgres://postgres:banco@localhost:5432/srcachos`);

export { sequelize, DataTypes };