import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  constructor(private navigateS: NavigationService) { }

  ngOnInit(): void {
  }
  
  GoVirtualScrollPage(){
    this.navigateS.GoVirtualScrollPage();
  }

  GoHtmlDisplayPage() {
    this.navigateS.GoHtmlDisplayPage();
  }
}
