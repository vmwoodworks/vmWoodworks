
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ITEMS } from '../utils/queries'; // Adjust the path to where your query is defined

const Portfolio = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  function changeLastZeroToOne(url) {
    return url.replace(/(0)(?=[^0]*$)/, '1');
  }

  return (
    <div>
      {data.items.map(item => (
        <div key={item._id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
          <img src={changeLastZeroToOne(item.mainImage)} alt="Main" style={{ width: '100px', height: '100px' }} />
          <h3>{item.category}</h3>
          <p>{item.description}</p>
          <div>
            {item.secondaryImages.map((img, index) => (
              <img key={index} src={changeLastZeroToOne(img)} alt={`Secondary ${index}`} style={{ width: '50px', height: '50px', marginRight: '5px' }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;


