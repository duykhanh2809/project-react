import { Link } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import { CaretRight, MagnifyingGlass, List, X } from "phosphor-react";
import { useSelector } from "react-redux";
import CheckContext from "../../store/ContextAPI/check-context";
import { ModalMain } from "../UI/Modal";
import Cart from "../Cart/Cart";
import CartDropDown from "../Cart/CartDropDown";
import { useLocation } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";

const HeaderQueries = () => {
  const [isSticky, setIsSticky] = useState("");
  const [isShowNav, setIsShowNav] = useState(false);
  const isLogin = useSelector((state) => state.account.isLoggedIn);
  const nameLogin = useSelector((state) => state.account.userData.displayName);
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

  const showNavigationHandler = () => {
    setIsShowNav((prev) => !prev);
  };

  const headerClasses =
    location.pathname === "/"
      ? `header header-modify header-queries ${isSticky}`
      : `header header-queries ${isSticky}`;

  return (
    <header className={headerClasses} ref={headerRef}>
      <div className="header__navigation" onClick={showNavigationHandler}>
        {!isShowNav && <List size={24} color="black" weight="bold" />}
        {isShowNav && <X size={24} color="black" weight="bold" />}
      </div>
      <Link
        to="/"
        className={isShowNav ? "header__logo-modify" : "header__logo"}
      >
        ETQ.
      </Link>
      <Cart />

      <CSSTransition
        timeout={500}
        in={isShowNav}
        classNames="fade-nav"
        mountOnEnter
        unmountOnExit
      >
        <nav
          className="header__navigation-options"
          onClick={() => {
            setIsShowNav(false);
          }}
        >
          <ul>
            <li className="header__navigation-option">
              <Link to="/sale">
                <span>Sale</span>
                <CaretRight size={20} color="black" weight="bold" />
              </Link>
            </li>
            <li className="header__navigation-option">
              <Link to="/shoes">
                <span>Shop All</span>
                <CaretRight size={20} color="black" weight="bold" />
              </Link>
            </li>
            <li className="header__navigation-option">
              <Link to="/">
                <span>E-Gift Cart</span>
                <CaretRight size={20} color="black" weight="bold" />
              </Link>
            </li>
            <li className="header__navigation-option">
              <Link to="/">
                <span>Help</span>
                <CaretRight size={20} color="black" weight="bold" />
              </Link>
            </li>
            <li className="header__navigation-option">
              <Link to="/">
                <span>Search</span>
                <MagnifyingGlass size={20} color="black" weight="bold" />
              </Link>
            </li>
          </ul>
          <div className="header__navigation-btn">
            {!isLogin && <Link to="/account/signup">Signup | Login</Link>}
            {isLogin && <Link to="/account/info">{nameLogin}</Link>}
          </div>
        </nav>
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

export default HeaderQueries;
