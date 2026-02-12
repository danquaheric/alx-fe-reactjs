import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">

        {/* Back Button */}
        <Link
          to="/"
          className="text-blue-500 hover:underline mb-4 inline-block"
        >
          ← Back to Home
        </Link>

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {recipe.title}
        </h1>

        {/* Ingredients Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
