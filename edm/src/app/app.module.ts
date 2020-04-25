import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './_appService/api.service';
import { CommonService } from './_appService/common.service';
import { AppSessionService } from './_appService/appsession.service';
import { BaseServiceHelper } from './_appService/baseHelper.service';
import { EncryptedStorage } from './_appModel/encryptedstorage';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule,
  ],
  providers: [
    ApiService,
    CommonService,
    AppSessionService,
    BaseServiceHelper,
    EncryptedStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
