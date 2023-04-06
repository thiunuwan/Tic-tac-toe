import { TestBed } from '@angular/core/testing';

import { BoardService } from './board.service';

describe('BoardService', () => {
  it('can be compare two numbers',() =>{
    expect(1).toBe(1);
  });

  it('should set  pieces in the board', ()=> {
    const board=new BoardService();
    board.set(0,0);
    expect(board.boardContent[0][0]).toBe(1);

    board.set(1,0);
    expect(board.boardContent[0][1]).toBe(2);

  });

  // xit    to temporarily disable tests
  it('should not set multiple set-operations in same cell ',  () => {
    const board=new BoardService();
    board.set(0,0);
    board.set(0,0);
    expect(board.boardContent[0][0]).toBe(1);

    board.set(1,0);
    board.set(1,0);
    expect(board.boardContent[0][1]).toBe(2);

  });

  it('should correctly identify the winner when a row is filled by same player',  () => {
    const board=new BoardService();
    board.set(0,0);
    board.set(1,0);
    board.set(0,1);
    board.set(1,1);
    board.set(0,2);
    expect(board.winnerIndex).toBe(1);
  });


});
