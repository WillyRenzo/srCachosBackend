import { Cliente } from './ClienteModel.js';
import { Fornecedor } from './FornecedorModel.js';
import { Funcionario } from './FuncionarioModel.js';
import { FuncionarioHabilidade } from './FuncionarioHabilidadeModel.js';
import { Produto } from './ProdutoModel.js';
import { Servico } from './ServicoModel.js';

Funcionario.hasMany(FuncionarioHabilidade, {
    foreignKey: 'id'
});

FuncionarioHabilidade.belongsTo(Funcionario, {
    foreignKey: 'cod_funcionario'
});

export { Cliente, Fornecedor, Funcionario, FuncionarioHabilidade, Produto, Servico };