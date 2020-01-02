import React from 'react';
import {Centred} from 'story-router';

import Popup from '../../src';

const ModalProps = {
    modal: true,
    timer: 3000
};

const Modal = props => {
  return (
      <div style={{padding: '5%'}}>
            <h1>Timed Modal Popup</h1>
            <p>
                This popup uses a timeout in the <code>componentWillMount</code> function to delay<br/>
                rendering for a set timeout (<code>props.timer</code> in milliseconds).<br/>
                Additionally, this update adds an extra key, <code>render</code>, to the state.<br/>
                This new key allows for the <code>render</code> function to return nothing until the <code>state.render</code> value is true.<br/><br/>

                This is great for popups on ecommerce pages where one might want to grab the attention of a user.
            </p>
            <Popup {...props}>
                <div style={{padding: '5%', textAlign: 'center'}}>
                    Timed popup!<br />
                    Click outside to exit 
                </div>
            </Popup>
        </div>
    );
};

const ModalStory = {
  name: 'Timed Modal example',
  component: Centred(Modal),
  props: ModalProps, // adding props
};
export default ModalStory;
