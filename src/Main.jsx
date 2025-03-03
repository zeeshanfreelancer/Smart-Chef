import { useState } from "react";
import "./index.css";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";
import ClaudeRecipe from "./ClaudeRecipe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Main() {
    const [ingredients, setIngredients] = useState([
        "chicken", "all the main spices", "corn", "heavy cream", "pasta"
    ]);
    const [recipe, setRecipe] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchRecipe() {
        setLoading(true);
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
        setLoading(false);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient").trim();

        if (!newIngredient) return;

        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        event.target.reset();
        toast.success(`${newIngredient} added successfully!`);
    }

    function handleRemoveIngredient(ingredient) {
        setIngredients(prevIngredients => prevIngredients.filter(item => item !== ingredient));
        toast.info(`${ingredient} removed.`);
    }

    return (
        <main className="main">
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g Chicken"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button type="submit">Add Ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={fetchRecipe}
                    loading={loading}
                    onRemove={handleRemoveIngredient}
                />
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}
            <ToastContainer position="bottom-right" autoClose={3000} />
        </main>
    );
}