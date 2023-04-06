import { Component } from '@angular/core';
import {BoardService} from "./board.service";
import {BoardCell} from "../level3/level3.component";

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.scss']
})

export class Level4Component {
  private playerNames: string[];
constructor(public boardService:BoardService ) {
  this.playerNames = ['', 'x', 'o'];
}
  // @ts-ignore
  public getStyle(col: number, row: number): string {
    if (this.boardService.boardContent[row][col] !== 0) {
      return `occupied-${this.getPlayerName(col, row)}`
    }
  }

  public getPlayerName(col: number, row: number) {
    return this.playerNames[this.boardService.boardContent[row][col]];
  }

  public getWinnerName(){
    return this.playerNames[this.boardService.currentWinnerIndex];
  }

  public getCells(): BoardCell[][] {
    const result: BoardCell[][] = [];
    for (let row = 0; row < 3; row++) {
      result.push([]);
      for (let col = 0; col < 3; col++) {
        result[row][col] = {
          playerName: this.getPlayerName(col, row),
          class: this.getStyle(col, row),
        };
      }
    }

    return result;
  }


}
