import React from "react";
import ListingItemComponent from "../listingItem/listingItem";
import "./linstingContainer.css";

const ListingContainerComponent = () => {
  return (
    <div className="containerListing container">
      <ListingItemComponent
        address="6 place de l'hopital général, 59300 Valenciennes"
        startDate="20/31/2023"
        endDate="30/14/2023"
        price={22}
      />
    </div>
  );
};
export default ListingContainerComponent;
