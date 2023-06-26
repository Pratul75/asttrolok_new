import React, { useState, useEffect } from 'react';

const AreaOfinterest = ({dataArray}) => {
  const [data, setData] = useState();


  // Fetch data from the backend
   
 useEffect(()=>{
   setData(dataArray)
 },[dataArray])



  return (
    <div>
      {/* Display fetched data */}
      {data && data.map((item, index) => (
        <div key={index} className="badge badge-info gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          {item}
        </div>
      ))}
    </div>
  );
};

export default AreaOfinterest;
