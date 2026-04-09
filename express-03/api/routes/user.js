import { Router } from "express";
import UserController from "../controllers/user";

const router = Router();

router.get("/", UserController.getAll);
router.get("/:userId", UserController.getOne);
router.post("/", UserController.create);
router.put("/:userId", UserController.update);
router.delete("/:userId", UserController.delete);

export default router;
