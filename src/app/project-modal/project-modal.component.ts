import { Component } from '@angular/core';
import { project } from '../-models/project';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  project ={} as project;
  constructor(public bsModalRef:BsModalRef){

  }

}
