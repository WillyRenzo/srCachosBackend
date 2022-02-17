import { sequelize, DataTypes } from '../index.js';

const Servico = sequelize.define('Servico', {
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
    duracao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comissao: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    tableName: 'tb_servico'
});

export { Servico };