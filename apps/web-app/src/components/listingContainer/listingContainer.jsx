import React, { useState, useEffect } from "react";
import ListingItemComponent from "../listingItem/listingItem";
import "./linstingContainer.css";
import { getParks } from "../../services/getParksService";

const ListingContainerComponent = ({ buttonText = "Louer" }) => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchParks = async () => {
      try {
        const data = await getParks();
        setParks(data);
      } catch (error) {
        console.error("Erreur lors du chargement des parks:", error);
      }
    };
    fetchParks();
  }, []);

  return (
    <div className="containerListing container">
      {parks.map((park, index) => (
        <ListingItemComponent
          key={index}
          address={park.address}
          startDate={park.startDate}
          endDate={park.endDate}
          price={park.price}
          buttonText={buttonText}
        />
      ))}
    </div>
  );
};

export default ListingContainerComponent;
