import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // pripriedades principais do card
  @Input()
  // linkada com o img do card html
  gameCover:string = ""


  // PROPRIEDADES FILHAS - REPASSADAS DAS SUBPASTAS
  @Input()
  gameLabel:string=""

  // pripriedades - inputáveis
  @Input()
  gameType:string = "Digital PS4"
  @Input()
  gamePrice:string = "R$ 399,90"


  constructor() { }

  ngOnInit(): void {
  }

}
