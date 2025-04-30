import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-items',
	imports: [CommonModule, FormsModule],
	templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
	items: Item[] = [];
	newItemName = '';

	constructor(private itemService: ItemService) {}

	ngOnInit(): void {
		this.fetchItems();
	}

	fetchItems(): void {
		this.itemService.getItems().subscribe(data => {
			this.items = data;
		});
	}

	addItem(): void {
		if (!this.newItemName.trim()) return;

		this.itemService.addItem(this.newItemName).subscribe(newItem => {
			this.items.unshift(newItem); // Add to the top
			this.newItemName = '';
		});
	}
}
