import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchedCategories,
  fetchingCategories,
  fetchingErrorCategories,
} from "../../store/reducers/cotegorySlice";
import "./Home.scss";

import { Spin } from "antd";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";

const Home = () => {
  const { loadingCategories, categories } = useSelector(
    (store) => store.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingCategories());
    axios
      .get("https://themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        console.log(res.data.categories);
        dispatch(fetchedCategories(res.data.categories));
      })
      .catch((err) => {
        dispatch(fetchingErrorCategories());
      });
  }, []);

  return (
    <div className="container mx-auto py-12">
      <Heading>All Categories</Heading>
      <Spin spinning={loadingCategories}>
        <div className="row" >
          {categories?.map((item) => 
            (<Link to={`/category/${item.strCategory}`}>
              <div className="item">
                <img src={item.strCategoryThumb} />
                <h1>{item.strCategory}</h1>
              </div>
            </Link>)
          )}
        </div>
      </Spin>
    </div>
  );
};

export default Home;
