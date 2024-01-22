import React from "react";

interface clippingsProps {
  heading: string;
  value: string;
}

const Clippings = ({ heading, value }: clippingsProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-gray-500">{heading}</h3>
      <h3 className="font-[500] text-[#220b49]">{value}</h3>
    </div>
  );
};

export default Clippings;
