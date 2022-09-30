import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }
    handleDeleteSong = (event) => {
        event.stopPropagation();
        let sourceId = this.props.id;
        sourceId = sourceId.substring(sourceId.indexOf("song-") + 5);
        this.props.deleteSongCallback(sourceId);
    }
    handleEditSong = (event) => {
        event.stopPropagation();
        let editSongId = this.props.id;
        editSongId = editSongId.substring(editSongId.indexOf("song-") + 5);
        this.props.editCallback(editSongId);
    }

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length);
    }

    render() {
        const { song } = this.props;
        let num = this.getItemNum();
        // console.log("num: " + num);
        let itemClass = "playlister-song";
        if (this.state.draggedTo) {
            itemClass = "playlister-song-dragged-to";
        }

        var link = "https://youtu.be/" + song.youTubeId;
        var youtubeId = <a href={link}>{song.title} by {song.artist}</a>;

        return (
            <div
                id={'song-' + num}
                className={itemClass + 'list-card unselected-list-card'}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                onDoubleClick={this.handleEditSong}
                draggable="true"
            >
                {num}. {youtubeId} 
                <input
                    type="button"
                    id={"delete-song-" + num}
                    className="list-card-button"
                    onClick={this.handleDeleteSong}
                    value={"\u2715"} />
            </div>
        )
    }
}