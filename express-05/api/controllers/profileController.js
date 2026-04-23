import {
  getAllProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../services";

export const listProfiles = (req, res, next) =>
  getAllProfiles()
    .then((profiles) => res.json(profiles))
    .catch(next);

export const showProfile = (req, res, next) =>
  getProfileById(req.params.id)
    .then((profile) =>
      profile
        ? res.json(profile)
        : res.status(404).json({ message: "Profile not found" }),
    )
    .catch(next);

export const storeProfile = (req, res, next) =>
  createProfile(req.body)
    .then((profile) => res.status(201).json(profile))
    .catch(next);

export const putProfile = (req, res, next) =>
  updateProfile(req.params.id, req.body)
    .then((profile) =>
      profile
        ? res.json(profile)
        : res.status(404).json({ message: "Profile not found" }),
    )
    .catch(next);

export const destroyProfile = (req, res, next) =>
  deleteProfile(req.params.id)
    .then((deleted) =>
      deleted
        ? res.status(204).send()
        : res.status(404).json({ message: "Profile not found" }),
    )
    .catch(next);
