import fetch from "isomorphic-fetch";
import Thoughts from "components/Thoughts";
import { rootUrl } from "lib/helpers";
import Container from "components/generic/Container";

const Index = props => {
  return (
    <Container>
      <Thoughts thoughts={props.thoughts} />
    </Container>
  );
};

Index.getInitialProps = async ({ req }) => {
  const baseURL = rootUrl(req);
  const res = await fetch(`${baseURL}/api/thoughts`);
  return {
    thoughts: await res.json()
  };
};

export default Index;
