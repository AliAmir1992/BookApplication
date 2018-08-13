export class Book{
  ID: number;
  Title : string;
  Description : string;
  PageCount : number;
  Excerpt : string;
  PublishDate : Date;

  constructor(Title? : string, Description? : string, PageCount? : number, Excerpt? : string, PublishDate? : Date, id? : number){
      this.ID = id;
      this.Title = Title;
      this.Description = Description;
      this.PageCount = PageCount;
      this.Excerpt = Excerpt;
      this.PublishDate = PublishDate;
  }
}
