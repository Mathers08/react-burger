import React from 'react';
import './Modal.scss';

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  children: React.ReactNode;
}

const Modal = ({active, setActive, children}: ModalProps) => {
  return (
    <div className={active ? 'active modal' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'active modalContent' : 'modalContent'} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;