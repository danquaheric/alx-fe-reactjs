import React, { useEffect } from 'react'; // <-- Import React and useEffect
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './components/recipeStore';

function App() {
  // Optionally generate recommendations on load
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Call generateRecommendations when component mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Recipe Sharing Application</h1>

        {/* Form to add a new recipe */}
        <AddRecipeForm />

        {/* Search bar to filter recipes */}
        <SearchBar />

        {/* User favorites and personalized recommendations */}
        <FavoritesList />
        <RecommendationsList />

        {/* Routes for listing recipes and viewing recipe details */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

/**
 * Wrapper component to extract the `id` param
 * and pass it as a number to RecipeDetails
 */
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;
