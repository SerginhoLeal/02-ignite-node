/* eslint-disable no-self-assign */
import { randomUUID } from 'node:crypto';

class Category {
  id?: string;
  name!: string;
  description!: string;
  create_at?: Date;

  constructor(){
    if(!this.id){
      this.id = randomUUID();
      this.name = this.name;
      this.description = this.description;
      this.create_at = new Date();
    }
  }
}

export {
  Category
};