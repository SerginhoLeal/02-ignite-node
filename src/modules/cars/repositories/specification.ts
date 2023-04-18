import { Specification } from '../model/specification';
import { ICreateSpecificationRepositoryDTO, ISpecificationsRepository } from './specification.types';

class SpecificationRepository implements ISpecificationsRepository {
  private specification: Specification[];

  constructor(){
    this.specification = [];
  }

  create({ name, description }: ICreateSpecificationRepositoryDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description });

    this.specification.push(specification);
  }

  findByName(name: string): Specification {
    const result = this.specification.find(specification => specification.name === name);
    return result;
  }
}

export {
  SpecificationRepository
};