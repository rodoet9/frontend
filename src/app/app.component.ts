import { Component } from '@angular/core';
import { ItemsComponent } from './components/items/items.component';
import { ItemListComponent } from './components/item-list/item-list.component';

@Component({
	selector: 'app-root',
	imports: [ItemsComponent, ItemListComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'frontend';
}
