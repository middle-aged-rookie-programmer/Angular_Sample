import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.component.html',
  styleUrls: ['./virtualscroll.component.scss']
})
export class VirtualscrollComponent implements OnInit {  // 20名
  demoUser: Array<string> = ["Aimy", "Alex", "Anie", "Arnold", "Bob", "Brian", "Britney", "Carly", "Cara", "Daniel", "Dawson", "Deivies", "Edward", "Eimy", "Elie", "Emmy", "Eron", "Fargason", "Flank", "Kate"]
  demoList: Array<any> = [];
  showList: Array<any> = [];
  NumOfRow: number = 10000;
  RowHeight: string = "32px";
  ShowAreaHeight: string = "640px"
  UpdateInterval: string = "320px"
  listHeight: string = "0px"
  nowArea = 0;
  viewport = {
    top: "0px",
    height: "1280px"
  }; //height初期値は、ShowAreaHeight*2と同じ値
  // bottom: "640px"  //bottomは、ShowAreaHeightと同じ値

  constructor(private navigateS: NavigationService) { }

  ngOnInit(): void {
    this.demoList = this.getDemoLargeObject()
    this.showList = this.getViewportList(document.getElementById("frame"), this.demoList)

    // リスト全体の高さ取得
    this.listHeight = this.getHeight(this.NumOfRow)

    // UpdateIntervalの値取得
    const updateIntevalNum = parseInt(this.UpdateInterval.replace("px", ""))
    const frame=document.getElementById("frame")!;
    this.nowArea = frame!==null? Math.floor(frame.scrollTop / updateIntevalNum): 0;
  }

  getHeight(NumOfRow: number) {
    const height = parseInt(this.RowHeight.replace("px", ""))
    return (height * NumOfRow).toString() + "px"
  }

  scroll() {
    // console.log("scroll !")
    const frame: HTMLElement | null = document.getElementById("frame");
    const updateIntevalNum = parseInt(this.UpdateInterval.replace("px", ""))
    if (frame!==null && this.nowArea !== Math.floor(frame.scrollTop / updateIntevalNum)) {
      this.nowArea = Math.floor(frame.scrollTop / updateIntevalNum)

      // 表示エリアの位置決め
      this.viewport = this.getViewportArea(frame);
      console.log(this.viewport)
      this.showList = this.getViewportList(frame, this.demoList)
      console.log(frame.scrollTop)
      console.log(this.listHeight)
      console.log(Math.floor(frame.scrollTop / updateIntevalNum))
    }
  }

  getViewportArea(frame: HTMLElement) {
    const updateIntevalNum = parseInt(this.UpdateInterval.replace("px", ""))
    let viewport = {
      top: "0px",
      height: "1280px"
      // bottom: "640px"
    }
    // 320pxスクロールごとに表示位置を更新する
    if (Math.floor(frame.scrollTop / updateIntevalNum) < 2) {
      viewport.top = "0px"
      viewport.height = "1920px"
    } else if (Math.floor(frame.scrollTop / updateIntevalNum) > (this.NumOfRow / 10) - 5) { // 
      viewport.top = this.getHeight(this.NumOfRow - 6 * 10)
      viewport.height = "1920px"
    } else {
      viewport.top = this.getHeight((Math.floor(frame.scrollTop / updateIntevalNum) - 2) * 10)
      viewport.height = "1920px"
    }
    return viewport
  }

  getViewportList(frame: HTMLElement | null, list: Array<any>) {
    const updateIntevalNum = parseInt(this.UpdateInterval.replace("px", ""))
    const showList = [];
    if (frame!==null && Math.floor(frame.scrollTop / updateIntevalNum) < 2) {
      for (let i = 0; i < 60; i++) {
        showList.push(list[i])
      }
    } else if (frame!==null && Math.floor(frame.scrollTop / updateIntevalNum) > (this.NumOfRow / 10) - 5) {
      for (let i = list.length - 60; i < list.length; i++) {
        showList.push(list[i])
      }
    } else {
      const order = frame!==null ? Math.floor(frame.scrollTop / updateIntevalNum) * 10 - 20 : 0;
      for (let i = order; i < order + 60; i++) {
        showList.push(list[i])
      }
    }
    return showList
  }

  //以降は、デモデータ作成に使用するメソッド。virtualScrollとは関係ない。

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

  GoTopPage(){
    this.navigateS.GoTopPage();
  }

  GoGeneralScrollPage(){
    this.navigateS.GoGeneralScrollPage();
  }
}
