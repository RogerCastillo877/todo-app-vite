
export class Todo {
  /**
   * @param { string } description
  */
  constructor(description) {
    this.id = 1;
    this.description = description;
    this.done = false;
    this.createAt = new Date();
  }
}