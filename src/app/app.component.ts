import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nepaliDatePicker';

  dateFrom = "";
  dateTo = "";


  onDateFromFilterChange($event: any){
    console.log($event);
  }
}
