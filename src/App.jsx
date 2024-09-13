import React from "react";
import "./App.css";

import ProductCategories from "./Components/ProductSection/CategorySection/ProductCategories";
import Woman from "./Components/ProductSection/CategorySection/SubCateogry/Womandata";
import MoretoExplore from "./Components/ProductSection/CategorySection/MoretoExplore";

const App = () => {
  return (
    <div>
      <ProductCategories />
      {/* <ToggleSection /> */}
    </div>
  );
};

export default App;
