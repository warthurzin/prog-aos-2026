const sequelizeValidationErrors = [
  "SequelizeValidationError",
  "SequelizeDatabaseError",
];

const sequelizeUniqueErrors = ["SequelizeUniqueConstraintError"];

export const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (sequelizeUniqueErrors.includes(err.name)) {
    return res.status(409).json({
      erro: "Conflito de dados",
      mensagem: "Já existe um registro com essas informações.",
      detalhes: err.errors?.map((e) => e.message) ?? [],
    });
  }

  if (sequelizeValidationErrors.includes(err.name)) {
    return res.status(400).json({
      erro: "Dados inválidos",
      mensagem: "Verifique os campos enviados e tente novamente.",
      detalhes: err.errors?.map((e) => e.message) ?? [err.message],
    });
  }

  if (err.name?.startsWith("Sequelize")) {
    return res.status(400).json({
      erro: "Erro de banco de dados",
      mensagem: err.message,
      detalhes: err.errors?.map((e) => e.message) ?? [],
    });
  }

  return res.status(500).json({
    erro: "Erro interno do servidor",
    mensagem: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
  });
};
