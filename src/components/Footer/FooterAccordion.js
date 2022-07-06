import { Plus, Minus } from "phosphor-react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const FooterAccordion = function (props) {
  const [isClicked, setIsClicked] = useState(false);

  const showAccordionHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className={`footer__item footer__${props.item}`}>
      <div className="footer__heading" onClick={showAccordionHandler}>
        <p>{props.heading}</p>
        <div>
          {!isClicked && <Plus size={16} color="black" weight="bold" />}
          {isClicked && <Minus size={16} color="black" weight="bold" />}
        </div>
      </div>
      <CSSTransition
        in={isClicked}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames="fade-footer"
      >
        <div>{props.children}</div>
      </CSSTransition>
    </div>
  );
};

export default FooterAccordion;
