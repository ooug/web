import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  isCollapsed = false;
  year = '2ndyear';
  wind = 'yes';
  isCollap = 'yes';
  corporateMembers = [
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
      Image: { host: '', path: './assets/svgs/ooug.svg' },
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
  studentMembers2ndyear = [
    {
      id: 'a1',
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 1',
      branch: 'CSE',
      description: 'Some Description',

      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a2',
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 2',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a3',
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 3',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a4',
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 4',
      branch: 'ECE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a5',
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 5',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a6',
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 5',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a7',
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 6',
      branch: 'ECE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      id: 'a8',
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 6',
      branch: 'ECE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
  ];
  studentMembers3rdyear = [
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 1',
      branch: 'CSE',
      description: 'Some Description',

      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 2',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 3',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 4',
      branch: 'ECE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 5',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 5',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 6',
      branch: 'ECE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 6',
      branch: 'ECE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
  ];
  studentMembers4thyear = [
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 1',
      branch: 'CSE',
      description: 'Some Description',

      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 2',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 3',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 4',
      branch: 'ECE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 5',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 5',
      branch: 'CSE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 6',
      branch: 'ECE',
      description: 'Some Description',
      Links: {
        github: 'github',
        linkedin: 'linkedin',
        insta: 'insta',
      },
    },
    {
      Image: { host: '', path: './assets/svgs/ooug.svg' },
      name: 'Name 6',
      branch: 'ECE',
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

  backToTop() {
    scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  stud(collap: string) {
    if (collap === 'yes') {
      this.isCollap = 'no';
      this.wind = 'yes';
    } else {
      this.isCollap = 'yes';
      this.wind = 'no';
    }
  }

  collap(wind: string) {
    if (wind === 'yes') {
      this.wind = 'no';
      this.isCollap = 'yes';
    } else {
      this.wind = 'yes';
      this.isCollap = 'no';
    }
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  open(content: any) {
    this.modalService.open(content, {
      backdropClass: 'red-backdrop',
      windowClass: 'dark-modal',
      centered: true,
    });
  }

  getDismissReason(reason: any): string {
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
}
