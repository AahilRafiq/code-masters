// Write schema here

/******  Example table below : Delete it and write your own schema *****/
export const users = {
  id: { type: 'serial' },
  name: { type: 'text' },
  email: { type: 'text' },
  password: { type: 'text' },
  created_at: { type: 'timestamp', default: 'now()' },
  updated_at: { type: 'timestamp', default: 'now()' },
};