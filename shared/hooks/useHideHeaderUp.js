import { useState, useEffect } from "react";

const useHideHeaderUp = () => {
  const [hideHeaderUp, setHideHeaderUp] = useState(false);

  useEffect(() => {
    const hideHeaderUpHandler = () => {
      if (window.pageYOffset > window.innerHeight * 0.2) {
        setHideHeaderUp(true);
      } else {
        setHideHeaderUp(false);
      }
    };
    window.addEventListener("scroll", hideHeaderUpHandler);
    hideHeaderUpHandler();
    return () => window.removeEventListener("scroll", hideHeaderUpHandler);
  }, []);
  return hideHeaderUp;
};

export default useHideHeaderUp;
