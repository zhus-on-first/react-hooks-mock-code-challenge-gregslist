import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const listings = [
    {
      id: 1,
      description: "heater",
      image: "./images/heater.jpg",
      location: "BROOKLYN",
    },
    {
      id: 2,
      description: "2019 Toyota Tacoma grill",
      image: "./images/toyota-grill.jpg",
      location: "Williamsburg",
    },
  ];
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard listing={listing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
