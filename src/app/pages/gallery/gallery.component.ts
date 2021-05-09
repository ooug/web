import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

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
    this.httpClient.get(environment.api + '/gallery').subscribe((data: any) => {
      this.sliderItems = data.gallery.sliders;
      this.imageItems = data.gallery.images;
      this.isLoading = false;
    });
  }
}
