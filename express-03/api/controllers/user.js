import UserService from "../services/user";

const getAll = async (req, res) => {
  const users = await UserService.getAll(req.context.models);
  return res.status(200).send(users);
};

const getOne = async (req, res) => {
  const user = await UserService.getOne(req.context.models, req.params.userId);
  if (!user) return res.status(404).send("User not found");
  return res.status(200).send(user);
};

const create = async (req, res) => {
  const user = await UserService.create(req.context.models, req.body);
  return res.status(201).send(user);
};

const update = async (req, res) => {
  const user = await UserService.update(
    req.context.models,
    req.params.userId,
    req.body,
  );
  if (!user) return res.status(404).send("User not found");
  return res.status(200).send(user);
};

const deleteOne = async (req, res) => {
  const user = await UserService.getOne(req.context.models, req.params.userId);
  if (!user) return res.status(404).send("User not found");
  await UserService.deleteOne(req.context.models, req.params.userId);
  return res.status(204).send();
};

export default { getAll, getOne, create, update, delete: deleteOne };
