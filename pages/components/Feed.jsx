import Link from "next/link";
import React from "react";
import CategoryHeader from "./CategoryHeader";
import PlainContent from "./PlainContent";
export default function Feed({ name, info, data, color }) {
  return (
    <div className="container">
      <CategoryHeader
        name={name}
        info={info}
        color={color}
        data={data}
      ></CategoryHeader>
      {data.data.map((e, i) => {
        return i < 5 ? (
          <Link href={"/components/detail/ContentPage"}>
            <PlainContent key={i} content={e} color={color}></PlainContent>
          </Link>
        ) : null;
      })}

      <style jsx>{`
        .container {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
}
