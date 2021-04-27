import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  public sliderItems: any = [];
  public imageItems: any = [];

  public isLoading: Boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.httpClient.get('./assets/api/gallery.json').subscribe((data: any) => {
      this.sliderItems = data.slider;
      this.imageItems = data.images;
      this.isLoading = false;
    });
  }
}
