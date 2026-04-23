import { models } from "../config";

const { Profile, Experience, Education, Skill, Project, Contact } = models;

const includeAll = [
  { model: Experience, as: "experiences" },
  { model: Education, as: "educations" },
  { model: Skill, as: "skills" },
  { model: Project, as: "projects" },
  { model: Contact, as: "contacts" },
];

export const getAllProfiles = () => Profile.findAll({ include: includeAll });

export const getProfileById = (id) =>
  Profile.findByPk(id, { include: includeAll });

export const createProfile = (data) => Profile.create(data);

export const updateProfile = (id, data) =>
  Profile.update(data, { where: { id }, returning: true }).then(
    ([, [updated]]) => updated,
  );

export const deleteProfile = (id) => Profile.destroy({ where: { id } });
