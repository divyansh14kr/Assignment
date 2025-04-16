import { useEffect, useState } from "react";

export const useSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width >= 480 && width <= 768;
  const isTablet = width >= 769 && width <= 1279;
  const isDesktop = width > 1279;

  return { isMobile, isTablet, isDesktop, width };
};
