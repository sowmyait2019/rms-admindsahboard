// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class OfferService {
//
//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from './offer.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiUrl = 'http://your-backend-api/offers'; // Update with your API URL

  constructor(private http: HttpClient) {}

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl);
  }

  updateOffer(id: number, updatedOffer: Offer): Observable<Offer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Offer>(url, updatedOffer);
  }
}
