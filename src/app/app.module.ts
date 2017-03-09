import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [BrowserModule, HttpModule, AppRoutingModule],
    declarations: [AppComponent],
    providers: [

        { provide: APP_BASE_HREF, useValue: '/' }
    ],
     
    bootstrap: [AppComponent]
})
export class AppModule{

}
