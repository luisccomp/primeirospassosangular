import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseModule } from './components/course/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '',              // Na rota base da nossa aplicação
        redirectTo: 'courses', // Redirecione para essa rota
        pathMatch: 'full'      // O nome da rota deve coincidir por inteiro
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
