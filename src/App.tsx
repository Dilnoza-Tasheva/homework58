import Modal from './Components/UI/Modal/Modal.tsx';
import { useState } from 'react';

const App = () => {

  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModalWindow = () => {
    setShowModal(!showModal);
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
      <button className="btn btn-primary m-4" onClick={() => setShowModal(!showModal)}>Open modal window</button>
    </>
  )
};

export default App
