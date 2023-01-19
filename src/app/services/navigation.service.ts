import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) { }

  GoTopPage(){
    this.router.navigate(['samples/top']);
  }

  GoVirtualScrollPage(){
    this.router.navigate(['samples/virtualscroll']);
  }

  GoGeneralScrollPage(){
    this.router.navigate(['samples/GeneralScroll']);
  }

}
