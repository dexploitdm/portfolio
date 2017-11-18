import { Component, OnInit } from '@angular/core';
import {pageTransition} from "../../animations";
import {ProjectService} from "../services/project.service";
import {Project} from "../services/project";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [pageTransition]
})
export class OverviewComponent implements OnInit {

  projectData: Project[];
  username = 'dexploitdm';
  hostname = 'yandex.ru';

  constructor(
    private _data: ProjectService
  ) { }

  ngOnInit() {
    console.log('overview loaded');
    this.projectData = this._data.projectData.filter(project => project.featured);
  }

}
