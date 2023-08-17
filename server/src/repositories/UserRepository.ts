import { User } from '../models/User';

const users: User[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

export const UserRepository = {
  getAllUsers(): User[] {
    return users;
  },

  getUserById(id: number): User | { success: boolean; message: string } {
    const user = users.find(user => user.id === id);
    if (user) {
      return user;
    } else {
      return { success: false, message: 'User not found' };
    }
  },

  createUser(newUser: User): { success: boolean } {
    users.push(newUser);
    return { success: true };
  },

  updateUser(id: number, updatedUser: User): { success: boolean; message?: string } {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = updatedUser;
      return { success: true };
    } else {
      return { success: false, message: 'User not found' };
    }
  },

  deleteUser(id: number): { success: boolean; message?: string } {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return { success: true };
    } else {
      return { success: false, message: 'User not found' };
    }
  },
};
