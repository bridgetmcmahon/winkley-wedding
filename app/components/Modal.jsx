import { useState, createRef } from "react";
import Form from "~/components/Form";

export default function Modal({ closeModal }) {
  const modalRef = createRef();

  const handleClickOutside = event => {
    if (
      modalRef &&
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      !document.getElementById("video-modal")
    ) {
      closeModal();
    }
  };

  return (
    <div className="modal-outer" onMouseDown={handleClickOutside}>
      <div className="modal-inner" ref={modalRef}>
        <Form />
      </div>
    </div>
  );
}
