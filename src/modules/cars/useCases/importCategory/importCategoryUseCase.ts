import fileSystem from 'fs';
import { parse as csvParse } from 'csv-parse';

import { ICategoriesRepository } from '../../repositories/categories.types';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository){}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolver, reject) => {
      const stream = fileSystem.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      
      const parseFile = csvParse({
        quote: '"', ltrim: true, rtrim: true, delimiter: ','
      });
      
      stream.pipe(parseFile);
      
      parseFile.on('data', async(line) => {
        const [name, description] = line;
        categories.push({ name, description });
      })
        .on('end', () => {
          fileSystem.promises.unlink(file.path);
          resolver(categories);
        })
        .on('error', (err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(cat => {
      const {name, description} = cat;

      const existCategory = this.categoriesRepository.findByName(name);

      if(!existCategory){
        this.categoriesRepository.create({ name, description });
      }
    });
  }
}

export {
  ImportCategoryUseCase
};