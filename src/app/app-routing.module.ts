import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from 'src/app/pages/top/top.component';
import { VirtualscrollComponent } from 'src/app/pages/virtualscroll/virtualscroll/virtualscroll.component';
import { GeneralScrollComponent } from 'src/app/pages/virtualscroll/generalscroll/generalscroll.component';
import { DisplayComponent } from './pages/html/display/display.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'samples/top',
    pathMatch: 'full',
  },
  {
    path: 'samples', // デスクトップ
    children: [
      // childrenにコンポーネントをルーティングすることで、子供にレイアウトを継承できる。（<router></router>）
      {
        path: 'top',
        component: TopComponent,
      },
      {
        path: 'virtual_scroll',
        component: VirtualscrollComponent,
      },
      {
        path: 'general_scroll',
        component: GeneralScrollComponent,
      },
      {
        path: 'html_display',
        component: DisplayComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
