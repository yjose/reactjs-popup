import React from "react";
import Popup from "../../src/";

const gridCell = {
  borderColor: "black"
};
const styles = {
  root: {
    flex: "0 1 0%",
    backgroundColor: "lightgrey"
  },
  column: {
    flex: 1,
    margin: "1px",
    height: "100%",
    minWidth: "4px",
    backgroundColor: "white"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    height: "40px",
    width: "100%",
    marginTop: "1px"
  }
};

const Cell = ({ value }) => (
  <Popup
    trigger={
      <div key={value} style={styles.column} role="presentation">
        test {value}
      </div>
    }
    position="bottom center"
    on="hover"
    mouseEnterDelay={0}
    mouseLeaveDelay={0}
  >
    <div>Tooltip: {value}</div>
  </Popup>
);
const App = () => (
  <div style={styles}>
    <h2>Hover over the table below</h2>
    <div style={styles.root}>
      <div style={styles.row}>
        <Cell value={1} />
        <Cell value={2} />
        <Cell value={3} />
      </div>
      <div style={styles.row}>
        <Cell value={4} />
        <Cell value={5} />
        <Cell value={6} />
      </div>
    </div>
  </div>
);

const CellTablePopupStory = {
  name: "Cell table Popup",
  component: App
};

export default CellTablePopupStory;
