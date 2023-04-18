import { CategoriesRepository } from '../../repositories/categories';
import { ListCategoriesController } from './listCategoriesController';
import { ListCategoryUseCase } from '../listCategories/listCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoriesController(listCategoryUseCase);

export {
  listCategoryController
};