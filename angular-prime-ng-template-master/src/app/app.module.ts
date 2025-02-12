
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { CountryService } from './demo/service/country.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContenuCrudComponent } from './cours/components/contenu/contenu-crud.component';
import { CoursCrudComponent } from './cours/components/cours/cours-crud.component';
import { SectionCrudComponent } from './cours/components/section/section-crud.component';
import { DragDropModule } from 'primeng/dragdrop';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './config/auth-interceptor.service';

/*export function initializeKeycloak(authService: AuthService) {
    return () => authService.init();
  }*/




@NgModule({
    declarations: [
        AppComponent, NotfoundComponent,  ContenuCrudComponent, CoursCrudComponent, SectionCrudComponent 

    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        TableModule,
        CommonModule,
        RatingModule,
        ButtonModule,
        SliderModule,
        InputTextModule,
        ToggleButtonModule,
        RippleModule,
        MultiSelectModule,
        DropdownModule,
        ProgressBarModule,
        ToastModule,
        FormsModule,
        DragDropModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, EventService, IconService, NodeService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
       // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },         
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
