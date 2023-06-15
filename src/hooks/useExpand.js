import { useRef, useState, useEffect } from "react";

const useExpand = () => {
  const ref = useRef(null);

  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);


  const expand = () => {
    setExpanded(true);
  }

  return { ref, isExpanded, expand };
};

export default useExpand;
