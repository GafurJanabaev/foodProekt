import { message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../../components/Heading/Heading";
import { removeFromCart } from "../../store/reducers/cartSlice";

const Cart = () => {
  const { cartMeals } = useSelector((store) => store.cart);
  const dispatch = useDispatch()


  function removeMealFromCart(id) {
    dispatch(removeFromCart(id))
    message.info('Meal removed from basket')
    console.log(id);
  }
  return (
    <div>   
      <Heading>
        You favorite <span className="text-orange-500">meals</span>
      </Heading>
      {
        cartMeals.length === 0 && (
            <img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png'/>
        )
      }

      <div className="row">
        {cartMeals.map((item) => {
          return (
            <div className="item relative" key={item.idMeal}>
              <img src={item.strMealThumb} className="rounded-md" />
              <h1 className="text-center w-full truncate">{item.strMeal}</h1>
              <button onClick={() => removeMealFromCart(item.idMeal)} className="absolute p-4 bg-orange-500 text-white text-3xl top-6 right-6 rounded-md shadow-md hover:bg-orange-600 active:opacity-75 transform active:scale-95">
                <i className="bx bx-trash"></i>
              </button> 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
