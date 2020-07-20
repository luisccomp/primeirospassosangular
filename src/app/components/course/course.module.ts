import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { CourseEditComponent } from './course-edit.component';
import { CourseDeleteComponent } from './course-delete.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StarModule } from 'src/app/shared/components/star/star.module';
import { AppPipe } from 'src/app/shared/pipes/app-pipe.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    CourseEditComponent,
    CourseDeleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StarModule,
    AppPipe,
    RouterModule.forChild([
      {
        path: 'courses',               // Na rota /courses
        component: CourseListComponent // Inicializar o componente CourseListComponent
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent
      },
      {
        path: 'courses/edit/:id',
        component: CourseEditComponent
      },
      {
        path: 'courses/delete/:id',
        component: CourseDeleteComponent
      },
    ])
  ]
})
export class CourseModule {}
