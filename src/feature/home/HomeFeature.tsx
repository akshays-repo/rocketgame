/* eslint-disable @next/next/no-img-element */
import useMouse from "@react-hook/mouse-position";
import { useEffect, useRef, useState } from "react";
import ControlButton from "./Button";
import styles from "./HomeFeatue.module.scss";

const height = 800;
const width = 1200;

const HomeFeature = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const spaceShipRef = useRef<HTMLImageElement>(null);

  const divRef = useRef<HTMLDivElement>(null);

  const [pos, setpos] = useState({
    x: 700,
    y: 10,
  });

  useEffect(() => {
    // setInterval(() => {
    //   if (spaceShipRef.current !== null) {
    //     if (spaceShipRef.current.style.top === "26px") {
    //       spaceShipRef.current.style.top = "106px";
    //       spaceShipRef.current.style.right = "100px";
    //     } else {
    //       spaceShipRef.current.style.top = "26px";
    //       spaceShipRef.current.style.right = "100px";
    //     }
    //   }
    // }, 10000);

    setTimeout(() => {
      if (imageRef.current !== null) {
        let randY = pos.x;
        let randX = pos.y;
        imageRef.current.style.transform = `translate(${randX}px, ${randY}px)`;
      }
    });
  }, [pos]);

  const handleButton = () => {
    setpos({
      ...pos,
      x: pos.x - 10,
      y: pos.y + 10,
    });
  };

  const handleUp = () => {
    setpos({
      ...pos,
      x: pos.x - 10,
    });
  };
  const handleDown = () => {
    setpos({
      ...pos,
      x: pos.x + 10,
    });
  };

  const handleLeft = () => {
    setpos({
      ...pos,
      y: pos.y - 10,
    });
  };

  const handleRight = () => {
    setpos({
      ...pos,
      y: pos.y + 10,
    });
  };

  return (
    <div className="" ref={divRef} tabIndex={0} onKeyDown={handleButton}>
      <div className={styles.homefeature}>
        <img
          src="/torrocket.png"
          width={150}
          height={200}
          ref={imageRef}
          alt="rocketimage"
          className={styles.imagee}
        />
        {/* <button
          onClick={handleButton}
          type="button"
          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Primary
        </button>
        <button onClick={handleUp} className=" inline-block px-6 py-2.5">
          up
        </button>
        <button onClick={handleDown} className=" inline-block px-6 py-2.5">
          down
        </button>{" "}
        <button onClick={handleLeft} className=" inline-block px-6 py-2.5">
          left
        </button>{" "}
        <button onClick={handleRight} className=" inline-block px-6 py-2.5">
          right
        </button> */}

        <img
          src="/spacestation.png"
          width={600}
          height={"auto"}
          alt="rocketimage"
          ref={spaceShipRef}
          className={styles.spacestation}
        />
        <div
          style={{
            position: "fixed",
            bottom: "77px",
            /* left: 0; */
            right: "93px",
          }}
        >
          <ControlButton
            handleDown={handleDown}
            handleLeft={handleLeft}
            handleUp={handleUp}
            handleRight={handleRight}
            handleRocket={handleButton}
          />
        </div>
      </div>
    </div>
  );
};
export default HomeFeature;
