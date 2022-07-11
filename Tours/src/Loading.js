import React from 'react';
import "./style.css";
import ReactLoading from 'react-loading';

const Loading = () => {
  return (

        <ReactLoading
          type={"bubbles"}
          color={"#ffff"}
          height={500}
          width={500}
        />
  );
};

export default Loading;
