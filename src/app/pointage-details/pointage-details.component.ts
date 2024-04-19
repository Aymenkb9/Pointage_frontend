import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator"


@Component({
  selector: 'app-pointage-details',
  standalone: true,
  imports: [RouterLink , MatPaginator],
  templateUrl: './pointage-details.component.html',
  styleUrl: './pointage-details.component.css'
})
export class PointageDetailsComponent {

}
