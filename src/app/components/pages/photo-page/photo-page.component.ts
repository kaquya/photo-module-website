import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss']
})

export class PhotoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  download(url: string) { 
    let link = document.createElement('a');
  link.setAttribute('type', 'hidden');
  link.href = '../../../../assets/pictures/METAs/' + url + '.xmp';
  link.download = url;
  document.body.appendChild(link);
  link.click();
  link.remove();
  }

}
