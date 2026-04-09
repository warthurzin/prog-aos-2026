const getAll = async (models) => {
  return await models.Message.findAll();
};

const getOne = async (models, messageId) => {
  return await models.Message.findByPk(messageId);
};

const create = async (models, { text }, userId) => {
  return await models.Message.create({ text, userId });
};

const update = async (models, messageId, { text }) => {
  const message = await models.Message.findByPk(messageId);
  if (!message) return null;
  await message.update({ text });
  return message;
};

const deleteOne = async (models, messageId) => {
  return await models.Message.destroy({ where: { id: messageId } });
};

export default { getAll, getOne, create, update, deleteOne };
