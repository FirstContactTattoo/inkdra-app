import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';

import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inkdra-app';

}
