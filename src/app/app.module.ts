import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopComponent } from './top/top.component';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/inMemoryData/in-memory-data.service';
import { FinduserComponent } from './finduser/finduser.component';
import { GooutpairsComponent } from './gooutpairs/gooutpairs.component';
import { MessageComponent } from './message/message.component';
import { MypageComponent } from './mypage/mypage.component';
import { UserComponent } from './user/user.component';
import { AdmissionTopComponent } from './admission/admission-top/admission-top.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopComponent,
    HeaderComponent,
    FooterComponent,
    FinduserComponent,
    GooutpairsComponent,
    MessageComponent,
    MypageComponent,
    UserComponent,
    AdmissionTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'ja-JP' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
