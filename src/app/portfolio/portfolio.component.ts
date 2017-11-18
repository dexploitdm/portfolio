import { Component, OnInit } from '@angular/core';
import {pageTransition} from "../../animations";
import {Project} from "../services/project";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [pageTransition]
})
export class PortfolioComponent implements OnInit {

  projectData: Project[];
  searchTerm: string;
  results: number;

  constructor(
    private _data: ProjectService
  ) { }

  ngOnInit() {
    console.log('portfolio loaded');
    this.projectData = this._data.projectData;
    this.results = this.projectData.length;
  }

  search() {
    const filter = this.searchTerm.trim().concat(',');
    this.projectData = this.transform(this._data.projectData, filter);
    this.results = this.projectData.length;
  }

  transform(allProjects: Project[], filterBy: string): Project[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    if (filterBy) {
      return allProjects.filter(project => project.tags.toLocaleLowerCase().match(filterBy));
    }
    return allProjects;

  }

}
