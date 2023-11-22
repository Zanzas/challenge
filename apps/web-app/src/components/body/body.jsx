import React from "react";
import FilterComponent from "../filter/filter";
import "./body.css";
import ListingContainerComponent from "../listingContainer/listingContainer";

const BodyComponent = () => {
  return (
    <div className="containerBody">
      <div className="filterComponent">
        <FilterComponent />
      </div>
      <div className="listingContainerComponent">
        <ListingContainerComponent className="listingContainerComponent" />
      </div>
    </div>
  );
};

export default BodyComponent;
