import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Recipe Sharing Application</h1>

        {/* Form to add a new recipe */}
        <AddRecipeForm />

        {/* Search bar to filter recipes */}
        <SearchBar />

        {/* Routes for listing and viewing recipes */}
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
 * and pass it to RecipeDetails as a number
 */
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;
