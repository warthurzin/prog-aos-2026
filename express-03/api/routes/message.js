import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const messages = await req.context.models.Message.findAll();
  return res.status(200).send(messages);
});

router.get("/:messageId", async (req, res) => {
  const message = await req.context.models.Message.findByPk(
    req.params.messageId,
  );
  if (!message) return res.status(404).send("Message not found");
  return res.status(200).send(message);
});

router.post("/", async (req, res) => {
  const message = await req.context.models.Message.create({
    text: req.body.text,
    userId: req.context.me.id,
  });
  return res.status(201).send(message);
});

router.put("/:messageId", async (req, res) => {
  const message = await req.context.models.Message.findByPk(
    req.params.messageId,
  );
  if (!message) return res.status(404).send("Message not found");
  await message.update({ text: req.body.text });
  return res.status(200).send(message);
});

router.delete("/:messageId", async (req, res) => {
  const message = await req.context.models.Message.findByPk(
    req.params.messageId,
  );
  if (!message) return res.status(404).send("Message not found");
  await req.context.models.Message.destroy({
    where: { id: req.params.messageId },
  });
  return res.status(204).send();
});

export default router;
