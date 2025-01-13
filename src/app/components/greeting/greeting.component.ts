import { Component , input} from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [GreetingComponent],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  message = input('Helloo')

}
