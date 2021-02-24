import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LocationComponent } from '../components/location/location.component';
import { VisitorsService } from '../core/services/visitors.service';
import { ModalService } from '../modal';

@Component({
  selector: 'app-home1',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  ipaddress: string = '';
  currency: string = '';
  currencySymbol: string = '';
  city: string = '';
  country: string = '';
  constructor(
    private visitorsService: VisitorsService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);

    this.visitorsService.getIpAddress().subscribe((res) => {
      this.ipaddress = res['ip'];
      this.visitorsService.getGEOLocation(this.ipaddress).subscribe((res) => {
        this.currency = res['currency']['code'];
        this.currencySymbol = res['currency']['symbol'];
        this.city = res['city'];
        this.country = res['country_name'];
      });
    });
  }
  ngAfterViewInit(): void {
    this.openModal('custom-modal-1');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
