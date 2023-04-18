import { Category } from '../model/category';

interface ICreateCategoriesDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  list(): Category[];
  findByName(name: string): Category;
  create({ name, description }: ICreateCategoriesDTO): void;
}

export {
  ICategoriesRepository,
  ICreateCategoriesDTO
};