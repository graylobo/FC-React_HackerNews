import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DetailCategoryName from "../DetailCategoryName";
import DetailPage from "../DetailPage";
import DetailFooter from "../DetailFooter";
import { useSelector } from "react-redux";
import Link from "next/link";
export default function Category() {
  const router = useRouter();
  const categoryData = useSelector((s) => s);
  const [current, setCurrent] = useState({});
  const { category } = router.query;
  useEffect(async () => {
    const data = await categoryData.data;
    setCurrent(data.find((e) => e.name === category));
  });
  return (
    <div className="container">
      <div className="category">{category}</div>
      {current?.data?.data.map((e) => (
        <Link
          href={`/components/detail/ContentPage/${category}/${e.id}`}
          key={e.id}
        >
          <a>
            <DetailPage {...e}></DetailPage>
          </a>
        </Link>
      ))}
      <style jsx>{`
        .category {
          color: #ff6600;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 10px;
          border-bottom: solid gray 1px;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </div>
  );
}
