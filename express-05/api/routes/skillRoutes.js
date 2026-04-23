import { Router } from "express";
import {
  listSkills,
  showSkill,
  storeSkill,
  putSkill,
  destroySkill,
} from "../controllers";

const router = Router({ mergeParams: true });

router.get("/", listSkills);
router.get("/:id", showSkill);
router.post("/", storeSkill);
router.put("/:id", putSkill);
router.delete("/:id", destroySkill);

export default router;
