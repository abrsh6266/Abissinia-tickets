import Image, { StaticImageData } from "next/image";
import React from "react";

const SmallSize = ({img}:{img:StaticImageData}) => {
  return (
    <div className="h-52 shrink-0">
      <Image
        src={img}
        alt="photo"
        className="w-full h-full object-contain rounded-md"
      />
    </div>
  );
};

export default SmallSize;
