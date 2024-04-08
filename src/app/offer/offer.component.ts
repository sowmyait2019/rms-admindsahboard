// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-offer',
//   standalone: true,
//   imports: [],
//   templateUrl: './offer.component.html',
//   styleUrl: './offer.component.css'
// })
// export class OfferComponent {
//
// }
// offer.component.ts

import { Component, OnInit } from '@angular/core';
import { OfferService} from "../offer.service";
import { Offer } from "../offer.model";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  offers: Offer[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.fetchOffers();
  }

  fetchOffers(): void {
    this.offerService.getOffers().subscribe(
      (offers) => {
        this.offers = offers;
      },
      (error) => {
        console.error('Error fetching offers:', error);
      }
    );
  }

  editOffer(offer: Offer): void {
    // Implement edit functionality here, such as opening a modal or navigating to a form component
    console.log('Edit offer:', offer);
  }
}
