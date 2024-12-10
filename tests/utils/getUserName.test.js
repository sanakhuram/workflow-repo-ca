import { expect, describe, it, beforeEach } from 'vitest';

const storageMock = {};
global.localStorage = {
  getItem: (key) => storageMock[key] || null,
  setItem: (key, value) => {
    storageMock[key] = value;
  },
  clear: () => {
    Object.keys(storageMock).forEach((key) => delete storageMock[key]);
  },
};

const fetchUsername = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  return userData?.name || null;
};

describe('fetchUsername', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns the username when a user object is stored', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'John' }));
    expect(fetchUsername()).toBe('John');
  });

  it('returns null when no user data exists in storage', () => {
    expect(fetchUsername()).toBeNull();
  });
});
