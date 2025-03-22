"use client";
import { useState } from "react";
import { RiPokerHeartsLine } from "react-icons/ri";
import { RiPokerHeartsFill } from "react-icons/ri";
const FavButton = () => {
  const [isFav, setIsFav] = useState(false);
  const favHandler = () => {
    setIsFav(!isFav);
  };
  return (
    <button
      className="bg-background-light p-[3px] rounded-[3px] absolute top-0.5 right-0.5 cursor-pointer z-1 opacity-0 group-hover:opacity-100 duration-300"
      onClick={favHandler}
      role="button"
      type="button"
      title="add to favourites"
    >
      {isFav ? (
        <RiPokerHeartsFill size={24} fill="#E9BDB9" />
      ) : (
        <RiPokerHeartsLine size={24} fill="#E9BDB9" />
      )}
    </button>
  );
};

export default FavButton;
