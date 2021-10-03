const X = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    className={props.className}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
export default X;
