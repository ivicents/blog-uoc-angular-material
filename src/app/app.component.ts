import { Component } from '@angular/core';
import { LoadingService } from './Shared/Services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog-uoc-project-front';
  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService) {}
}
