import React, { useState, useEffect } from "react";
import ListingItemComponent from "../listingItem/listingItem";
import "./linstingContainer.css";
import { getParks } from "../../services/getParksService";

const ListingContainerComponent = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchParks = async () => {
      try {
        const data = await getParks();
        setParks(data);
      } catch (error) {
        console.error("Erreur lors du chargement des parcs:", error);
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
        />
      ))}
    </div>
  );
};

export default ListingContainerComponent;
