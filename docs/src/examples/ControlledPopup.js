import React from 'react'
import Warper from './Warper'
import Popup from '../../../lib/reactjs-popup.es'
//

class ControlledPopup extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }
    openModal = () => {
      this.setState({ open: true })
    };
    closeModal = () => {
      this.setState({ open: false })
    };

    render () {
      return (
        <div>
          <button className="button" onClick={this.openModal}> Controlled Popup</button>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="modal">
              <a className="close" onClick={this.closeModal}>
              &times;
              </a>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
              nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
              deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </div>

          </Popup>
        </div>
      )
    }
}


export default Warper(ControlledPopup)
