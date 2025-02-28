import React from "react";
import { Modal, Button } from "react-bootstrap";

interface DeltaHoldingModalProps {
  show: boolean;
  handleClose: () => void;
}

const DeltaHoldingModal: React.FC<DeltaHoldingModalProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Delta Holding</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src="/DeltaHolding2.png" alt="Delta Holding" className="img-fluid" />
        <p>Streamlined Homepage Design</p>
        <p>Sector-Focused Navigation</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeltaHoldingModal;