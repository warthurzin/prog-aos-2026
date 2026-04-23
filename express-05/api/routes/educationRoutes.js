import { Router } from "express";
import {
  listEducations,
  showEducation,
  storeEducation,
  putEducation,
  destroyEducation,
} from "../controllers";

const router = Router({ mergeParams: true });

router.get("/", listEducations);
router.get("/:id", showEducation);
router.post("/", storeEducation);
router.put("/:id", putEducation);
router.delete("/:id", destroyEducation);

export default router;
