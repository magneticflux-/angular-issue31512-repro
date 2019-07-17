import {Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-issue31512-repro';
  changingText = new Observable<string>((it) => {
    it.next('I SHOULD BE VISIBLE!');
  });
}
