import { Component } from '@angular/core';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component {
  public boardContent:number[][];
  private currentPlayerIndex:number;
  private currentWinnerIndex:number;

  private playerNames:string[];

  constructor() {
    this.playerNames=['','x','o'];
    this.boardContent=[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];
    this.currentPlayerIndex=1;
    this.currentWinnerIndex=0;
  }

  public set (col:number,row:number):void{
    if(this.currentWinnerIndex===0  && this.boardContent[row][col]===0){
          this.boardContent[row][col]=this.currentPlayerIndex;
          this.currentPlayerIndex= this.currentPlayerIndex===1?2:1;
    }
  }


  public getPlayerName(col:number,row:number ){
    return this.playerNames[this.boardContent[row][col]];
  }

  // @ts-ignore
  public getStyle(col:number,row:number):string{
    if(this.boardContent[row][col] !== 0){
      return `occupied-${this.getPlayerName(col,row)}`
    }
  }

}
