import { message } from "antd";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import { addToCart } from "../../store/reducers/cartSlice";
import {
  fetchingMeals,
  fetchedMeals,
  fetchingErrorMeals,
} from "../../store/reducers/mealSlice";
import music from '../../assets/music/music.mp3'
import './Meals.scss'

const Meals = () => {
  const { meals, loadingMeals } = useSelector((store) => store.meal);
  const {cartMeals} = useSelector(store => store.cart)
  const dispatch = useDispatch();
  const params = useParams();
  const cartMusicPlayer = useRef()

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

  function addingMealToBasket(meal) {
    dispatch(addToCart(meal))

    cartMusicPlayer.current.currentTime = 0
    cartMusicPlayer.current.play()

    setTimeout(() =>{
      cartMusicPlayer.current.pause()
    },2000)
    message.success('Product Add')
  }

  console.log(cartMeals);

  return (
    <div>
      <Heading>
        Meals of category{""}
        <b className="text-orange-600">{params.categoryName}</b>
      </Heading>

      <audio className="hidden" src={music} controls ref={cartMusicPlayer}></audio>

      <div className="row">
        {meals?.map((item) =>{
            return (
                <div className="item" key={item.strMeal}>
                  <img className="rounded-md" src={item.strMealThumb} alt="Photo" />
                  <h1 className="text-center ">{item.strMeal}</h1>
                  <button onClick={() => addingMealToBasket(item)} className="absolute p-4 bg-orange-500 text-white text-3xl top-6 right-6 rounded-md shadow-md hover:bg-orange-600 active:opacity-75 transform active:scale-95"
                  disabled={cartMeals.find(x => x.idMeal === item.idMeal)}
                  >
                      {cartMeals.findIndex(x => x.idMeal === item.idMeal) === -1 ? (
                        <i className="bx bx-cart"></i>
                      ) : (
                        <i className="bx bx-check"></i>
                      )}
                  </button>
                </div>
              )
        })}
      </div>
      <Link to={'/cart'} className='absolute right-4 w-[70px] h-[70px] text-2xl rounded-md shadow-md bg-orange-500 flex justify-center items-center'>
            <i className="bx bx-cart"></i>{cartMeals.length}
      </Link>
    </div>
    
  );
};

export default Meals;
