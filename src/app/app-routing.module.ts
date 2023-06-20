import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationDetailsComponent } from './components/notification-details/notification-details.component';

const routes: Routes = [
  {
    path: 'notification-details/:id',
    component: NotificationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
