import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { FooterComponent } from "./pages/footer/footer.component";
@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }

  


}
