import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  @Input() posts: any[];
}