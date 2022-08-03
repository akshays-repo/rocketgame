/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FC, ReactNode } from "react";

type TControlButton = {
  handleUp: () => void;
  handleDown: () => void;
  handleLeft: () => void;
  handleRight: () => void;
  handleRocket: () => void;
};

const ControlButton: FC<TControlButton> = ({
  handleDown,
  handleLeft,
  handleRight,
  handleRocket,
  handleUp,
}) => {
  return (
    <div className="flex flex-col justify-end items-center">
      <Button onClick={handleUp}>
        <img src="https://img.icons8.com/metro/26/000000/long-arrow-up.png" />
      </Button>
      <div className="flex justify-center items-center">
        <Button onClick={handleLeft}>
          <img src="https://img.icons8.com/metro/26/000000/long-arrow-left.png" />
        </Button>
        <Button onClick={handleRocket}>
          <img src="https://img.icons8.com/arcade/64/000000/experimental-rocket-arcade.png" />
        </Button>
        <Button onClick={handleRight}>
          <img src="https://img.icons8.com/metro/26/000000/long-arrow-right.png" />
        </Button>
      </div>
      <Button onClick={handleDown}>
        <img src="https://img.icons8.com/metro/26/000000/long-arrow-down.png" />
      </Button>
    </div>
  );
};

export const Button: FC<{ children: ReactNode; onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="m-3 bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
    >
      {children}
    </button>
  );
};

export default ControlButton;
