import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Pizza } from '../../data/pizza';
import { PizzaInterface } from '../../interfaces/pizza.interface';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit {
  public pizza: PizzaInterface[] = [];

  public ngOnInit() {
    this.pizza = Pizza;
  }
}
