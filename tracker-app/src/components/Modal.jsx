import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ModalWrapper({isOpen,setIsOpen,children}) {
  const handleHide = () => {
    setIsOpen(false)
  };

  const modalStyles = {
    content: {
      width: "90%",
      top: "50%",
      left: "50%",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
        onRequestClose={handleHide}
      shouldCloseOnOverlayClick={true}
      style={modalStyles}
    >
        {children}
        </Modal>
  );
}
