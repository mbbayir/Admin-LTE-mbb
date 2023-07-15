import { DatePipe } from '@angular/common';
import { inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlankComponent } from './common/blank/blank.component';
import { SectionComponent } from './common/section/section.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HomeComponent,
    AboutComponent,
    BlankComponent,
    SectionComponent   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LayoutsComponent,
        children: [
          {
            path: "",
            component: HomeComponent
          },
          {
            path: "about",
            component: AboutComponent
          }
        ]
      }
    ]),
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
