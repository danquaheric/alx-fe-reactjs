import { useState, useEffect } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load mock data into state
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Recipe Sharing Platform
      </h1>

      <div className="text-center mb-6">
  <Link
    to="/add"
    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
  >
    Add New Recipe
  </Link>
</div>


      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {recipe.summary}
              </p>

                            <Link
                to={`/recipe/${recipe.id}`}
                className="mt-4 inline-block text-blue-500 font-medium hover:underline"
                >
                View Recipe
                </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
