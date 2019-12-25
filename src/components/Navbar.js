import Link from "next/link";
import Container from "./generic/Container";

const Navbar = () => {
  return (
    <Container>
      <Link href="/share-thought">
        <a>New thought</a>
      </Link>
    </Container>
  );
};

export default Navbar;
