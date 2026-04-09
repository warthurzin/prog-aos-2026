import MessageService from "../services/message";

const getAll = async (req, res) => {
  const messages = await MessageService.getAll(req.context.models);
  return res.status(200).send(messages);
};

const getOne = async (req, res) => {
  const message = await MessageService.getOne(
    req.context.models,
    req.params.messageId,
  );
  if (!message) return res.status(404).send("Message not found");
  return res.status(200).send(message);
};

const create = async (req, res) => {
  const message = await MessageService.create(
    req.context.models,
    req.body,
    req.context.me.id,
  );
  return res.status(201).send(message);
};

const update = async (req, res) => {
  const message = await MessageService.update(
    req.context.models,
    req.params.messageId,
    req.body,
  );
  if (!message) return res.status(404).send("Message not found");
  return res.status(200).send(message);
};

const deleteOne = async (req, res) => {
  const message = await MessageService.getOne(
    req.context.models,
    req.params.messageId,
  );
  if (!message) return res.status(404).send("Message not found");
  await MessageService.deleteOne(req.context.models, req.params.messageId);
  return res.status(204).send();
};

export default { getAll, getOne, create, update, delete: deleteOne };
