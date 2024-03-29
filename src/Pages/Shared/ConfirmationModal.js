import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, handleDeleteDoctor, modalData }) => {
  return (
    <div>




      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label htmlFor="confirmation-modal" onClick={() => handleDeleteDoctor(modalData)} className="btn btn-error">Yes</label>
            <button onClick={closeModal} className="btn">Cancel</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ConfirmationModal;