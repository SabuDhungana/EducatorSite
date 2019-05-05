import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education = [
  	["School Leaving Certificate","Suryodaya Boarding School","Very Good", "2003", "2010"],
  	[ "A-Levels", "Guiness Higher Secondary School",  "Very Good",  "2011",  "2012"],
  	[ "Bachelors in Business Studies", "Barsha College",  "Very Good",  "2013",  "2017"],
  	// [ "Masters in Computer Application",  "Indira Gandhi National Open University",  "N/A",  "2018",  "Ongoing"]
  ];

  colLength = [0,1,2,3,4];
  tableHeaders = ['Degree','University', 'Percentage', 'From', 'To'];
  mainHeading = "Educational Details";
  constructor() { }

  ngOnInit() {
  }

}
