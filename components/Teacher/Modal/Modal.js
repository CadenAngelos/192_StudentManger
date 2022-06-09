import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.css'


const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);
  
    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };
  
    const modalContent = show ? (
      <div className={styles.modal_wrapper}>
            <div className = {styles.modal_content}>
              <div className={styles.modal_header}>
                {title}
                <button onClick = {handleCloseClick}>X</button>
              </div>
              <div className={styles.modal_body}>
                {children}
              </div>
        </div>
      </div>
    ) : null;
  
    if (isBrowser) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      );
    } else {
      return null;
    }
  };
  
  
  export default Modal;