import { Router } from "express";
import {
  listProjects,
  showProject,
  storeProject,
  putProject,
  destroyProject,
} from "../controllers";

const router = Router({ mergeParams: true });

router.get("/", listProjects);
router.get("/:id", showProject);
router.post("/", storeProject);
router.put("/:id", putProject);
router.delete("/:id", destroyProject);

export default router;
