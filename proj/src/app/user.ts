export class User {
  id: number;
  name: string;
  pass: string;
  cur: number;
  friends: string[]
  constructor( id: number,   name: string, pass: string ){
	  this.id=id;
	  this.name=name;
	  this.pass=pass;
	  this.cur=0;
	  this.friends=[" "]
  }
}
