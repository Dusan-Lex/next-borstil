import Link from "next/link";
import { BoxError } from "./Section404Styles";

const section404 = () => {
  return (
    <BoxError>
      <h1>404</h1>
      <p>Tražena stranica nije pronađena</p>
      <Link href="/">
        <a>Povratak na naslovnu</a>
      </Link>
    </BoxError>
  );
};

export default section404;
