import { Router } from "express";
import {
  listProfiles,
  showProfile,
  storeProfile,
  putProfile,
  destroyProfile,
} from "../controllers";

const router = Router();

router.get("/", listProfiles);
router.get("/:id", showProfile);
router.post("/", storeProfile);
router.put("/:id", putProfile);
router.delete("/:id", destroyProfile);

export default router;
