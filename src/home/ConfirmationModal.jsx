import React from "react";

const ConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>Are you sure?</h4>
        <p>Do you really want to delete this post? This action cannot be undone.</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="confirm-button">Yes, Delete</button>
          <button onClick={onCancel} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
