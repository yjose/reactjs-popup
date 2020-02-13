import React from 'react';
import { Centred } from 'story-router';

import Popup from '../../src/';

const PopupTimeoutProps = {
    popupTimeout: 3000,
};

const PopupTimeout = props => {
    return (
        <div>
        
                <Popup {...props} trigger={<button>Timeout 3 Sec Trigger</button>} position="right center">
                    <div>Timeout three seconds Popup content here !!</div>
                </Popup>
                <Popup trigger={<button>No Timeout Trigger</button>} position="right center">
                    <div>No Timeout Popup content here !!</div>
                </Popup>
           
        </div>
    );
}


const PopupTimeoutStory = {
    name: 'PoupupTimeout example',
    component: PopupTimeout,
    props: PopupTimeoutProps, // adding props
};

export default PopupTimeoutStory;
