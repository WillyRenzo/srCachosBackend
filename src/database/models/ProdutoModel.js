import { sequelize, DataTypes } from '../index.js';

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    custo: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    desconto: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    comissao: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'tb_produto'
});

export { Produto };