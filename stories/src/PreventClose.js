import React from "react";
import Popup from "../../src/";
import { Centred } from "story-router";

// Prevent the popup from closing (mainly while using closeOnDocumentClick)
// My real use case is an http request in a popup that has a loading state

class PreventClose extends React.Component{
    constructor(props){
        super(props);
        this.state = {preventClose:false, showPopup:true}
    }
    showPopup = () => {
        this.setState({showPopup:true})
    }

    clearPopupState = () => {
        this.setState({showPopup:false})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({preventClose:true});
        setTimeout(()=>{this.setState({preventClose:false})}, 2000) //standin for an http request resolving
    }

    render = () => {
        return <div>
          <Popup open={this.state.showPopup}
                preventClose={this.state.preventClose}
                closeOnDocumentClick
                onClose={this.clearPopupState}>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {this.state.preventClose?<div>Popup cannot close</div> : <div>Popup can close</div>}
                        <button type='submit'>Mock http request</button>
                    </form>
                </div>
          </Popup>
          <button onClick={this.showPopup}>show popup</button>
        </div>
    }
}


export default PreventClose;
