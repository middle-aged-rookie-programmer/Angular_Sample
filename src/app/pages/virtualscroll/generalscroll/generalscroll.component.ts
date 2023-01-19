import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-GeneralScroll',
  templateUrl: './generalscroll.component.html',
  styleUrls: ['./generalscroll.component.scss']
})
export class GeneralScrollComponent implements OnInit {
  constructor(private navigateS: NavigationService) { }

  ngOnInit(): void {
  }
  
  GoVirtualScrollPage(){
    this.navigateS.GoVirtualScrollPage();
  }
}
