import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please include at least two ingredients separated by commas.";
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        instructions: steps.split("\n").map((step) => step.trim()),
      };

      console.log("New Recipe Submitted:", newRecipe);

      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");

      // Redirect to Home
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">

        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Ingredients (separate with commas)
            </label>
            <textarea
              className="w-full border rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Preparation Steps (one per line)
            </label>
            <textarea
              className="w-full border rounded-lg p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
