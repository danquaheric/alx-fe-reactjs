import axios from 'axios';

const GITHUB_API_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = GITHUB_API_TOKEN
  ? { Authorization: `Bearer ${GITHUB_API_TOKEN}` }
  : {};

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error('GitHub API error:', error.response || error.message);
    throw error;
  }
};
