import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
	id: number;
	name: string;
	created_at: string;
}

@Injectable({
	providedIn: 'root',
})
export class ItemService {
	private apiUrl = 'https://backend-lejk.onrender.com/api/items';

	constructor(private http: HttpClient) {}

	getItems(): Observable<Item[]> {
		return this.http.get<Item[]>(this.apiUrl);
	}

	addItem(name: string): Observable<Item> {
		return this.http.post<Item>(this.apiUrl, { name });
	}
}
