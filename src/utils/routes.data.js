import Home from "../screens/Home/Home";
import Meals from "../screens/Meals/Meals";

export const RoutesData = [
    {path:'/', element: Home},
    {path:'/category/:categoryName', element: Meals},

]