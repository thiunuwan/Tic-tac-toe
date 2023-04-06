import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerName'
})
export class PlayerIntoNamePipe implements PipeTransform {

  private playerNames=['','x','o'];
  transform(player:number, ...args: unknown[]):string {
  if(player <0 || player>2){
    throw new Error("invalid player");
  }
    return this.playerNames[player];
  }

}
