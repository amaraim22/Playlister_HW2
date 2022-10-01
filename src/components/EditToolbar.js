import React from "react";

export default class EditToolbar extends React.Component {
    constructor(props) {
        super(props);

        this.value = true;
    }

    disableButton(id) {
        let button = document.getElementById(id);
        if(button) {
            button.classList.add("disabled");
            button.disabled = true;
        }
    } 
    enableButton(id) {
        let button = document.getElementById(id);
        if(button) {
            button.classList.remove("disabled");
            button.disabled = false;
        }
    }
    //handleButtonStatus

    render() {
        const { canAddList, canAddSong, canUndo, canRedo, canClose, addSongCallback, 
                undoCallback, redoCallback, closeCallback} = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";
        
        if(canAddList) {
            return (
                <div id="edit-toolbar">
                    <input 
                        type="button" 
                        id='add-song-button' 
                        value="+" 
                        disabled={true}
                        className={addSongClass}
                        onClick={addSongCallback}
                    />
                    <input 
                        type="button" 
                        id='undo-button' 
                        value="⟲" 
                        disabled={true}
                        className={undoClass} 
                        onClick={undoCallback}
                    />
                    <input 
                        type="button" 
                        id='redo-button' 
                        value="⟳" 
                        disabled={true}
                        className={redoClass} 
                        onClick={redoCallback}
                    />
                    <input 
                        type="button" 
                        id='close-button' 
                        value="&#x2715;" 
                        disabled={true}
                        className={closeClass} 
                        onClick={closeCallback}
                    />
                </div>
            )
        }

        else {
            if (canAddSong)
                this.enableButton('add-song-button');
            else
                this.disableButton('add-song-button');

            if (canUndo)
                this.enableButton('undo-button');
            else
                this.disableButton('undo-button');

            if (canRedo)
                this.enableButton('redo-button');
            else
                this.disableButton('redo-button');

            if (canClose)
                this.enableButton('close-button');
            else
                this.disableButton('close-button');
        }

        return (
            <div id="edit-toolbar">
                <input 
                    type="button" 
                    id='add-song-button' 
                    value="+" 
                    className={addSongClass}
                    onClick={addSongCallback}
                />
                <input 
                    type="button" 
                    id='undo-button' 
                    value="⟲" 
                    className={undoClass} 
                    onClick={undoCallback}
                />
                <input 
                    type="button" 
                    id='redo-button' 
                    value="⟳" 
                    className={redoClass} 
                    onClick={redoCallback}
                />
                <input 
                    type="button" 
                    id='close-button' 
                    value="&#x2715;" 
                    className={closeClass} 
                    onClick={closeCallback}
                />
            </div>
        )
    }
}