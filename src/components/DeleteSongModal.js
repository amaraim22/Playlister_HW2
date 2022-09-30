import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { songToRemove, deleteSongCallback, hideDeleteSongModalCallback } = this.props;
        let songName = "";
        if (songToRemove) {
            songName = songToRemove.title;
        }
        return (
            <div 
                className="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                <div className="modal-root" id='verify-delete-song-root'>
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
                            id="delete-song-confirm-button" 
                            className="modal-button" 
                            onClick={deleteSongCallback}
                            value='Confirm' />
                        <input type="button" 
                            id="delete-song-cancel-button" 
                            className="modal-button" 
                            onClick={hideDeleteSongModalCallback}
                            value='Cancel' />
                    </div>
                </div>
            </div>
        );
    }
}