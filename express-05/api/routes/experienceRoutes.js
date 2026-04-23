import { Router } from "express";
import {
  listExperiences,
  showExperience,
  storeExperience,
  putExperience,
  destroyExperience,
} from "../controllers";

const router = Router({ mergeParams: true });

router.get("/", listExperiences);
router.get("/:id", showExperience);
router.post("/", storeExperience);
router.put("/:id", putExperience);
router.delete("/:id", destroyExperience);

export default router;
