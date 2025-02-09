import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LayoutComponent } from './app/layout/layout.component';
import { ReactiveformComponent } from './app/reactiveform/reactiveform.component';
import { ParentComponent } from './app/parent/parent.component';

bootstrapApplication(LayoutComponent, appConfig)
  .catch((err) => console.error(err));
