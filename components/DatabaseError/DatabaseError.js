import Link from "next/link";
import { BoxError } from "../404/Section404Styles";

const DatabaseError = () => {
  return (
    <BoxError>
      <h1>500</h1>
      <p>Neuspešna konekcija sa bazom podataka</p>
      <Link href="/">
        <a>Povratak na naslovnu</a>
      </Link>
    </BoxError>
  );
};

export default DatabaseError;
