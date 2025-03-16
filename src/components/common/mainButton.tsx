import { MainButtonProps } from "@/lib/types/types";
import Link from "next/link";
import { FC } from "react";

const MainButton: FC<MainButtonProps> = ({
  withLink,
  buttonLabel,
  isFullWidth = false,
  buttonType = "button",
  withIcon = undefined,
}) => {
  const buttonStyle = `py-0.5 px-2 bg-gradient-vertical fs-xs text-[#11041B] rounded-[5px] font-medium cursor-pointer duration-300 hover:shadow-[0_5px_20px_5px_#4a427650] ${
    isFullWidth ? "w-full flex justify-center" : "w-max "
  } ${withIcon ? "flex gap-0.5 items-center" : ""}`;

  const ButtonElement = () => (
    <button type={buttonType} role="button" className={buttonStyle}>
      {buttonLabel}
      {withIcon && withIcon}
    </button>
  );

  return (
    <>
      {withLink ? (
        <Link href={withLink} className={`${buttonStyle}`}>
          {buttonLabel}
          {withIcon && withIcon}
        </Link>
      ) : (
        <ButtonElement />
      )}
    </>
  );
};

export default MainButton;
