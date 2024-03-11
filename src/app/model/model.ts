export class BookDTO {
  id: number|null;
  name: string;
  author: string;

  constructor(id: number|null, name: string, author: string) {
    this.id = id;
    this.name = name;
    this.author = author;
  }
}
