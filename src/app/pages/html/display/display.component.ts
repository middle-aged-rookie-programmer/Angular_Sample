import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { ElColors } from './type';
import { style } from '@angular/animations';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  constructor(private navigateS: NavigationService) {}
  // private colors: ElColors = {
  //   div: ['#ee4444', '#ee1166', '#ee6666', '#ee6611', '#ee1111'],
  //   span: ['#44ee44', '#11ee66', '#66ee66', '#66ee11', '#11ee11'],
  // };
  private colors: ElColors = {
    div: ['#aaddff'],
    span: ['#88ff33'],
  };
  public displayParams = [
    'display : flex',
    'display : inline-flex',
    'display : block',
    'display : inline-block',
    'display : grid',
  ];
  public displayParam: string = 'display : flex';
  public innerHtml: string = '';
  hasBorder: boolean = false;
  public dp: any = '';
  public isFlexList: Array<boolean> = [false, false, false, false];
  public isInlineFlexList: Array<boolean> = [false, false, false, false];
  public isBlockList: Array<boolean> = [false, false];
  public isInlineBlockList: Array<boolean> = [
    false,
    false,
    false,
    false,
    false,
  ];
  public isGridList: Array<boolean> = [false];

  ngOnInit(): void {}

  Show(event: any) {
    this.displayParam = event.target.value;
  }

  ControlBorder() {
    if (this.hasBorder) {
      this.RemoveBorder();
    } else {
      this.SetBorder();
    }
    this.hasBorder = !this.hasBorder;
    console.log(this.hasBorder);
  }

  RemoveBorder() {
    let els: HTMLCollectionOf<HTMLElement> =
      document.body.getElementsByTagName('div');
    for (let i = 0; i < els.length; i++) {
      els[i].removeAttribute('class');
      if (els[i].hasAttribute('hasdisplay')) {
        els[i].removeAttribute('class');
      }
    }

    els = document.body.getElementsByTagName('span');
    for (let i = 0; i < els.length; i++) {
      els[i].removeAttribute('class');
      if (els[i].hasAttribute('hasdisplay')) {
        els[i].removeAttribute('class');
      }
    }
  }

  SetBorder() {
    let els: HTMLCollectionOf<HTMLElement> =
      document.body.getElementsByTagName('div');
    for (let i = 0; i < els.length; i++) {
      els[i].setAttribute('class', 'divBorder');
      if (els[i].hasAttribute('hasdisplay')) {
        els[i].setAttribute(
          'class',
          els[i].getAttribute('class') + ' dispBorder'
        );
      }
      if (els[i].hasAttribute('outarea')) {
        els[i].removeAttribute('class');
      }
    }

    els = document.body.getElementsByTagName('span');
    for (let i = 0; i < els.length; i++) {
      els[i].setAttribute('class', 'spanBorder');
      if (els[i].hasAttribute('hasdisplay')) {
        els[i].setAttribute(
          'class',
          els[i].getAttribute('class') + ' dispBorder'
        );
      }
      if (els[i].hasAttribute('outarea')) {
        els[i].removeAttribute('class');
      }
    }
  }

  GoTopPage() {
    this.navigateS.GoTopPage();
  }

  UpdateFlex(i: number) {
    console.log(i);
    let el: HTMLElement | null = document.getElementById('flex' + i.toString());
    if (el && !this.isFlexList[i]) {
      el.setAttribute('style', 'display: flex;');
    } else if (el && this.isFlexList[i]) {
      el.removeAttribute('style');
    }
    this.isFlexList[i] = !this.isFlexList[i];
  }

  UpdateInlineFlex(i: number) {
    console.log(i);
    let el: HTMLElement | null = document.getElementById(
      'inline_flex' + i.toString()
    );
    if (el && !this.isInlineFlexList[i]) {
      el.setAttribute('style', 'display: inline-flex;');
    } else if (el && this.isInlineFlexList[i]) {
      el.removeAttribute('style');
    }
    this.isInlineFlexList[i] = !this.isInlineFlexList[i];
  }

  UpdateBlock(i: number) {
    console.log(i);
    let el: HTMLElement | null = document.getElementById(
      'block' + i.toString()
    );
    if (el && !this.isBlockList[i]) {
      el.setAttribute('style', 'display: block;');
    } else if (el && this.isBlockList[i]) {
      el.removeAttribute('style');
    }
    this.isBlockList[i] = !this.isBlockList[i];
  }

  UpdateInlineBlock(i: number) {
    console.log(i);
    let el: HTMLElement | null = document.getElementById(
      'inline_block' + i.toString()
    );
    if (el && !this.isInlineBlockList[i]) {
      el.setAttribute('style', 'display: inline-block;');
    } else if (el && this.isInlineBlockList[i]) {
      el.removeAttribute('style');
    }
    this.isInlineBlockList[i] = !this.isInlineBlockList[i];
  }

  UpdateGrid(i: number) {
    console.log(i);
    let el: HTMLElement | null = document.getElementById('grid' + i.toString());
    if (el && !this.isGridList[i]) {
      el.setAttribute('style', 'display: grid;');
    } else if (el && this.isGridList[i]) {
      el.removeAttribute('style');
    }
    this.isGridList[i] = !this.isGridList[i];
  }
}
