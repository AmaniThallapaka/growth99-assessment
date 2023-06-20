import { Component, HostListener } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly apiService: ApiService) {}

  /**
   * Close the notification menu. When user 
   * click outside of the menu
   * @param event : Html element
   */
  @HostListener('click', ['$event.target'])
  clickOutside(event: any) {
    if(event && event.id !== 'bell') {
      this.apiService.panelClose.next(false)
    }
  }
}
