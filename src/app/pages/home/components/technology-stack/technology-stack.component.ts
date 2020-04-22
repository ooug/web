import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.scss'],
})
export class TechnologyStackComponent implements OnInit {
  constructor() {}

  public articles = [
    {
      title: 'Title 1',
      author: 'Author 1',
      link: 'Link 1',
    },
    {
      title: 'Title 2',
      author: 'Author 2',
      link: 'Link 2',
    },
    {
      title: 'Title 3',
      author: 'Author 3',
      link: 'Link 3',
    },
    {
      title: 'Title 4',
      author: 'Author 4',
      link: 'Link 4',
    },
    {
      title: 'Title 5',
      author: 'Author 5',
      link: 'Link 5',
    },
  ];

  ngOnInit(): void {}
}
