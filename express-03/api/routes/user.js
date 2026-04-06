import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const users = await req.context.models.User.findAll();
  return res.status(200).send(users);
});

router.get("/:userId", async (req, res) => {
  const user = await req.context.models.User.findByPk(req.params.userId);
  if (!user) return res.status(404).send("User not found");
  return res.status(200).send(user);
});

router.post("/", async (req, res) => {
  const { username, email } = req.body;
  const user = await req.context.models.User.create({ username, email });
  return res.status(201).send(user);
});

router.put("/:userId", async (req, res) => {
  const { username, email } = req.body;
  const user = await req.context.models.User.findByPk(req.params.userId);
  if (!user) return res.status(404).send("User not found");
  await user.update({ username, email });
  return res.status(200).send(user);
});

router.delete("/:userId", async (req, res) => {
  const user = await req.context.models.User.findByPk(req.params.userId);
  if (!user) return res.status(404).send("User not found");
  await req.context.models.User.destroy({ where: { id: req.params.userId } });
  return res.status(204).send();
});

export default router;
