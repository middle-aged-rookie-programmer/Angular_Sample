import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.component.html',
  styleUrls: ['./virtualscroll.component.scss']
})
export class VirtualscrollComponent implements OnInit {  // 20名
  demoUser: Array<string> = ["Aimy", "Alex", "Anie", "Arnold", "Bob", "Brian", "Britney", "Carly", "Cara", "Daniel", "Dawson", "Deivies", "Edward", "Eimy", "Elie", "Emmy", "Eron", "Fargason", "Flank", "Kate"]
  demoList: Array<Array<number|string>> = [];
  showList: Array<Array<number|string>> = [];
  NumOfRow: number = 10000;
  RowHeight: number = 32; // 32px
  ShowAreaHeight: number = 640 // 640px
  UpdateInterval: number = 320 // 320px
  listHeight: number = 0 // 0px
  nowArea = 0;
  viewport = {
    top: 0,
    height: this.UpdateInterval*4
  }; //height初期値は、SUpdateInterval*4
     //一番上と一番下以外は、基本的にUpdateInterval*6

  constructor(private navigateS: NavigationService) { }

  ngOnInit(): void {
    this.demoList = this.getDemoLargeObject()
    const frame = document.getElementById("frame");
    let st = frame!==null?frame.scrollTop: 0;
    this.showList = this.getViewportList(st, this.demoList)

    // リスト全体の高さ取得
    this.listHeight = this.getHeight(this.NumOfRow)

    // UpdateIntervalの値取得
    this.nowArea = frame!==null? Math.floor(frame.scrollTop / this.UpdateInterval): 0;
  }

  getHeight(numOfRow: number) {
    return this.RowHeight * numOfRow;
  }

  scroll() {
    // console.log("scroll !")
    const frame: HTMLElement | null = document.getElementById("frame");
    let st = frame!==null?frame.scrollTop: 0;
    // 320pxスクロールごとに表示位置を更新する。320pxを１かたまりとして扱いたいため、Math.floorの中には〜/this.UpdateIntervalの値を設定する。
    if (frame!==null && this.nowArea !== Math.floor(st / this.UpdateInterval)) {
      this.nowArea = Math.floor(st / this.UpdateInterval)

      // 表示エリアの位置決め
      this.viewport = this.getViewportArea(Math.floor(st / this.UpdateInterval)*this.UpdateInterval);
      // console.log(this.viewport)
      this.showList = this.getViewportList(Math.floor(st / this.UpdateInterval)*this.UpdateInterval, this.demoList)
      // console.log(frame.scrollTop)
      // console.log(this.listHeight)
      // console.log(Math.floor(st / this.UpdateInterval))
    }
  }

  getViewportArea(scrollTop: number) {
    let viewport = {
      top: 0,
      height: this.UpdateInterval*4
    }
    if (scrollTop < 2*this.UpdateInterval) { // 0px~640pxの間
      viewport.top = 0
      viewport.height = this.UpdateInterval*6
    } else if (scrollTop > this.NumOfRow*this.RowHeight - (this.ShowAreaHeight*3-this.UpdateInterval)) { // ”一番下-5*320px”〜”一番下”の間
      viewport.top = this.getHeight(this.NumOfRow - this.UpdateInterval*6/this.RowHeight)
      viewport.height = this.UpdateInterval*6
    } else {
      viewport.top = this.getHeight((scrollTop-(2*this.UpdateInterval)) /this.RowHeight);
      viewport.height = this.UpdateInterval*6
    }
    return viewport
  }

  getViewportList(scrollTop: number, list: Array<Array<number|string>>) {
    const showList: Array<Array<number|string>> = [];
    if (scrollTop < 2*this.UpdateInterval) {
      for (let i = 0; i < this.UpdateInterval*6/this.RowHeight; i++) {
        showList.push(list[i])
      }
    } else if (scrollTop > this.NumOfRow*this.RowHeight - (this.ShowAreaHeight*3-this.UpdateInterval)) {
      for (let i = list.length - this.UpdateInterval*6/this.RowHeight; i < list.length; i++) {
        showList.push(list[i])
      }
    } else {
      const order = (scrollTop - 2*this.UpdateInterval)/this.RowHeight;
      for (let i = order; i < order + this.UpdateInterval*6/this.RowHeight; i++) {
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
