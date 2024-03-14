import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import {useContext} from "react";

export default function Navbar(){

    const{}= useContext(GlobalContext)
    return <nav className="flex justify-between item-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
<h2 className="text-2xl font-semibold">
   FoodRecipe 
</h2>
<NavLink to={"/"} className='text-black hover:text-gray-700 duration-300' >
        FoodRecipe
    </NavLink>
<form>
    <input
    type="text"
    name="search"
    placeholder="Enter Items..."
    className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
    />
</form>
<ul className="flex gap-5">
<li>
    <NavLink to={"/"} className='text-black hover:text-gray-700 duration-300' >
        Home
    </NavLink>
</li>
<li>
    <NavLink to={"/favorites"} className='text-black hover:text-gray-700 duration-300' >
        favourites
    </NavLink>
</li>
</ul>
    </nav>
}