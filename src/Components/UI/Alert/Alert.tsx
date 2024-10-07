import React from 'react';
import Backdrop from '../Backdrop/Backdrop.tsx';
import './Alert.css';

interface Props extends React.PropsWithChildren {
  show: boolean;
  onDismiss?: () => void;
  type: "primary" | "success" | "danger" | "warning";
}

const Alert: React.FC<Props> = ({show, onDismiss, children, type}) => {
  const setAlertClass = () => {
    switch (type) {
      case 'primary':
        return 'alert-primary';
      case 'success':
        return 'alert-success';
      case 'danger':
        return 'alert-danger';
      case 'warning':
        return 'alert-warning';
        default:
        return '';
    }
  };

  return (
    <>
      <Backdrop show={show}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}}>
        <div className="modal-dialog">
          <div className={`modal-content`}>
            <div className={`p-2 d-flex justify-content-between align-items-center alert-header ${setAlertClass()}`}>
              {children}
              {onDismiss && (
                <button className="btn btn-sm btn-outline-none" onClick={onDismiss}>x</button>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;