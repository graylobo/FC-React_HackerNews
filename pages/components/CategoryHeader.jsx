import styled from "@emotion/styled";
import { css } from "@emotion/css";
import Link from "next/Link";

const Category = styled.div`
  position: relative;
  background-color: ${(props) => props.color};
  width: 335px;
  height: 63.04px;
  border-radius: 30px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;

  .categoryName {
    margin-left: 30px;
    font-size: 30px;
    font-weight: 1000;
    color: white;
  }
  .info {
    margin-left: 30px;
    bottom: 10px;
    position: absolute;
    color: white;
  }
  .moreBtn {
    color: ${(props) => props.color};
    background-color: white;
    border-radius: 30px;
    float: right;
    width: 70px;
    height: 30px;
    bottom: 17px;
    left: 250px;
    position: absolute;
    border: none;
    cursor: pointer;
  }
`;
const CategoryHeader = ({ name, info, color, data }) => {
  return (
    <Category color={color}>
      <div className="categoryName">{name}</div>
      <div className="info">{info}</div>
      <div>
        <Link href="./components/detail/DetailFeed">
          <button className="moreBtn">More</button>
        </Link>
      </div>
    </Category>
  );
};

export default CategoryHeader;
