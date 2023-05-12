import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import {
  fetchingMeals,
  fetchedMeals,
  fetchingErrorMeals,
} from "../../store/reducers/mealSlice";
const Meals = () => {
  const { meals, loadingMeals } = useSelector((store) => store.meal);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchingMeals());
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName} `)
      .then((res) => {
        dispatch(fetchedMeals(res.data.meals));
      })
      .catch((err) => {
        dispatch(fetchingErrorMeals());
      });
  },[]);

  return (
    <div>
      <Heading>
        Meals of category{""}
        <b className="text-orange-600">{params.categoryName}</b>
      </Heading>

      <div className="row">
        {meals?.map((item) =>{
            return (
                <div className="item" key={item.strMeal}>
                  <img className="rounded-md" src={item.strMealThumb} alt="Photo" />
                  <h1 className="text-center ">{item.strMeal}</h1>
                  <button className="absolute p-4 bg-orange-500 text-white text-3xl top-6 right-6 rounded-md shadow-md hover:bg-orange-600 active:opacity-75 transform active:scale-95">
                      <i className="bx bx-cart"></i>
                  </button>
                </div>
              )
        })}
      </div>
      <Link to={'/cart'} className='w-[70px] h-[70px] rounded-md shadow-md bg-orange-500 flex items-center'>
            <i className="bx bx-cart">(0)</i>
      </Link>
    </div>
    
  );
};

export default Meals;
