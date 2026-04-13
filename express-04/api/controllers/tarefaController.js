const tarefaService = require("../services/tarefaService");

const listarTarefas = async (req, res) => {
  const tarefas = await tarefaService.listarTarefas();
  res.status(200).json(tarefas);
};

const buscarTarefaPorId = async (req, res) => {
  const { objectId } = req.params;
  const tarefa = await tarefaService.buscarTarefaPorId(objectId);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  res.status(200).json(tarefa);
};

const criarTarefa = async (req, res) => {
  const { descricao, concluida } = req.body;

  if (!descricao || descricao.trim() === "") {
    return res.status(400).json({ erro: "O campo 'descricao' é obrigatório." });
  }

  const tarefa = await tarefaService.criarTarefa({ descricao, concluida });
  res.status(201).json(tarefa);
};

const atualizarTarefa = async (req, res) => {
  const { objectId } = req.params;
  const { descricao, concluida } = req.body;

  const tarefa = await tarefaService.atualizarTarefa(objectId, {
    descricao,
    concluida,
  });

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  res.status(200).json(tarefa);
};

const deletarTarefa = async (req, res) => {
  const { objectId } = req.params;
  const tarefa = await tarefaService.deletarTarefa(objectId);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  res.status(204).send();
};

module.exports = {
  listarTarefas,
  buscarTarefaPorId,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};
