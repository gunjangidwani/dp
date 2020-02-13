import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule } from "@angular/material";
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { ListFilterPipe } from './list-filter.pipe';
import { FormsModule } from '@angular/forms';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { HttpErrorInterceptor } from './services/http-error.Interceptor';
// import { HttpServicesService } from './services/http-services.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserPostComponent,
    ListFilterPipe,
    BarGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
