import { Link } from "react-router-dom";
import '../css/portfolio.css';
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
    <div id="portolio-page" style={{marginBottom: '100px'}}>
      <h2 className="heading" style={{marginLeft: '150px'}}>Portfolio</h2>
      <div className="portfolio-div">
        {data.items.map((item) => (
          <div className="portfolio-item"
            key={item._id}
          >
            <Link to={`/details/${item._id}`}>
              <img
                src={changeLastZeroToOne(item.mainImage)}
                alt="Main"
              />
              <div className="overlay">
              <p className="details-p">{item.description}</p>
              <p className="category-p">{item.category}</p>
              </div>
            </Link>
          </div>
    ))}
      </div>
    </div>
    );

};

export default Portfolio;
