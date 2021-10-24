import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../context/AuthProvider";

export default function SubMenuClickHandler() {
  const [auth] = useAuthContext();

  // open & close Panel sub menu
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // for closing SubMenu if click other target And also dont close if if click on items in sub menu
  let menuRef = useRef();
  useEffect(() => {
    if (!auth) {
      setOpen(false);
    }
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  }, [auth]);

  return {
    menuRef,
    open,
    handleOpen,
  };
}
