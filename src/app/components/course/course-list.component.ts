import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  styleUrls: ['./course-list.component.css'],
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {

  private _courses: Course[] = [];
  private _filter: string;

  filteredCourses: Course[] = [];

  constructor(private service: CourseService) {}

  ngOnInit() {
    this.retrieveAllCourses();
  }

  retrieveAllCourses() {
    this.service.findAll()
      .subscribe({
        next: courses => {
          this._courses = courses;
          this.filteredCourses = this._courses;
        },
        error: error => {
          console.log('Error:', error);
        }
      });
  }

  set filter(value: string) {
    this._filter = value;

    this.filteredCourses = this._courses.filter((course: Course) => {
      const name = course.name;
      const filter = this._filter;

      return name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1;
    });
  }

  get filter() {
    return this._filter;
  }

}
