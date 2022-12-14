import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { NameAndId } from 'src/app/domains/share/models/share.model';
import { Character, updateCharacter } from '../../models/characters.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss'],
})
export class CharactersDetailComponent implements OnInit {
  public character: Character;
  public updateCharacterInfo: updateCharacter;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private charactersService: CharactersService
  ) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = '';

      if (params.get('id') !== id) {
        id = params.get('id');
      }

      this.charactersService.getCharacter(id).subscribe((cData) => {
        this.character = cData;
        const keyArrays = [
          'father',
          'mother',
          'spouse',
          'allegiances',
          'books',
          'povBooks',
        ];

        const data: any = {};

        for (const [key, value] of Object.entries(this.character)) {
          if (keyArrays.includes(key)) {
            if (!Array.isArray(value)) {
              data[key] = this.createNameAndId(value);
            } else {
              data[key] = value.map((v) => this.createNameAndId(v));
            }
          }
        }
        this.updateCharacterInfo = data;
      });
    });

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.character = null;
      }
    });
  }

  private createNameAndId(value: string): NameAndId {
    return {
      id: value.replace(/\D/g, ''),
      name: value.replace(/[0-9]/g, ''),
    };
  }
}
