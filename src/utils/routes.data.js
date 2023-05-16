import Cart from "../screens/cart/Cart";
import FilterArea from "../screens/FilterArea/FilterArea";
import Home from "../screens/Home/Home";
import Meals from "../screens/Meals/Meals";
import NoFond from "../screens/NoFound/NoFond";

export const RoutesData = [
    {path:'/', element: Home},
    {path:'/category/:categoryName', element: Meals},
    {path: '/cart', element:Cart},
    {path:'/area/:areaName', element: FilterArea},
	{ path: '*', element: NoFond },
]