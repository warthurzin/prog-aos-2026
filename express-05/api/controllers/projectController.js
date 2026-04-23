import {
  getProjectsByProfile,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../services";

export const listProjects = (req, res, next) =>
  getProjectsByProfile(req.params.profileId)
    .then((projects) => res.json(projects))
    .catch(next);

export const showProject = (req, res, next) =>
  getProjectById(req.params.id)
    .then((project) =>
      project
        ? res.json(project)
        : res.status(404).json({ message: "Project not found" }),
    )
    .catch(next);

export const storeProject = (req, res, next) =>
  createProject({ ...req.body, profile_id: req.params.profileId })
    .then((project) => res.status(201).json(project))
    .catch(next);

export const putProject = (req, res, next) =>
  updateProject(req.params.id, req.body)
    .then((project) =>
      project
        ? res.json(project)
        : res.status(404).json({ message: "Project not found" }),
    )
    .catch(next);

export const destroyProject = (req, res, next) =>
  deleteProject(req.params.id)
    .then((deleted) =>
      deleted
        ? res.status(204).send()
        : res.status(404).json({ message: "Project not found" }),
    )
    .catch(next);
