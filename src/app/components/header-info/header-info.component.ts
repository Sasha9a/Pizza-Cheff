import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderInfoComponent {
  public scrollToHeaderCatalog() {
    const elementHeaderCatalog = document.getElementById('header_catalog');
    if (elementHeaderCatalog) {
      window.scrollTo({
        top: elementHeaderCatalog.getBoundingClientRect().top + window.scrollY - 120,
        behavior: 'smooth'
      });
    }
  }
}
