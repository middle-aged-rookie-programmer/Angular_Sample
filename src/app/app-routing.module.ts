import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from 'src/app/pages/top/top.component';
import { VirtualscrollComponent } from 'src/app/pages/virtualscroll/virtualscroll/virtualscroll.component';
import { GeneralScrollComponent } from 'src/app/pages/virtualscroll/generalscroll/generalscroll.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'samples/top',
    pathMatch: 'full'
  },
  {
    path: 'samples', // デスクトップ
    children: [ // childrenにコンポーネントをルーティングすることで、子供にレイアウトを継承できる。（<router></router>）
      {
        path: 'top',
        component: TopComponent
      },
      {
        path: 'virtualscroll',
        component: VirtualscrollComponent
      },
      {
        path: 'GeneralScroll',
        component: GeneralScrollComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
