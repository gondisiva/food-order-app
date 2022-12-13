import React from "react";
import AvilableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvilableMeals />
    </React.Fragment>
  );
};

export default Meals;
