import React from "react";
import WishlistPosts from "../wishlistPosts/WishlistPosts";
import WishlistComments from "../wishlistComments/WishlistComments";
import WishlistAlbums from "../wishlistAlbums/WishlistAlbums";
import WishlistTodos from "../wishlistTodos/WishlistTodos";
import WishlistUsers from "../wishlistUsers/WishlistUsers";

const Wishlist = () => {
  
  return (
    <div>
      <WishlistPosts />
      <WishlistComments />
      <WishlistAlbums />
      <WishlistTodos />
      <WishlistUsers />
    </div>
  );
};

export default React.memo(Wishlist);
