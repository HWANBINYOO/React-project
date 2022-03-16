import styled from "styled-components";

export const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 23rem;
  padding: 0.8rem 0;
  font-size: 2.2rem;

  @media (max-width: 1366px) {
    margin: 0 15.5rem;
    font-size: 2rem;
    padding: 0.6rem 0;
  }
  @media (max-width: 1024px) {
    margin: 0 8rem;
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }

  @media (max-width: 767px) {
    margin: 0 3rem;
    font-size: 1rem;
    padding: 0.4rem 0;
  }
`;

export const DelectButton = styled.button`
  background-color: #d3a27f;
  font-family: "LeeSeoyun";
  text-align: center;
  width: 5rem;
  height: 2.2rem;
  font-size: 1.5rem;

  @media (max-width: 1366px) {
    width: 5rem;
    height: 2rem;
    font-size: 1.3rem;
  }
  @media (max-width: 1024px) {
    width: 4rem;
    height: 1.5rem;
    font-size: 1rem;
  }
  @media (max-width: 767px) {
    width: 3rem;
    height: 1.2rem;
    font-size: 0.7rem;
  }
`;
