import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent implements OnInit {
  public activeNotification: any;

  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      if(param) {
        console.log(this.apiService.allNotifications)
        this.activeNotification = this.apiService.allNotifications.find((post: Posts) => post.id === parseInt(param.id));
        console.log(this.activeNotification)
      }
    })
  }
}
