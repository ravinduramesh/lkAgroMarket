import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbThemeModule,
  NbLayoutModule,
  NbTooltipModule,
  NbIconModule,
  NbSidebarModule,
  NbChatModule,
  NbListModule,
  NbUserModule,
  NbCardModule,
  NbSpinnerModule,
  NbButtonModule,
  NbSelectModule,
  NbInputModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { environment } from '../../environments/environment';

import { LayoutComponent } from './layout/layout.component';
import { ChatComponent } from './chat/chat.component';
import { ChatShowcaseService } from './shared/services/chat-showcase.service';
import { SupplyAdComponent } from './supply-ad/supply-ad.component';
import { CreateSupplyAdComponent } from './supply-ad/create-supply-ad/create-supply-ad.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  declarations: [LayoutComponent, SupplyAdComponent, CreateSupplyAdComponent, ChatComponent, UploadFileComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbTooltipModule,
    NbChatModule,
    NbListModule,
    NbUserModule,
    NbCardModule,
    NbButtonModule,
    NbCardModule,
    NbSpinnerModule,
    NbSelectModule,
    NbInputModule
  ],
  providers: [ChatShowcaseService]
})
export class DashboardModule {}
