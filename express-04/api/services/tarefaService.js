const { Tarefa, sequelize } = require("../models");

sequelize.sync({ alter: true });

const listarTarefas = async () => {
  const tarefas = await Tarefa.findAll();
  return tarefas;
};

const buscarTarefaPorId = async (objectId) => {
  const tarefa = await Tarefa.findByPk(objectId);
  return tarefa;
};

const criarTarefa = async ({ descricao, concluida }) => {
  const tarefa = await Tarefa.create({ descricao, concluida });
  return tarefa;
};

const atualizarTarefa = async (objectId, { descricao, concluida }) => {
  const tarefa = await Tarefa.findByPk(objectId);

  if (!tarefa) return null;

  if (descricao !== undefined) tarefa.descricao = descricao;
  if (concluida !== undefined) tarefa.concluida = concluida;

  await tarefa.save();
  return tarefa;
};

const deletarTarefa = async (objectId) => {
  const tarefa = await Tarefa.findByPk(objectId);

  if (!tarefa) return null;

  await tarefa.destroy();
  return tarefa;
};

module.exports = {
  listarTarefas,
  buscarTarefaPorId,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};
