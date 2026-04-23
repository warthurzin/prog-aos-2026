import { models } from "../config";

const { Project } = models;

export const getProjectsByProfile = (profile_id) =>
  Project.findAll({
    where: { profile_id },
    order: [
      ["is_featured", "DESC"],
      ["created_at", "DESC"],
    ],
  });

export const getProjectById = (id) => Project.findByPk(id);

export const createProject = (data) => Project.create(data);

export const updateProject = (id, data) =>
  Project.update(data, { where: { id }, returning: true }).then(
    ([, [updated]]) => updated,
  );

export const deleteProject = (id) => Project.destroy({ where: { id } });
