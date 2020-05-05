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
      id: 1,
      Image: { host: '', path: 'assets/images/img-2.jpg' },
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use against protesters business cultural...1',
      link: 'link',
    },
    {
      id: 2,
      Image: { host: '', path: 'assets/images/img-3.jpg' },
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use against protesters business cultural...1',
      link: 'link',
      category: 'food',
    },
    {
      id: 3,
      Image: { host: '', path: 'assets/images/img-4.jpg' },
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use against protesters business cultural...1',
      link: 'link',
      category: 'animal',
    },
    {
      id: 4,
      Image: { host: '', path: 'assets/images/img-5.jpg' },
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use against protesters business cultural...1',
      link: 'link',
      category: 'food',
    },
    {
      id: 5,
      Image: { host: '', path: 'assets/images/img-6.jpg' },
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use against protesters business cultural...1',
      link: 'link',
      category: 'travel',
    },
    {
      id: 6,
      Image: { host: '', path: 'assets/images/img-7.jpg' },
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use against protesters business cultural...1',
      link: 'link',
      category: 'food',
    },
    {
      id: 7,
      Image: { host: '', path: 'assets/images/img-8.jpg' },
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use against protesters business cultural...1',
      link: 'link',
      category: 'animal',
    },
    {
      id: 8,
      Image: { host: '', path: 'assets/images/img-9.jpg' },
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use against protesters business cultural...1',
      link: 'link',
      category: 'food',
    },
    {
      id: 9,
      Image: { host: '', path: 'assets/images/img-10.jpg' },
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use against protesters business cultural...1',
      link: 'link',
      category: 'travel',
    },
  ];

  ngOnInit(): void {}
}
