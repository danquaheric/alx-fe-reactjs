import axios from 'axios';

// Get the GitHub token from the .env file
const GITHUB_API_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Configure headers only if token exists
const headers = GITHUB_API_TOKEN
  ? { Authorization: `Bearer ${GITHUB_API_TOKEN}` }
  : {};

export const fetchUserData = async (username) => {
  if (!username) {
    throw new Error('Username is required to fetch GitHub data.');
  }

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers,
    });

    // Return the user data
    return response.data;
  } catch (error) {
    if (error.response) {
      // GitHub API returned an error (e.g., 404 or 403)
      console.error(
        'GitHub API error:',
        error.response.status,
        error.response.data.message
      );
      throw new Error(
        `GitHub API error: ${error.response.status} - ${error.response.data.message}`
      );
    } else if (error.request) {
      // Request was made but no response
      console.error('No response from GitHub API:', error.message);
      throw new Error('No response from GitHub API.');
    } else {
      // Other errors
      console.error('Error fetching GitHub data:', error.message);
      throw new Error('Error fetching GitHub data.');
    }
  }
};
