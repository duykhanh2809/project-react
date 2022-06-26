import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import CheckContext from "../../store/check-context";

const Modal = function () {
  const checkCtx = useContext(CheckContext);
  const exitModalHandler = () => {
    checkCtx.cancelCheck();
  };
  return <div className="modal" onClick={exitModalHandler} />;
};

export default Modal;

export const ModalMain = function () {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Modal />, document.getElementById("modal"))}
    </Fragment>
  );
};
