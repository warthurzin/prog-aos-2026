import { Router } from "express";
import profileRoutes from "./profileRoutes";
import experienceRoutes from "./experienceRoutes";
import educationRoutes from "./educationRoutes";
import skillRoutes from "./skillRoutes";
import projectRoutes from "./projectRoutes";
import contactRoutes from "./contactRoutes";

const router = Router();

router.use("/profiles", profileRoutes);
router.use("/profiles/:profileId/experiences", experienceRoutes);
router.use("/profiles/:profileId/educations", educationRoutes);
router.use("/profiles/:profileId/skills", skillRoutes);
router.use("/profiles/:profileId/projects", projectRoutes);
router.use("/profiles/:profileId/contacts", contactRoutes);

export default router;
