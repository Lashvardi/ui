import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { StepperModule } from 'primeng/stepper';
import { StepperComponent } from './stepper/stepper.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { TagModule } from 'primeng/tag';
import { SidebarModule } from 'primeng/sidebar';
import { BottomComponent } from './bottom/bottom.component';

// მოცემული მოდული ესაჭირეობა კომპონენტებს რომლებიც
// იყენებენ ანიმაციებს ესაჭიროება ხელით იმპორტი!!!
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PickListComponent } from './pick-list/pick-list.component';
import { PickListModule } from 'primeng/picklist';

@NgModule({
  declarations: [
    AppComponent,
    MegaMenuComponent,
    StepperComponent,
    CarouselComponent,
    BottomComponent,
    PickListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    StepperModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    SidebarModule,
    BrowserAnimationsModule,
    PickListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
