import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-nav',
  templateUrl: './mini-nav.component.html',
  styleUrls: ['./mini-nav.component.css']
})
export class MiniNavComponent {
  @Input() title = '';
  @Input() image = '';
  @Input() action = '';
}
