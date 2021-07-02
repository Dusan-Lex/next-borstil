import { Loading } from "./LoadingFirstStyles";

const LoadingFirst = (props) => {
  return (
    <Loading className={`${props.loadingClass}-1`}>
      <div>
        <h1 className={`${props.loadingClass}-2`}>Bor Stil</h1>
      </div>
    </Loading>
  );
};

export default LoadingFirst;
