import React from "react";
import FilterComponent from "../filter/filter";
import "./body.css";
import ListingContainerComponent from "../listingContainer/listingContainer";

const BodyComponent = () => {
  return (
    <div className="containerBody">
      <div className="filterComponent">
        <FilterComponent
          address="4 Rue de la foret 59000 Lille FRANCE"
          startDate="20/11/2023"
          endDate="30/12/2023"
          price={20}
        />
      </div>
      <div className="listingContainerComponent">
        <ListingContainerComponent className="listingContainerComponent" />
      </div>
    </div>
  );
};

export default BodyComponent;
