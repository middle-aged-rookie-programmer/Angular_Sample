import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-GeneralScroll',
  templateUrl: './generalscroll.component.html',
  styleUrls: ['./generalscroll.component.scss']
})
export class GeneralScrollComponent implements OnInit {
  // 20名
  demoUser: Array<string> = ["Aimy", "Alex", "Anie", "Arnold", "Bob", "Brian", "Britney", "Carly", "Cara", "Daniel", "Dawson", "Deivies", "Edward", "Eimy", "Elie", "Emmy", "Eron", "Fargason", "Flank", "Kate"]
  demoList: Array<any> = [];
  showList: Array<any> = [];
  NumOfRow: number = 50000;
  RowHeight: string = "32px";
  ShowAreaHeight: string = "640px"

  constructor(private navigateS: NavigationService) { }

  ngOnInit(): void {
    this.demoList = this.getDemoLargeObject()
  }

  getHeight(NumOfRow: number) {
    const height = parseInt(this.RowHeight.replace("px", ""))
    return (height * NumOfRow).toString() + "px"
  }

  getDemoLargeObject() {
    const list: Array<Array<number|string>> = [];
    for (let i = 0; i < this.NumOfRow; i++) {
      const row: Array<number|string> = [];
      const userNum = i % this.demoUser.length

      // 1列目：No
      row.push(i + 1);
      // 2列目：Name
      row.push(this.demoUser[userNum])
      // 3列目：Tele
      row.push(this.getTele())
      // 4列目：固定
      row.push("今週のタスク")
      // 5列目：固定
      row.push("株式取得に伴う手続きと売買規定について")

      list.push(row)
    }
    return list;
  }

  getRandomNum(max: number) {
    return Math.floor(Math.random() * max)
  }

  getTele() {
    const tenRandomList: Array<number> = [];
    let teleStr: string = "";
    for (let i = 0; i < 10; i++) {
      tenRandomList.push(this.getRandomNum(10))
    }
    tenRandomList.forEach(element => {
      teleStr += element.toString()
      if (teleStr.length === 3 || teleStr.length === 7) {
        teleStr += "-"
      }
    })
    return teleStr;
  }
  
  GoVirtualScrollPage(){
    this.navigateS.GoVirtualScrollPage();
  }
}
