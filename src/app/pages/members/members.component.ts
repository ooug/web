import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  public isCollapsed = false;
  year = '2ndyear';
  wind = 'yes';
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
      id: 'a1',
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 1',
      branch: 'Computer Science',
      description: 'Some Description',

      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a2',
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 2',
      branch: 'Computer Science',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a3',
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 3',
      branch: 'Computer Science',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a4',
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 4',
      branch: 'Electronics & Communication',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a5',
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 5',
      branch: 'Computer Science',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a6',
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 5',
      branch: 'Computer Science',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a7',
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 6',
      branch: 'Electronics & Communication',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a8',
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 6',
      branch: 'Electronics & Communication',
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
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 1',
      branch: 'Computer Science',
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
      branch: 'Computer Science',
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
      branch: 'Computer Science',
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
      branch: 'Electronics & Communication',
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
      branch: 'Computer Science',
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
      branch: 'Computer Science',
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
      branch: 'Electronics & Communication',
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
      branch: 'Electronics & Communication',
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
      Image: { host: '', path: './assets/images/ur.jpg' },
      name: 'Name 1',
      branch: 'Computer Science',
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
      branch: 'Computer Science',
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
      branch: 'Computer Science',
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
      branch: 'Electronics & Communication',
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
      branch: 'Computer Science',
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
      branch: 'Computer Science',
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
      branch: 'Electronics & Communication',
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
      branch: 'Electronics & Communication',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
  ];

  closeResult = '';

  constructor(private modalService: NgbModal) {}

  collap(wind: string) {
    if (wind === 'yes') {
      this.wind = 'no';
    } else {
      this.wind = 'yes';
    }
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  open(content) {
    this.modalService.open(content, {
      size: 'sm',
      backdropClass: 'red-backdrop',
      windowClass: 'dark-modal',
      centered: true,
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  student(y: string) {
    this.year = y;
  }
  ngOnInit(): void {}
}


