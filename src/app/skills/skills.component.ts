import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  education = [
  	["Lesson Plan", "Creating Lesson Plan as a Class Teacher"],
    ["Class Management", "Managing classes, routines"],
    ["Computer","Computer Teacher and Head of Department"],
    ["Hollistic Development", "Overall holistic development of child"],
  ];

  colLength = [0,1];
  tableHeaders = ['Name', 'Details'];
  mainHeading = "Skills";
  
  constructor() { }

  ngOnInit() {
  }

}
