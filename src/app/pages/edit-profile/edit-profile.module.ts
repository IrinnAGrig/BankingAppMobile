import { NgModule } from '@angular/core';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    EditProfileRoutingModule
  ]
})
export class EditProfileModule { }
