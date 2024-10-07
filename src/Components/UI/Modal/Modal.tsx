import Backdrop from "../Backdrop/Backdrop.tsx";
import * as React from "react";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ show, title, children, closeModal }) => {
  return (
    <>
      <Backdrop show={show} />
      <div className="modal show" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h1 className="modal-title fs-5">{title}</h1>
              <button className="btn btn-danger" onClick={closeModal}>
                x
              </button>
            </div>
            <div className="p-2">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
