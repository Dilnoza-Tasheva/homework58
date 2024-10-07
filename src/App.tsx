import Modal from "./Components/UI/Modal/Modal.tsx";
import { useState } from "react";
import Alert from "./Components/UI/Alert/Alert.tsx";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const closeModalWindow = () => {
    setShowModal(!showModal);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        title="Some modal title"
        closeModal={closeModalWindow}
      >
        <p>This is modal content</p>
      </Modal>
      <button
        className="btn btn-primary m-4"
        onClick={() => setShowModal(!showModal)}
      >
        Open modal window
      </button>

      <button
        className="btn btn-primary m-4"
        onClick={() => setShowAlert(!showAlert)}
      >
        Open alert window
      </button>
      <Alert
        show={showAlert}
        type="warning"
        onDismiss={showAlert ? closeAlert : undefined}
      >
        <p>This is a warning type alert</p>
      </Alert>
    </>
  );
};

export default App;
