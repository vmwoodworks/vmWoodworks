import { Link } from "react-router-dom";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../utils/queries"; // Adjust the path to where your query is defined

const Portfolio = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function changeLastZeroToOne(url) {
    return url.replace(/(0)(?=[^0]*$)/, "1");
  }

  return (
    <div>
      {data.items.map((item) => (
        <div
          key={item._id}
          style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}
        >
          <Link to={`/details/${item._id}`}>
            <img
              src={changeLastZeroToOne(item.mainImage)}
              alt="Main"
              style={{ width: "100px", height: "100px" }}
            />
            <h3>{item.category}</h3>
            <p>{item.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
