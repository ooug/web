import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() {}

  ngOnInit(): void {}
}
