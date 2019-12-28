import styled from "styled-components";

const Card = styled.div`
  padding: 20px;
  margin: 10px;
  background-color: #ddd;
  width: 100%;
  min-width: 256px;
  max-width: 512px;
  box-sizing: border-box;
`;

const Title = styled.p`
  font-size: 2em;
  font-weight: bold;
`;

const Copy = styled.p`
  font-size: 1em;
`;

Card.Title = Title;
Card.Copy = Copy;

export default Card;
