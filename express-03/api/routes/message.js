import { Router } from "express";
import MessageController from "../controllers/message";

const router = Router();

router.get("/", MessageController.getAll);
router.get("/:messageId", MessageController.getOne);
router.post("/", MessageController.create);
router.put("/:messageId", MessageController.update);
router.delete("/:messageId", MessageController.delete);

export default router;
