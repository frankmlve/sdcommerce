import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, 
        ReactiveFormsModule, 
        HttpClientModule
    ],
    exports: [HeaderComponent],
    providers: []
})
export class SharedModule {}