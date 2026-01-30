import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
