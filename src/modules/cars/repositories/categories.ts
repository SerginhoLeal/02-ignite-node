import { Category } from '../model/category';
import { ICategoriesRepository, ICreateCategoriesDTO } from './categories.types';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  private static INSTANCE: CategoriesRepository;
  private constructor(){
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if(!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoriesDTO): void {
    const categories = new Category();

    Object.assign(categories, { name, description });

    this.categories.push(categories);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const categoryName = this.categories.find(cat => cat.name === name);

    return categoryName;
  }
}

export {
  CategoriesRepository
};