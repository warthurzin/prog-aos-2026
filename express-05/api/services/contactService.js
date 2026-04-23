import { models } from "../config";

const { Contact } = models;

export const getContactsByProfile = (profile_id) =>
  Contact.findAll({ where: { profile_id }, order: [["type", "ASC"]] });

export const getContactById = (id) => Contact.findByPk(id);

export const createContact = (data) => Contact.create(data);

export const updateContact = (id, data) =>
  Contact.update(data, { where: { id }, returning: true }).then(
    ([, [updated]]) => updated,
  );

export const deleteContact = (id) => Contact.destroy({ where: { id } });
