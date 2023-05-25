import { animal } from "./animal.model";
import { imagesOfAnimal } from "./images.model";
import { classOfAnimal } from "./class.model";
import { featuresOfAnimal } from "./features.model";

classOfAnimal.hasMany(featuresOfAnimal);
classOfAnimal.hasMany(animal);
animal.hasMany(imagesOfAnimal);

export { animal, classOfAnimal, imagesOfAnimal, featuresOfAnimal };

export function createAssociationsAnimals(): void {
    // classOfAnimal.hasMany(featuresOfAnimal)
    // classOfAnimal.hasMany(animal)
    // animal.hasMany(imagesOfAnimal)

    // // при инициализации бд
    // classOfAnimal.sync({ force: true });
    // animal.sync({ force: true });
    // featuresOfAnimal.sync({ force: true });
    // imagesOfAnimal.sync({ force: true });
}
