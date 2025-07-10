import React from "react";
import WishlistPosts from "../wishlistPosts/WishlistPosts";
import WishlistComments from "../wishlistComments/WishlistComments";
import WishlistAlbums from "../wishlistAlbums/WishlistAlbums";

const Wishlist = () => {
  
  return (
    <div>
      <WishlistPosts />
      <WishlistComments />
      <WishlistAlbums />
    </div>
  );
};

export default React.memo(Wishlist);
