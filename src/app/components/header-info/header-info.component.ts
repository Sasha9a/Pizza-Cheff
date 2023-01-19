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
export class HeaderInfoComponent {}
