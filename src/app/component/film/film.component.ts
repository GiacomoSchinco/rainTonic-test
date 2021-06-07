import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  constructor(public serviceFilms: FilmService, private modalService: NgbModal) { }
  closeResult = '';
  rates: any = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ratesValue() {
    setTimeout(() => {
      console.log(this.rates);
      localStorage.setItem('rates', JSON.stringify(this.rates));
    }, 100);
  }
  ngOnInit(): void {
    if (localStorage.hasOwnProperty('rates')) {
      this.rates = JSON.parse(localStorage.getItem('rates'))
    }
  }


}
