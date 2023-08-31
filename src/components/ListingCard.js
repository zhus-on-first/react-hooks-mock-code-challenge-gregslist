import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const [favorite, setFavorite] = useState(true);

  function handleFavoriteClick() {
    setFavorite(!favorite);
  }

  function handleListingDelete() {
    onDelete(listing.id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            className="emoji-button favorite active"
            onClick={handleFavoriteClick}
          >
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={handleFavoriteClick}
          >
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleListingDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;

//like function
//set like state
//el on like button
//function to handle the click event
//ternary to display this or that

//delete function
//el to button
//function to handle el event. function to process delete
//find app with state to process delete with fetch
