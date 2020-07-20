import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template: ''
})
export class CourseDeleteComponent implements OnInit {
  courseId: number;

  course: Course = null;

  constructor(private service: CourseService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.service.delete(this.courseId)
      .subscribe({
        next: () => {
          console.log('Course ID');
          this.router.navigate(['/courses']);
        },
        error: error => {
          console.log('Não foi possível localizar o curso.');
          console.log('Erro:', error);
        }
      })
  }

}
