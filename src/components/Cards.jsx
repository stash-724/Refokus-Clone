import React from "react";
import Card from "./Card";
function Cards() {
  return (
    <div className="w-full">
      <div className="gap-2 max-w-screen-xl mx-auto py-20 flex">
        <Card width={"basis-1/3"} start={false} para={true} />
        <Card width={"basis-2/3"} start={true} para={false} hover={"bg-violet-600"}/>
      </div>
    </div>
  );
}

export default Cards;
