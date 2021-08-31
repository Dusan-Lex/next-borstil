import Link from "next/link";
import { Box404 } from "./404SectionStyles";

const section404 = () => {
  return (
    <Box404>
      <h1>404</h1>
      <p>Tražena stranica nije pronađena</p>
      <Link href="/">
        <a>Povratak na naslovnu</a>
      </Link>
    </Box404>
  );
};

export default section404;
