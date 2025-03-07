import { z } from 'zod';

export const animalDataValidator = z.object({
    name: z.string({
        required_error: 'Le nom est obligatoire',
        invalid_type_error: 'Le nom doit être une chaîne de charactere'
    })
        .min(2, 'Le nom doit faire minimum 2 caractres')
        .max(50, 'Le nom doit faire maximum 50 caractres')
        .trim(),
    feeding: z.string({ 
        required_error: 'L\'alimentation est obligatoire',
        invalid_type_error: 'L\'alimentation  doit être une chaîne de charactere'
    })
        .min(2, 'L\'alimentation doit faire minimum 2 caractres')
        .max(50, 'L\'alimentation doit faire maximum 50 caractres')
        .trim(),
    specie: z.string({ 
        invalid_type_error: 'L\'espece doit être une chaîne de charactere'
    })
        .min(2, 'L\'espece doit faire minimum 2 caractres')
        .max(50, 'L\'espece doit faire maximum 50 caractres')
        .trim()
        .optional(),
    bioClass: z.string({ 
        required_error: 'La classe est obligatoire',
        invalid_type_error: 'La classe doit être une chaîne de charactere'
    })
        .min(2, 'La classe doit faire minimum 2 caractres')
        .max(50, 'La classe doit faire maximum 50 caractres')
        .trim(),
}).required();

export type AnimalData = z.infer<typeof animalDataValidator>;