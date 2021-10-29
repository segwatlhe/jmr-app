import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RealestatetransactionService} from "../service/realestatetransaction.service";
import {Realestatetransaction} from "../model/realestatetransaction";
import {Observable} from "rxjs";

@Component({
  selector: 'app-realestatetransaction',
  templateUrl: './realestatetransaction.component.html',
  styleUrls: ['./realestatetransaction.component.css']
})
export class RealestatetransactionComponent implements OnInit {

  constructor(private realestatetransactionService: RealestatetransactionService) { }


  realestatetransactions: Observable<Realestatetransaction[]>;

  realEstateTransactionForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])  });

  ngOnInit(): void {
    this.list();
  }

  get f(){
    return this.realEstateTransactionForm.controls;
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.realEstateTransactionForm.patchValue({
        fileSource: file
      });
    }
  }

  public list(){
    this.realestatetransactions = this.realestatetransactionService.list();
  }

  submit(){
    this.realestatetransactionService.upload(this.realEstateTransactionForm.get('fileSource')?.value)
  }

  refresh(){
    this.list();
  }

}
