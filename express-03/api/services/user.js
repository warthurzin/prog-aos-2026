const getAll = async (models) => {
  return await models.User.findAll();
};

const getOne = async (models, userId) => {
  return await models.User.findByPk(userId);
};

const create = async (models, { username, email }) => {
  return await models.User.create({ username, email });
};

const update = async (models, userId, { username, email }) => {
  const user = await models.User.findByPk(userId);
  if (!user) return null;
  await user.update({ username, email });
  return user;
};

const deleteOne = async (models, userId) => {
  return await models.User.destroy({ where: { id: userId } });
};

export default { getAll, getOne, create, update, deleteOne };
