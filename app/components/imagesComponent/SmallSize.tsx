import Image, { StaticImageData } from "next/image";
import React from "react";

const SmallSize = ({img}:{img:string}) => {
  return (
    <div className="h-52 shrink-0">
      <img
        src={img}
        alt="photo"
        className="w-full h-full object-contain rounded-md"
      />
    </div>
  );
};

export default SmallSize;
