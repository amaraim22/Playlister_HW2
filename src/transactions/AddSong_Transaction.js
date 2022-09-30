import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that works with adding new songs. 
 * It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Amara Im
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initNewSong, initNewSongId) {
        super();
        this.app = initApp;
        this.newSong = initNewSong;
        this.newSongId = initNewSongId;
    }

    doTransaction() {
        this.newSongId = this.app.addSong(this.newSongId, this.newSong);
    }
    
    undoTransaction() {
        this.newSong = this.app.deleteSong(this.newSongId - 1);
    }
}