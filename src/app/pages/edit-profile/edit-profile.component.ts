import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { mobiscroll} from '@mobiscroll/angular-lite';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  editForm!: FormGroup;

}
