import 'reflect-metadata';
import { AppDataSource } from './models/db.ts';
import BiologicalClass from './models/biological-class.model.ts';
import Animal from './models/animal.model.ts';

//! Database
AppDataSource.initialize()
    .then(async (ads) => {
        //? Génération de la DB
        await ads.synchronize(true);
        console.log(`Database synchronize`);

        //? Initial data 
        //* Biological class (Via l'entity manager)
        const animalClasses = ['Mammifère', 'Oiseau', 'Reptile', 'Poisson'];
        for (const name of animalClasses) {
            const bc = new BiologicalClass();
            bc.name = name;
            await ads.manager.save(bc);
        }
        console.log(`Biological class : Done`);

        //* Animal (Via Repository)
        const animalRepository = ads.getRepository(Animal);
        const bcRepository = ads.getRepository(BiologicalClass);

        const mammalia = await bcRepository.findOne({ where: { name: 'Mammifère' } });
        const aves = await bcRepository.findOne({ where: { name: 'Oiseau' } });

        if (!mammalia || !aves) {
            throw new Error('No biological class create !');
        }

        const animal1 = animalRepository.create({
            name: 'Lion',
            feeding: 'Carnivore',
            specie: 'Panthera leo',
            bioClass: mammalia
        });

        const animal2 = animalRepository.create({
            name: 'Kangourou',
            feeding: 'Herbivore',
            specie: 'Macropus rufus',
            bioClass: mammalia
        });

        const animal3 = animalRepository.create([{
            name: 'Canard',
            feeding: 'Omnivore',
            specie: 'Anas platyrhynchos',
            bioClass: aves
        },{
            name: 'Vache',
            feeding: 'Herbivore',
            specie: 'Bos taurus',
            bioClass: mammalia
        }]);

        await animalRepository.save([animal1, animal2, ...animal3]);
        console.log(`Animal : Done`);
    })
    .catch((error) => {
        console.log(`Database on error`);
        console.log(error);
    })
    .finally(() => {
        process.exit(0);
    });
