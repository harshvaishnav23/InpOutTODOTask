import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from '../models/std';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  @Output() emitStdData : EventEmitter<Istd> = new EventEmitter<Istd>()
  @ViewChild('fname') fname !: ElementRef;
  @ViewChild('lname') lname !: ElementRef;
  @ViewChild('email') email !: ElementRef;
  @ViewChild('contact') contact !: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onStdAdd(){
      let stdObj : Istd = {
        fname: this.fname.nativeElement.value,
        lname: this.lname.nativeElement.value,
        email:  this.email.nativeElement.value,
        contact:  this.contact.nativeElement.value
      }
      this.fname.nativeElement.value = '';
      this.lname.nativeElement.value = '';
      this.email.nativeElement.value = '';
      this.contact.nativeElement.value = '';
      this.emitStdData.emit(stdObj)
    }
  }

