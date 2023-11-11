import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export const Isloading = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: "ok" });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [dispatch]);
  return (
    <Wrapper>
      <img
        className="loader1"
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .loader1 {
    margin-top: 75px;
  }
`;
