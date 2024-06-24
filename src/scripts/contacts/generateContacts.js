import { createFakeContact } from '../../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from './updateContacts.js';

const generateContacts = async (number) => {
  const contactList = await getAllContacts();
  const newContacts = Array(number).fill(0).map(createFakeContact);
  contactList.push(...newContacts);
  await updateContacts(contactList);
};

generateContacts(5);
