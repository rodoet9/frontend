import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-item-list',
	imports: [CommonModule, FormsModule],
	templateUrl: './item-list.component.html',
	styleUrl: './item-list.component.scss',
})
export class ItemListComponent {}
