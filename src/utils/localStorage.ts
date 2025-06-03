export type UserData = {
  nome: string;
  email: string;
};

const STORAGE_KEY = 'usuarios';

export const saveUser = (user: UserData): void => {
  const existingUsers = getUsers();
  existingUsers.push(user);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingUsers));
};

export const getUsers = (): UserData[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
