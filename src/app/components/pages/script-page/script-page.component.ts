import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-script-page',
  templateUrl: './script-page.component.html',
  styleUrls: ['./script-page.component.scss']
})
export class ScriptPageComponent implements OnInit {
  doc = "src/assets/Drehbuch_M152_FilmProjekt_Skript.pdf"

  constructor() { }

  ngOnInit(): void {
  }

}
