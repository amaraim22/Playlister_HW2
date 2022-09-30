import React, { Component } from 'react';

export default class EditSongModal extends Component {

    handleConfirmEdit = (event) => {
        event.stopPropagation();
        let title = document.getElementById("titleInput").value;
        let artist = document.getElementById("artistInput").value;
        let youTubeId = document.getElementById("youTubeIdInput").value;
        this.props.editSongCallback(title, artist, youTubeId);
    }
    
    render() {
        const { songToEdit, hideEditSongModalCallback } = this.props;
        let song = "";
        if (songToEdit) {
            song = songToEdit;
            
            if (document.getElementById("titleInput").value !== song.title)
                document.getElementById("titleInput").value = song.title
            if (document.getElementById("artistInput").value !== song.artist)
                document.getElementById("artistInput").value = song.artist
            if (document.getElementById("youTubeIdInput").value !== song.youTubeId)
                document.getElementById("youTubeIdInput").value = song.youTubeId
            
        }

        return (
            <div 
                className="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                <div className="modal-root" id='verify-edit-song-root'>
                    <div className="modal-north modal-prompt">
                        Edit Song
                    </div>                
                    <div className="modal-center">
                        <div className="modal-center-content modal-textfield">  
                            Title: <input className="edit-song-input" 
                                            id="titleInput" 
                                            name="title"
                                            defaultValue={song.title}
                                            type="text" /> <br></br>
                            Artist: <input className="edit-song-input" 
                                            id="artistInput" 
                                            name="artist" 
                                            defaultValue={song.artist}
                                            type="text" /> <br></br>
                            YouTubeId: <input className="edit-song-input" 
                                            id="youTubeIdInput" 
                                            name="youTubeId" 
                                            defaultValue={song.youTubeId}
                                            type="text" /> <br></br>
                        </div>
                    </div>
                    <div className="modal-south">
                        <input type="submit" 
                            id="edit-song-confirm-button" 
                            className="modal-button" 
                            onClick={this.handleConfirmEdit}
                            value='Confirm' />
                        <input type="button" 
                            id="edit-song-cancel-button" 
                            className="modal-button" 
                            onClick={hideEditSongModalCallback}
                            value='Cancel' />
                    </div>
                </div>
            </div>
        );
    }
}