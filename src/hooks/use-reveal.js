import { useState, useEffect, useRef } from "react";

const useReveal = function () {
  const sectionRef = useRef();
  const [isReveal, setIsReveal] = useState(false);

  const obsCallback = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsReveal(true);
      observer.unobserve(entry.target);
    }
  };

  const obsOptions = {
    root: null,
    threshold: 0.15,
  };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(obsCallback, obsOptions);
    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
    };
  }, []);

  return [isReveal, sectionRef];
};

export default useReveal;
