import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  constructor() {}

  active = 1;
  active2 = 0;

  public corporateMembers = [
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 1',
      worksAt: 'This Company',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 2',
      worksAt: 'This Company',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 3',
      worksAt: 'This Company',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 4',
      worksAt: 'This Company',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 5',
      worksAt: 'This Company',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 6',
      worksAt: 'This Company',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
  ];
  public studentMembers2ndyear = [
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 1',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 2',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 3',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 4',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 5',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 6',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
  ];

  public studentMembers3rdyear = [
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 1',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 2',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 3',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 4',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 5',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 6',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
  ];

  public studentMembers4thyear = [
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 1',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 2',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 3',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 4',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 5',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 6',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
  ];

  ngOnInit(): void {}
}
