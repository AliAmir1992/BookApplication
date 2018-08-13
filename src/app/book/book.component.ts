import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from '../model/book';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalContentComponent } from '../_shared/modal-content.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { PaginationService } from '../_shared/pagination.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];
  bsModalRef: BsModalRef;
  subscription: any;

  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(private bookService: BookService, private modalService: BsModalService,
    private spinnerService: Ng4LoadingSpinnerService, private paginationService: PaginationService) { }

  ngOnInit() {
    this.GetBooks();
  }
  GetBooks() {
    this.spinnerService.show();
    this.subscription = this.bookService.GetAllBooks().subscribe(
      data => { this.spinnerService.hide(); this.books = data; this.setPage(1); },
      error => this.handleError(error)
    )
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.paginationService.getPager(this.books.length, page);

    // get current page of items
    this.pagedItems = this.books.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  openAddModal() {
    const initialState = {
      modalTitle: 'Add Book',
      operation: 'add'
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, { initialState });
    this.bsModalRef.content.modalType = 'add';
  }

  openEditModal(book: Book) {
    this.bookService.inEditBookDetails(book);
    const initialState = {
      modalTitle: 'Edit Book',
      operation: 'edit'
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, { initialState });
  }
  openDeleteModal(id: number) {
    this.spinnerService.show();
    this.bookService.DeleteBook(id).subscribe(
      data => { console.log(data); this.spinnerService.hide(); this.GetBooks(); },
      error => this.handleError(error)
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  handleError(error) {
    console.error('Some error occured : ', error);
  }

}
