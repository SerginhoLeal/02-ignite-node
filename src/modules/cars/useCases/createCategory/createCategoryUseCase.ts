import { CategoriesRepository } from '../../repositories/categories';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository){}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExist = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExist) {
      throw new Error('Category Already Exist');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };