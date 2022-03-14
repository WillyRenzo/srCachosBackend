import { sequelize, DataTypes } from '../index.js';
import { Funcionario } from './index.js';

const FuncionarioHabilidade = sequelize.define('FuncionarioHabilidade', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    habilidade: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'tb_funcionario_habilidade'
});

Funcionario.hasMany(FuncionarioHabilidade);
FuncionarioHabilidade.belongsTo(Funcionario);

export { FuncionarioHabilidade };