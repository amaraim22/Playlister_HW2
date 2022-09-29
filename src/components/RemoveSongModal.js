import React, { Component } from 'react';

export default class RemoveSongModal extends Component {
    render() {
        const { songToRemove, removeSongCallback, hideRemoveSongModalCallback } = this.props;
        let songName = "";
        if (songToRemove) {
            songName = songToRemove.title;
        }
        return (
            <div 
                className="modal" 
                id="remove-song-modal" 
                data-animation="slideInOutLeft">
                <div className="modal-root" id='verify-remove-song-root'>
                    <div className="modal-north modal-prompt">
                        Remove Song?
                    </div>                
                    <div className="modal-center">
                        <div className="modal-center-content modal-textfield">  
                            Are you sure you wish to permanently remove {songName} from the playlist?
                        </div>
                    </div>
                    <div className="modal-south">
                        <input type="button" 
                            id="remove-song-confirm-button" 
                            className="modal-button" 
                            onClick={removeSongCallback}
                            value='Confirm' />
                        <input type="button" 
                            id="remove-song-cancel-button" 
                            className="modal-button" 
                            onClick={hideRemoveSongModalCallback}
                            value='Cancel' />
                    </div>
                </div>
            </div>
        );
    }
}