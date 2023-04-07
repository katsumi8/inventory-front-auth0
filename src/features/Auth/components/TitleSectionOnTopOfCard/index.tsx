import React from "react";
import { TitleSectionOnTopOfCardProps } from "../../types";


function TitleSectionOnTopOfCard({
  title,
  subMessage,
}: TitleSectionOnTopOfCardProps) {
  return (
    <section className="flex flex-col py-6">
      <h1 className="py-2 text-center text-4xl text-[#5651e5]">{title}</h1>
      {subMessage ? (
        <p className="text-center text-gray-700">`{subMessage}</p>
      ) : null}
    </section>
  );
}

export default TitleSectionOnTopOfCard;
