import { Component } from '@angular/core';
import {BoardService} from "../level4/board.service";

@Component({
  selector: 'app-level5',
  templateUrl: './level5.component.html',
  styleUrls: ['./level5.component.scss']
})
export class Level5Component {

  constructor(public boardService:BoardService) {
  }


}
