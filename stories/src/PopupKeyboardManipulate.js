import React from "react";
import Popup from "../../src/";

const PopupKeyboardManipulate = () => (
  <div>
    <h3 className="manipulate-header">Navigate through elements via keyboard (Tab btn)</h3>
    <div className="manipulate-wrapper">
      <div>
        <h3>
          Popup will trigger if element in focus
          and hide if blur event triggered (closeOnKeyboardBlur).
        </h3>
        <Popup
          on={["click", "focus"]}
          closeOnDocumentClick={true}
          closeOnKeyboardBlur={true}
          position="right center"
          trigger={<input type="text" placeholder=" try it ...."/>}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas
            ex, blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
            nihil asperiores ae facilis quis commodi dolores, at enim. Deserunt qui,
            officiis culpa optio numquam ullam pariatur voluptas tempora doloremque!
          </div>
        </Popup>
        <Popup
          on={["click", "focus"]}
          closeOnDocumentClick={true}
          closeOnKeyboardBlur={true}
          trigger={<input type="text" placeholder=" try it 2...."/>}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas
            ex, blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
            nihil asperiores ae facilis quis commodi dolores, at enim. Deserunt qui,
            officiis culpa optio numquam ullam pariatur voluptas tempora doloremque!
          </div>
        </Popup>
        <Popup
          on={["click", "focus"]}
          closeOnDocumentClick={true}
          closeOnKeyboardBlur={true}
          trigger={<input type="text" placeholder=" try it 3...."/>}
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas
            ex, blanditiis reiciendis dolor numquam pariatur facilis, labore, libero
            nihil asperiores ae facilis quis commodi dolores, at enim. Deserunt qui,
            officiis culpa optio numquam ullam pariatur voluptas tempora doloremque!
          </div>
        </Popup>
      </div>
      <div>
        <h3>
          Popup will trigger when button pressed
          and hide if blur event triggered (closeOnKeyboardBlur).
        </h3>
        <Popup
          closeOnKeyboardBlur={true}
          trigger={<button> Trigger</button>}
          position="right center"
        >
          <div>Popup content 1</div>
        </Popup>

        <Popup
          closeOnKeyboardBlur={true}
          trigger={<button> Trigger</button>}
          position="right center"
        >
          <div>Popup content 2</div>
        </Popup>

        <Popup
          closeOnKeyboardBlur={true}
          trigger={<button> Trigger</button>}
          position="right center"
        >
          <div>Popup content 3</div>
        </Popup>
      </div>
    </div>
  </div>
);

export default PopupKeyboardManipulate;
