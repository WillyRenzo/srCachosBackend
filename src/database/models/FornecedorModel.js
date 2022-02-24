import { sequelize, DataTypes } from '../index.js';

const Fornecedor = sequelize.define('Fornecedor', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    razaosocial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    inscricaoestadual: {
        type: DataTypes.STRING,
        allowNull: false
    },
    inscricaomunicipal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    site: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'tb_fornecedor'
});

export { Fornecedor };