import React from "react";
import Popup from "../../src/";

const ControlledModal = () => {
  return (
    <div>
      <ControlledModalClass />
      <div style={{ zIndex: "90" }}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas
        ex, blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
        nihil asperiores ae facilis{" "}
      </div>
    </div>
  );
};

export default ControlledModal;

class ControlledModalClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>UnControlled Popup </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick={true}
          onClose={this.closeModal}
        >
          <Content close={this.closeModal} />
        </Popup>
      </div>
    );
  }
}

const Content = ({ close }) => (
  <div>
    sum dolor sit amet consectetur adipisicing elit. Nemo voluptas ex,
    blanditiis reiciendir voluptas tempora doloremque!{" "}
    <button onClick={close}>close</button>
    <Popup
      on={["click"]}
      position="bottom left"
      closeOnDocumentClick={true}
      trigger={<button>Button nested</button>}
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas
        ex, blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
        nihil asperiores ae facilis quis commodi dolores, at enim. Deserunt qui,
        officiis culpa optio numquam ullam pariatur voluptas tempora doloremque!
      </div>
    </Popup>
  </div>
);
