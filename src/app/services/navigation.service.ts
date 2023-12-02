import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  GoTopPage() {
    this.router.navigate(['samples/top']);
  }

  GoVirtualScrollPage() {
    this.router.navigate(['samples/virtual_scroll']);
  }

  GoGeneralScrollPage() {
    this.router.navigate(['samples/general_scroll']);
  }

  GoHtmlDisplayPage() {
    this.router.navigate(['samples/html_display']);
  }
}
