import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/models/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public notificationList : Posts[] = [];
  public isOpen: boolean = false;
  public unreadCount : number = 0;

  constructor(private readonly apiService: ApiService,
    private readonly router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl('/')
    this.apiService.getNotifications().subscribe((response: Posts[]) => {
      this.notificationList = response.splice(0,10);
      this.apiService.allNotifications = this.notificationList;
      this.getUnreadCount();
    });
    this.apiService.panelClose.subscribe((res: boolean) => this.isOpen = res)
  }

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  getUnreadCount() {
    this.unreadCount = this.notificationList.filter((post: any) => post.read === false).length;
  }

  readedNotification(id: number) {
    this.notificationList.forEach(x=> {
      if(x.id === id) {
        x.read = true
      }
    });
    this.getUnreadCount();
  }
}
