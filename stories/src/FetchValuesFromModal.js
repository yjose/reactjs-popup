import React from 'react';
import {Centred} from 'story-router';
import Popup from '../../src';

const SAVE_VALUES = 'save values';

const FetchValues = () => {
  const [values, setValues] = React.useState({});

  return (
    <div style={{font: 'sans-serif'}}>
      <div style={{maxWidth: '60%', margin: 'auto', font: 'sans-serif'}}>
        <h3 style={{textAlign: 'center'}}>
          Fetching Input Values from a &lt;Popup&gt;
        </h3>
        <p>
          This modal presents input fields. Open the button, enter some values
          and click the <b>{SAVE_VALUES}</b> button. You will see the values
          displayed below.
        </p>
        <p>Things to note:</p>
        <ul>
          <li>Opening the dialog clears the values.</li>
          <li>
            Closing the dialog any way other than the <b>{SAVE_VALUES}</b>{' '}
            button will not save nor display the values.
          </li>
        </ul>

        <FetchValuesModal setParentValues={setValues} />
      </div>

      {/* only show if we got values from the modal */}
      {values && Object.keys(values).length > 0 ? (
        <div style={{marginTop: '30px', backgroundColor: 'rgb(255,235, 235)'}}>
          input message is:
          <div style={{whiteSpace: 'pre-wrap', fontFamily: 'monospace'}}>
            {JSON.stringify(values, null, 2)}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

class FetchValuesModal extends React.Component {
  constructor(props) {
    super(props);
    this.setParentValues = props.setParentValues;
    this.state = {open: false, valsFromModal: {}};
  }

  openModal = () => {
    this.setParentValues({});
    this.setState({valsFromModal: {}}); // reset values
    this.setState({open: true});
  };

  closeModal = () => this.setState({open: false});

  saveAndCloseModal = () => {
    this.setParentValues(this.state.valsFromModal);
    this.closeModal();
  };

  // allows modal to store values in this.state
  storeVals = valuesObj => {
    this.setState({
      valsFromModal: {...this.state.valsFromModal, ...valuesObj},
    });
  };

  render() {
    return (
      <div style={{margin: 'auto', width: '50%', paddingTop: '20px'}}>
        <button type="button" style={{width: '100%'}} onClick={this.openModal}>
          Click for popup form
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}>
          <MyInputContainer
            close={this.saveAndCloseModal}
            storeVals={this.storeVals}
          />
        </Popup>
      </div>
    );
  }
}

const MyInputContainer = ({close, storeVals}) => {
  return (
    <div style={{minWidth: '60%'}}>
      <div style={{width: '100%', height: '100px'}}>
        <input
          style={{width: '100%', margin: '25px 0'}}
          type="text"
          name="input-fld-1"
          placeholder="enter message, line 1"
          onChange={evt => storeVals({[evt.target.name]: evt.target.value})}
        />
        <input
          style={{width: '100%'}}
          type="text"
          name="input-fld-2"
          placeholder="enter message, line 2"
          onChange={evt => storeVals({[evt.target.name]: evt.target.value})}
        />
      </div>

      <button
        type="button"
        onClick={() => close(true)}
        style={{width: '100%', height: '30px', marginTop: '10px'}}>
        {SAVE_VALUES}
      </button>
    </div>
  );
};

const FetchValuesFromModalStory = {
  name: 'Modal container with inputs fields - returns values to Parent',
  component: Centred(FetchValues),
};
export default FetchValuesFromModalStory;
