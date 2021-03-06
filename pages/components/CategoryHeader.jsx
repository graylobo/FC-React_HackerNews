import styled from "@emotion/styled";
import Link from "next/link";

const Category = styled.div`
  position: relative;
  background-color: ${(props) => props.color};
  width: 335px;
  height: 63.04px;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  .container {
    margin-left: 20px;
  }
  .categoryName {
    font-size: 20px;
    font-weight: 1000;
    color: white;
  }
  .info {
    position: absolute;
    color: white;
    font-size: 13px;
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
      <div className="container">
        <div className="categoryName">{name}</div>
        <div className="info">{info}</div>
        <div>
          <Link href={`/components/detail/DetailFeed/${name}`}>
            <button className="moreBtn">More</button>
          </Link>
        </div>
      </div>
    </Category>
  );
};

export default CategoryHeader;
