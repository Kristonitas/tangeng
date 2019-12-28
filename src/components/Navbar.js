import Link from "next/link";
import styled from "styled-components";

const Row = styled.form`
  display: flex;
  background-color: #ddd;
  padding: 20px;
  align-items: center;
`;

const Title = styled.h2`
  color: #5a7;
  margin-right: 20px;
`;

const Action = styled.a`
  color: #79f;
  margin-right: 20px;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Row>
      <Title>Thoughts!</Title>
      <Link href="/share-thought" passHref>
        <Action>
          <h2>New thought</h2>
        </Action>
      </Link>
    </Row>
  );
};

export default Navbar;
