import { Component, OnInit } from '@angular/core';
import { Project } from '../utilities/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [
    {
      title: 'Weather App',
      description: 'weather app with forecast info',
      tech_imgs: ['angular-icon','ts-icon', 'html-icon', 'css-icon'],
      img: 'weather-app-ss'
    }
  ];
  
  ngOnInit(): void {
  }
}

