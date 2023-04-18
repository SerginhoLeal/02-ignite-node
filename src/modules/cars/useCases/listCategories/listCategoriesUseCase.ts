import { CategoriesRepository } from '../../repositories/categories';
import { Category } from '../../model/category';

class ListCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository){}

  execute(): Category[] {
    const category = this.categoriesRepository.list();

    return category;
  }
}

export { ListCategoryUseCase };