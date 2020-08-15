import React from "react";
import Popup from "../../old-src";

export default class DisabledTooltip extends React.PureComponent {
  state = {
    disabled: false,
  };
  render() {
    return (
      <div>
        <div>
          <button
            style={{ marginBottom: "20px" }}
            onClick={() => {
              this.setState({ disabled: !this.state.disabled });
            }}
          >
            Toggle disabled state
          </button>
        </div>
        <Popup
          on="hover"
          closeOnDocumentClick={true}
          trigger={
            <button
              onClick={() => {
                this.setState({ disabled: true });
              }}
              disabled={this.state.disabled}
            >
              A button with tooltip
            </button>
          }
          disabled={this.state.disabled}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            voluptas ex, blanditiis reiciendis dolor numquam pariatur facilis,
            labore, libero nihil asperiores ae facilis quis commodi dolores, at
            enim. Deserunt qui, officiis culpa optio numquam ullam pariatur
            voluptas tempora doloremque!
          </div>
        </Popup>
      </div>
    );
  }
}
