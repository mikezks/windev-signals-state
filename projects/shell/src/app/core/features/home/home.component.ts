import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Modern Angular Applications</h2>
      </div>

      <div class="card-body">
        <ul>
          <li>Signals - The new reactive primitive.</li>
          <li>
            Global State Management:
            <code>&#64;ngrx/store</code>
          </li>
          <li>
            Local State Management:
            <code>&#64;ngrx/signals</code>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    code {
      color: blue;
    }
  `]
})
export class HomeComponent {

}
