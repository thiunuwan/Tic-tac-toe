import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public boardContent!: number[][];
  private currentPlayerIndex!: number;
  currentWinnerIndex!: number;

  constructor() {
    this.restart()
  }

  public get winnerIndex(): number {
    return this.currentWinnerIndex;
  }

  public set(col: number, row: number): void {
    if (this.currentWinnerIndex === 0 && this.boardContent[row][col] === 0) {
      this.boardContent[row][col] = this.currentPlayerIndex;
      this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
    }
    this.currentWinnerIndex = this.getWinnerIndex();
  }

  restart() {
    this.boardContent = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.currentPlayerIndex = 1;
    this.currentWinnerIndex = 0;
  }

  // @ts-ignore
  private getWinnerIndex(): number {
    // Check rows
    for (let row = 0; row < 3; row++) {
      const first = this.boardContent[row][0];
      if (
        first !== 0 &&
        this.boardContent[row][1] === first &&
        this.boardContent[row][2] === first
      ) {
        return first;
      }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      const first = this.boardContent[0][col];
      if (
        first !== 0 &&
        this.boardContent[1][col] === first &&
        this.boardContent[2][col] === first
      ) {
        return first;
      }
    }

    // Check diagonals
    const first = this.boardContent[1][1];
    if (first !== 0) {
      if (
        this.boardContent[0][0] === first &&
        this.boardContent[2][2] === first
      ) {
        return first;
      }
      if (
        this.boardContent[2][0] === first &&
        this.boardContent[0][2] === first
      ) {
        return first;
      }
    }

    return 0;

  }

}
