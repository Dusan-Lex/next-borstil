import { useState, useEffect } from "react";

const useOffsetY = () => {
  const [offSetY, setOffSetY] = useState(0);
  const scrollHandler = () => setOffSetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return offSetY;
};

export default useOffsetY;
