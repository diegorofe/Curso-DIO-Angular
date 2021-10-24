import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CouseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['../app.component.css']
})

export class CourseListComponent implements OnInit{

course: Course[] = [];

constructor(private courseService: CouseService){}

ngOnInit(): void{
this.course = this.courseService.retrieveAll();

}

}