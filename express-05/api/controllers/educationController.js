import {
  getEducationsByProfile,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../services";

export const listEducations = (req, res, next) =>
  getEducationsByProfile(req.params.profileId)
    .then((educations) => res.json(educations))
    .catch(next);

export const showEducation = (req, res, next) =>
  getEducationById(req.params.id)
    .then((education) =>
      education
        ? res.json(education)
        : res.status(404).json({ message: "Education not found" }),
    )
    .catch(next);

export const storeEducation = (req, res, next) =>
  createEducation({ ...req.body, profile_id: req.params.profileId })
    .then((education) => res.status(201).json(education))
    .catch(next);

export const putEducation = (req, res, next) =>
  updateEducation(req.params.id, req.body)
    .then((education) =>
      education
        ? res.json(education)
        : res.status(404).json({ message: "Education not found" }),
    )
    .catch(next);

export const destroyEducation = (req, res, next) =>
  deleteEducation(req.params.id)
    .then((deleted) =>
      deleted
        ? res.status(204).send()
        : res.status(404).json({ message: "Education not found" }),
    )
    .catch(next);
