import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { PizzaInterface } from '../../interfaces/pizza.interface';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, ImageModule],
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent {
  @Input() public pizza: PizzaInterface;
}
