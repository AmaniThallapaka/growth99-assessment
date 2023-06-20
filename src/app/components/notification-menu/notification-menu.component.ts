import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/models/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.scss']
})
export class NotificationMenuComponent {

  @Input() public notificationData: Posts[] = [];
  @Output() public readedNotification = new EventEmitter();

  constructor(private readonly apiService: ApiService,
    private readonly router: Router) {}

  readNotification(id: number) {
    this.readedNotification.emit(id)
    this.apiService.panelClose.next(false)
    this.router.navigateByUrl(`/notification-details/${id}`);
  }

}
