import React from "react";


/*
    Class is the best structure for a piece.
    Piece has player (1 or 2) and an icon image link (black whatever, white whatever)
        They will come from specialized classes such as rook or pawn.
*/
export default class Piece {
    constructor(player, iconUrl) {
        this.player = player;
        this.style = {backgroundImage: "url('"+iconUrl+"')"};
    }
}