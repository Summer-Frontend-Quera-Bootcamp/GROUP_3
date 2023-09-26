import { BiSearch } from "react-icons/bi";
import Design from "./components/Design";
import Input from "./components/Input";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="App">
      <Modal
        modalTitle="test"
        buttonTitle="test"
        currentPage={2}
        totalPages={5}
        modalClassname="w-[500px]"
      >
        <p>test</p>
      </Modal>
    </div>
  );
}

export default App;
