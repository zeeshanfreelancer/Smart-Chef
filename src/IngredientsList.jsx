import { Utensils } from "lucide-react";

export default function IngredientsList({ ingredients, getRecipe, loading, onRemove, ref }) {
    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key={index} className="ingredient-item">
            <span>{ingredient}</span>
            <button onClick={() => onRemove(ingredient)} className="remove-button">
                ×
            </button>
        </li>
    ));

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>

            {ingredients.length > 2 && (
                <div className="get-recipe-container">
                    <div ref={ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button onClick={getRecipe} disabled={loading}>
                        <Utensils size={20} color="#fff" />
                        {loading ? <span className="loader"></span> : "Get a Recipe"}
                    </button>
                </div>
            )}
        </section>
    );
}