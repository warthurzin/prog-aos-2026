import {
  getExperiencesByProfile,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../services";

export const listExperiences = (req, res, next) =>
  getExperiencesByProfile(req.params.profileId)
    .then((experiences) => res.json(experiences))
    .catch(next);

export const showExperience = (req, res, next) =>
  getExperienceById(req.params.id)
    .then((experience) =>
      experience
        ? res.json(experience)
        : res.status(404).json({ message: "Experience not found" }),
    )
    .catch(next);

export const storeExperience = (req, res, next) =>
  createExperience({ ...req.body, profile_id: req.params.profileId })
    .then((experience) => res.status(201).json(experience))
    .catch(next);

export const putExperience = (req, res, next) =>
  updateExperience(req.params.id, req.body)
    .then((experience) =>
      experience
        ? res.json(experience)
        : res.status(404).json({ message: "Experience not found" }),
    )
    .catch(next);

export const destroyExperience = (req, res, next) =>
  deleteExperience(req.params.id)
    .then((deleted) =>
      deleted
        ? res.status(204).send()
        : res.status(404).json({ message: "Experience not found" }),
    )
    .catch(next);
