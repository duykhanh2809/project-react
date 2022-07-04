import { Link } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import ProductNav from "./ProductNav";
import ServiceNav from "./ServiceNav";
import CheckAccount from "../Account/CheckAccount";
import CheckContext from "../../store/ContextAPI/check-context";
import { ModalMain } from "../UI/Modal";
import Cart from "../Cart/Cart";
import CartDropDown from "../Cart/CartDropDown";
import { useLocation } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";

const Header = (props) => {
  const [isSticky, setIsSticky] = useState("");
  const headerRef = useRef();
  const accountCtx = useContext(CheckContext);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  const stickyHeader = () => {
    const stickyClass =
      window.scrollY >= headerRef.current.getBoundingClientRect().height
        ? "header__sticky"
        : "";
    setIsSticky(stickyClass);
  };

  // console.log(headerRef);

  // const stickyCallback = function (entries, observer) {
  //   const [entry] = entries;
  //   console.log(entry);
  //   if (entry.isIntersecting) setIsSticky("header__sticky");
  //   if (!entry.isIntersecting) setIsSticky("");
  // };

  // const obsOptions = {
  //   root: headerRef.current ? headerRef.current : null,
  //   threshold: 1,
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(stickyCallback, obsOptions);
  //   if (headerRef.current) observer.observe(headerRef.current);

  //   return () => {
  //     if (headerRef.current) {
  //       observer.unobserve(headerRef.current);
  //       setIsSticky("");
  //     }
  //   };
  // }, []);

  const headerClasses =
    location.pathname === "/"
      ? `header header-modify ${isSticky}`
      : `header ${isSticky}`;

  return (
    <header className={headerClasses} ref={headerRef}>
      <Link to="/" className="header__logo">
        ETQ.
      </Link>
      <nav className="header__nav">
        <ProductNav page={props.pages} />
        <ServiceNav />
      </nav>
      <Cart />
      <CSSTransition
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames="fade-dropdown"
        in={accountCtx.isAccountChecking}
      >
        <CheckAccount />
      </CSSTransition>

      <CSSTransition
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames="fade-dropdown"
        in={accountCtx.isCartChecking}
      >
        <CartDropDown />
      </CSSTransition>

      <CSSTransition
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames="fade-modal"
        in={accountCtx.isChecking}
      >
        <ModalMain />
      </CSSTransition>
    </header>
  );
};
export default Header;
