import { Specification } from '../model/specification';

interface ICreateSpecificationRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationRepositoryDTO): void;
  findByName(name: string): Specification;
}

export {
  ISpecificationsRepository,
  ICreateSpecificationRepositoryDTO
};