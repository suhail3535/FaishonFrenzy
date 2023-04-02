import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const Skell = () => {
  return (
    <Button>
      <h1 className="box">
        <Skeleton height={220} />
      </h1>
      <h1 className="name">
        <Skeleton height={20} />
        <Skeleton height={20} />
      </h1>
      <h3>
        <Skeleton height={20} />
      </h3>
      <p>
        <Skeleton height={20} />
      </p>
    </Button>
  );
};

export default Skell;

const Button = styled.button`
  display: flex; 
  gap:20px ;
  .box {
    flex: 1;
  }
  .name {
    width: 3;
  }
  h3 {
    flex: 2;
  }
  p {
    flex: 2;
  }
`;
