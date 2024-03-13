import * as z from 'zod'
import { SandwichPayload } from '../../../types/SandwichPayload'

export const schema: z.ZodType<SandwichPayload> = z.object({
  sandwichName: z.string().max(35).min(1),
  napkins: z.boolean(),
  cutlery: z.boolean(),
  base: z.object({
    bread: z.enum(['FULL GRAIN', 'WHEAT']),
    cheese: z.array(z.enum(['MOZZARELLA', 'STRACIATELLA', 'EDAM', 'GOUDA'])),
    dressing: z.array(z.enum(['OLIVE OIL', 'HONEY_MUSTARD', 'RANCH', 'MAYO'])),
    meat: z.array(z.enum(['SALAMI', 'HAM', 'BACON', 'CHICKEN'])),
    vegetables: z.array(
      z.enum([
        'SALAD',
        'TOMATO',
        'CUCUMBER',
        'ONION',
        'PICKLES',
        'PEPPER',
        'ASPARAGUS',
        'BEETROOT',
        'OBERGINE',
      ])
    ),
  }),
  extras: z.object({
    egg: z
      .enum(['FRIED EGG', 'OMELET', 'SCRAMBLED EGG', 'POACHED EGG'])
      .array(),
    spreads: z.array(z.enum(['BUTTER', 'HUMMUS', 'GUACAMOLE'])),
    topping: z.union([z.enum(['SESAME']), z.null()]),
    serving: z.enum(['COLD', 'WARM', 'GRILLED'], {
      required_error: 'You have to choose something',
    }),
  }),
})
