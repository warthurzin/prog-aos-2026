import {
  getContactsByProfile,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from "../services";

export const listContacts = (req, res, next) =>
  getContactsByProfile(req.params.profileId)
    .then((contacts) => res.json(contacts))
    .catch(next);

export const showContact = (req, res, next) =>
  getContactById(req.params.id)
    .then((contact) =>
      contact
        ? res.json(contact)
        : res.status(404).json({ message: "Contact not found" }),
    )
    .catch(next);

export const storeContact = (req, res, next) =>
  createContact({ ...req.body, profile_id: req.params.profileId })
    .then((contact) => res.status(201).json(contact))
    .catch(next);

export const putContact = (req, res, next) =>
  updateContact(req.params.id, req.body)
    .then((contact) =>
      contact
        ? res.json(contact)
        : res.status(404).json({ message: "Contact not found" }),
    )
    .catch(next);

export const destroyContact = (req, res, next) =>
  deleteContact(req.params.id)
    .then((deleted) =>
      deleted
        ? res.status(204).send()
        : res.status(404).json({ message: "Contact not found" }),
    )
    .catch(next);
