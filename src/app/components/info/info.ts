import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  templateUrl: './info.html',
  styleUrl: './info.css'
})

export class Info {
  @Input() user: unknown;
}