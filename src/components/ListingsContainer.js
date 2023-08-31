import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data));
  }, []);

  function onDelete(listingId) {
    fetch(`http://localhost:6001/listings/${listingId}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setListings((prevListings) =>
          prevListings.filter((listing) => listing.id !== listingId)
        );
      }
    });
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} onDelete={onDelete} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
