import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  return mounted
    ? ReactDOM.createPortal(<div></div>, document.querySelector("#overlays"))
    : null;
};

export default Modal;
