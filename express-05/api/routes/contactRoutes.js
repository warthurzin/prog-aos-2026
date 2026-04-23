import { Router } from "express";
import {
  listContacts,
  showContact,
  storeContact,
  putContact,
  destroyContact,
} from "../controllers";

const router = Router({ mergeParams: true });

router.get("/", listContacts);
router.get("/:id", showContact);
router.post("/", storeContact);
router.put("/:id", putContact);
router.delete("/:id", destroyContact);

export default router;
