import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-breadcrumb',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './shop-breadcrumb.component.html',
  styleUrl: './shop-breadcrumb.component.scss',
})
export class ShopBreadcrumbComponent {
  header = input<string>();
  title = input.required<string>();
}
