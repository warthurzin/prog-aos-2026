import {
  getSkillsByProfile,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../services";

export const listSkills = (req, res, next) =>
  getSkillsByProfile(req.params.profileId)
    .then((skills) => res.json(skills))
    .catch(next);

export const showSkill = (req, res, next) =>
  getSkillById(req.params.id)
    .then((skill) =>
      skill
        ? res.json(skill)
        : res.status(404).json({ message: "Skill not found" }),
    )
    .catch(next);

export const storeSkill = (req, res, next) =>
  createSkill({ ...req.body, profile_id: req.params.profileId })
    .then((skill) => res.status(201).json(skill))
    .catch(next);

export const putSkill = (req, res, next) =>
  updateSkill(req.params.id, req.body)
    .then((skill) =>
      skill
        ? res.json(skill)
        : res.status(404).json({ message: "Skill not found" }),
    )
    .catch(next);

export const destroySkill = (req, res, next) =>
  deleteSkill(req.params.id)
    .then((deleted) =>
      deleted
        ? res.status(204).send()
        : res.status(404).json({ message: "Skill not found" }),
    )
    .catch(next);
