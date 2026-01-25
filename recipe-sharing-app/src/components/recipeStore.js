import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // State
  recipes: [],
  searchTerm: '',

  // Derived state: filtered recipes
  get filteredRecipes() {
    return this.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  },

  // Actions

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Initialize recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
