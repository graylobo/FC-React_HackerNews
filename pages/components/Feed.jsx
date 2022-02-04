import Link from "next/link";
import React from "react";
import CategoryHeader from "./CategoryHeader";
import PlainContent from "./PlainContent";
export default function Feed({ name, info, data, color }) {
  return (
    <div className="container">
      <div className="container-box">
        <CategoryHeader
          name={name}
          info={info}
          color={color}
          data={data}
        ></CategoryHeader>
        <div className="container-content">
          {data.data.map((e, i) => {
            console.log(e);
            return i < 5 ? (
              <Link href={`/components/detail/ContentPage/${name}/${e.id}`}>
                <a>
                  <PlainContent
                    key={i}
                    content={e}
                    color={color}
                  ></PlainContent>
                </a>
              </Link>
            ) : null;
          })}
        </div>
      </div>

      <style jsx>{`
        .container {
          overflow: auto;
        }
        .container-box {
          margin-top: 20px;
          margin-left: 10px;
        }
        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </div>
  );
}
