import { useState } from "react";
import SmartChefLogo from "../src/assets/smart-chef-icon.png";

export default function Header() {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(prev => !prev);
    }

    return (
        <header>
            <img
                onClick={handleClick}
                src={SmartChefLogo}
                alt="Smart Chef Logo"
                className="logo"
            />
            <h1>Smart Chef</h1>
            {isClicked && <p className="fade-in">(Enter the ingredients to generate a recipe!)</p>}
        </header>
    );
}