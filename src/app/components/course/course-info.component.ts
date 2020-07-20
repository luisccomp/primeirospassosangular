import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  courseId: number;
  course: Course;

  constructor (private activatedRoute: ActivatedRoute, private service: CourseService, private router: Router) {}

  ngOnInit() {
    this.courseId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.service.findById(this.courseId)
      .subscribe({
        next: course => this.course = course,
        error: error => {
          console.log('Não foi possível recuperar o curso com o ID informado.');
          console.log('Erro:', error);
          this.router.navigate(['./not-found']);
        }
      });
  }

}
