import ReactMarkdown from "react-markdown";
import { ChefHat } from "lucide-react";

export default function ClaudeRecipe({ recipe }) {
    return (
        <section className="suggested-recipe-container fade-in" aria-live="polite">
            <h2>
                <ChefHat size={24} color="#D17557" /> Chef Claude Recommends:
            </h2>
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
    );
}