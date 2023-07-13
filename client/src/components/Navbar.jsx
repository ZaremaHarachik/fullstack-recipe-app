import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate();
  return (
    <div className='Navbar'>
     <Link to="/">Home</Link>
     <Link to="/create-recipe"> Create Recipe</Link>
     <Link to="/saved-recipes"> Saved Recipes</Link>
     <Link to="/auth"> Login/Register</Link>
    </div>
  )
}

export default Navbar
