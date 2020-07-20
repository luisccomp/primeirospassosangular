import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-edit.component.html'
})
export class CourseEditComponent implements OnInit {

  course: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    // this.course = this.courseService.findById(id);
    this.courseService.findById(id)
      .subscribe({
        next: course => {
          this.course = course;
        },
        error: error => {
          console.log('Não foi possível recuperar o curso com o ID fornecido.');
          console.log('Error:', error);
        }
      });
  }

  save() {
    // this.courseService.save(this.course);
    // this.router.navigate(['/courses/info', this.course.id]);
    this.courseService.update(this.course.id, this.course)
      .subscribe({
        next: course => {
          console.log('Curso salvo com sucesso...');
          console.log(course);
          this.router.navigate(['/courses/info', this.course.id]);
        },
        error: error => {
          console.log('Error:', error);
        }
      })
  }

}
