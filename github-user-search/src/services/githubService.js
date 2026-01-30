import axios from 'axios';

const GITHUB_API_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = GITHUB_API_TOKEN
  ? { Authorization: `Bearer ${GITHUB_API_TOKEN}` }
  : {};

/**
 * Fetch users with advanced search options
 * @param {object} params - { username, location, minRepos }
 */
export const fetchUsersAdvanced = async ({ username, location, minRepos }) => {
  let query = username || '';
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  const response = await axios.get(url, { headers });
  return response.data; // contains items array
};
