import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  charaters: any = null;
  character: any = null;

  constructor(private http: HttpClient) {
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5")
    .subscribe(
        result => {
          this.charaters = result;
        }
      )
  }

  getCharacters() {
    return this.charaters;
  }

  getCharacterId(id: number) {
    for (const character of this.charaters) {
      if (character.id === id) {
        return character;
      }
    }
  }

  getCharacter() {
    return this.character;
  }

  setCharacter(id: number) {
    this.character = this.getCharacterId(id);
  }
}
