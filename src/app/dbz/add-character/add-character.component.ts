import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  public newCharacter: Character = {
    name: '',
    power: 0
  };
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor( private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  addCharacter() {
    if(this.newCharacter.name.trim().length === 0){
      return;
    }
    // this.onNewCharacter.emit(this.newCharacter);
    this.dbzService.addCharacter(this.newCharacter);

    this.newCharacter ={
      name: '',
      power: 0
    }
  }
}
