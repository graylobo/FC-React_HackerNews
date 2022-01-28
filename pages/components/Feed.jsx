import React from "react";
import CategoryHeader from "./CategoryHeader";
import PlainContent from "./PlainContent";
export default function Feed({ name, info, data, color }) {
  return (
    <div>
      <CategoryHeader
        name={name}
        info={info}
        color={color}
        data={data}
      ></CategoryHeader>
      {data.data.map((e, i) => {
        return i < 5 ? (
          <PlainContent key={i} content={e} color={color}></PlainContent>
        ) : null;
      })}
    </div>
  );
}
