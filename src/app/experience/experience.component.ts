import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
 experience = [
	  	["Euro School Associate Teacher","Euro School Chhauni","Associate Teacher", "2015 August", "2016 February"],
	  	[ "Euro School Full Time Teacher", "Euro School Chhauni",  "Full Time Teacher",  "2016 June 17",  "2017 September 17"],
	  	[ "Class Teacher - Class 3", "Euro School Chhauni",  "Class Teacher",  "2017 September",  "2018 October"],
	  	[ "Head Of Department",  "Euro School, Chhauni",  "HOD",  "2018 November",  "Ongoing"],
      [ "Class Teacher - Class 4",  "Euro School, Chhauni",  "Class Teacher",  "2018 November",  "Ongoing"],
      [ "Event Coordinator",  "Euro School, Chhauni",  "Event Coordinator",  "2018 November",  "Ongoing"]
	];

   colLength = [0,1,2,3,4];
   tableHeaders = ['Position','Company', 'Skills and Responsibilites', 'From', 'To'];
   mainHeading = "Employement Details";
  constructor() { }

  ngOnInit() {

  	
  }

}
