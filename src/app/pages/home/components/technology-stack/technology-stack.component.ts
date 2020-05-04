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
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use aginst protesters busines cultural...1',
      link: 'link',
    },
    {
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use aginst protesters busines cultural...1',
      link: 'link',
      category: 'food',
    },
    {
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use aginst protesters busines cultural...1',
      link: 'link',
      category: 'animal',
    },
    {
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use aginst protesters busines cultural...1',
      link: 'link',
      category: 'food',
    },
    {
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use aginst protesters busines cultural...1',
      link: 'link',
      category: 'travel',
    },
    {
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use aginst protesters busines cultural...1',
      link: 'link',
      category: 'food',
    },
    {
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use aginst protesters busines cultural...1',
      link: 'link',
      category: 'animal',
    },
    {
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use aginst protesters busines cultural...1',
      link: 'link',
      category: 'food',
    },
    {
      title: 'Title 1',
      date: '15 December,17',
      author: 'Author 1',
      paragraph:
        'TBritish military courts use aginst protesters busines cultural...1',
      link: 'link',
      category: 'travel',
    },
  ];

  ngOnInit(): void {}
}
