import { AuthGuard } from './../authGuard/auth-guard.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        HomeModule
    ],
    exports: [
        HomeModule
    ],
    providers: [
        HomeModule, AuthGuard
    ]
})

export class HomeModule {

}