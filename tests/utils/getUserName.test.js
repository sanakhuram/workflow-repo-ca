import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('fetchUsername', () => {
  let mockStorage;

  beforeEach(() => {
    mockStorage = {
      getItem: vi.fn(), // Mock function
    };
  });

  it('retrieves the username from the profile object in session storage', () => {
    mockStorage.getItem.mockReturnValue(JSON.stringify({ username: 'Alex' }));

    const fetchUsername = (storage) => {
      const userData = JSON.parse(storage.getItem('profile'));
      return userData ? userData.username : null;
    };

    const username = fetchUsername(mockStorage);
    expect(username).toBe('Alex');
    expect(mockStorage.getItem).toHaveBeenCalledWith('profile');
  });

  it('returns null when no profile exists in session storage', () => {
    mockStorage.getItem.mockReturnValue(null);

    const fetchUsername = (storage) => {
      const userData = JSON.parse(storage.getItem('profile'));
      return userData ? userData.username : null;
    };

    const username = fetchUsername(mockStorage);
    expect(username).toBeNull();
    expect(mockStorage.getItem).toHaveBeenCalledWith('profile');
  });
});
