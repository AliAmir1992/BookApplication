import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BookService } from "../book/book.service";
import { Book } from "../model/book";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'modal-content',
  templateUrl: './modal-content.component.html',
})

export class ModalContentComponent implements OnInit {
  modalTitle: string;
  operation: string;
  myForm: FormGroup;
  title: FormControl;
  description: FormControl;
  pageCount: FormControl;
  excerpt: FormControl;
  publishDate: FormControl;
  book: Book;
  constructor(public bsModalRef: BsModalRef, private dataService: BookService,
    private spinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {

    this.operation == "add" ? this.book = new Book() : this.book = this.dataService.inEditBook;
    this.title = new FormControl('', [
      Validators.required,
      Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9\\s]\*$")
    ]);
    this.description = new FormControl('', [
      Validators.required
    ]);
    this.pageCount = new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]+$")
    ]);
    this.excerpt = new FormControl('', );

    this.publishDate = new FormControl('',
      Validators.required
    );
    this.myForm = new FormGroup({
      title: this.title,
      description: this.description,
      pageCount: this.pageCount,
      excerpt: this.excerpt,
      publishDate: this.publishDate,
    });
  }
  saveContact() {

    // this.operation == "add" ? this.dataService.addContact(this.contact) : this.dataService.editContact(this.contact);
    if (this.operation == "add") {
      this.spinnerService.show();
      this.dataService.AddBook(this.book).subscribe(
        data => { this.spinnerService.hide(); },
        errro => { }
      );
    }
    else {
      this.spinnerService.show();
      this.dataService.EditBook(this.book).subscribe(
        data => { this.spinnerService.hide(); },
        errro => { }
      );
    }
    this.bsModalRef.hide();
  }
}