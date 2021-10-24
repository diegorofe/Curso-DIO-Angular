import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['../app.component.css']
})

export class CourseListComponent implements OnInit{

course: Course[] = [];

ngOnInit(): void{
this.course = [
    {
        id: 1,
        name: 'Comprtilhando Conhecimento',
        imageUrl: '/assets/images/4.png',
        price: 99.99,
        code: 'abc',
        duration: 120,
        rating: 5,
        releaseDate:'November, 2, 2020',
        option: ''
     
    },
    {
        id: 2,
        name: 'Git',
        imageUrl: '/assets/images/logo-git.png',
        price: 98,
        code: 'EFG',
        duration: 120,
        rating: 4.5,
        releaseDate:'December, 2, 2019',
        option: ''
    }
]

}

}