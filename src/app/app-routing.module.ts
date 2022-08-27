import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinduserComponent } from './finduser/finduser.component';
import { GooutpairsComponent } from './gooutpairs/gooutpairs.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { MypageComponent } from './mypage/mypage.component';
import { TopComponent } from './top/top.component';
import { UserComponent } from './user/user.component';
import { AdmissionTopComponent } from './admission/admission-top/admission-top.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admission', component: AdmissionTopComponent },
  {
    path: 'top',
    component: TopComponent,
    children: [
      { path: '', redirectTo: 'top', pathMatch: 'full' },
      {
        path: 'find',
        component: FinduserComponent,
      },
      {
        path: 'find/:id',
        component: UserComponent,
      },
      {
        path: 'go-out',
        component: GooutpairsComponent,
      },
      {
        path: 'message',
        component: MessageComponent,
      },
      {
        path: 'my-page',
        component: MypageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
