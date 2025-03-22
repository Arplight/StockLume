import Link from "next/link";
import FavButton from "./favButton";
import Image from "next/image";
import { FC } from "react";
import { MainCardProps } from "@/lib/types/types";

const MainCard: FC<MainCardProps> = ({
  cardRatio,
  cardCategories,
  cardPath,
  cardImage,
  cardTitle,
}) => {
  return (
    <div
      className={`group ${cardRatio} bg-secondary-light relative rounded-[5px] overflow-hidden `}
    >
      <FavButton />
      <Link href={cardPath}>
        <Image
          src={cardImage}
          alt={cardTitle}
          layout="fill"
          className="z-0 duration-300 brightness-80 group-hover:brightness-100"
        />
      </Link>
      <ul className="flex gap-[5px] absolute bottom-0.5 left-0.5 z-1 opacity-0 duration-300 group-hover:opacity-100">
        {cardCategories.map((category, idx) => (
          <li
            key={idx}
            className="bg-background-light bg-opacity-80 p-[5px] rounded-[3px] flex duration-300 hover:brightness-150"
          >
            <Link href={category.path} className="fs-xs fc-text capitalize">
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainCard;
