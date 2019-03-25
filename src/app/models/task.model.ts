export class Task {
  public done: boolean = false;
  constructor(public description: string) {}
  markDone(){
    this.done = true;
    console.log(this.description, this.done);
  }
  markNotDone(){
    this.done = false;
    console.log(this.description, this.done);
  }
}
