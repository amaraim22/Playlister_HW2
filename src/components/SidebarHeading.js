import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback } = this.props;
        createNewListCallback();
    };

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

    render() {
        const { canAddList} = this.props;

        let addListClass = "toolbar-button";

        if (canAddList)
            this.enableButton("add-list-button");
        else
            this.disableButton("add-list-button");

        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className={addListClass}
                    onClick={this.handleClick}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}