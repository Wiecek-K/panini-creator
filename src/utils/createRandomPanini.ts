import type {
  SandwichPayload,
  BreadVariants,
  CheeseVariants,
  VegetableVariant,
  MeatVariants,
  DressingVariants,
  EggVariants,
  SpreadVariant,
  ServingVariant,
} from '../types/SandwichPayload'

const getRandomItem = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)]

const getRandomCollection = <T>(array: T[], maxCollectionSize = 3): T[] => {
  const collectionSize = Math.floor(Math.random() * maxCollectionSize)
  const createdCollection = []

  for (let i = 0; i < collectionSize; i++) {
    createdCollection.push(getRandomItem(array))
  }

  return createdCollection
}

export const createRandomPanini = ({
  breadVariants,
  cheeseVariants,
  vegetableVariant,
  meatVariants,
  dressingVariants,
  eggVariants,
  spreadVariant,
  servingVariant,
}: {
  breadVariants: Array<BreadVariants>
  cheeseVariants: CheeseVariants
  vegetableVariant: VegetableVariant
  meatVariants: MeatVariants
  dressingVariants: DressingVariants
  eggVariants: EggVariants
  spreadVariant: SpreadVariant
  servingVariant: ServingVariant[]
}): SandwichPayload => {
  const sandwichName = 'Random Name'
  const cutlery = Math.random() < 0.5
  const napkins = Math.random() < 0.5

  const bread = getRandomItem(breadVariants)
  const cheese = getRandomCollection(cheeseVariants)
  const meat = getRandomCollection(meatVariants)
  const dressing = getRandomCollection(dressingVariants)
  const vegetables = [
    ...new Set(getRandomCollection(vegetableVariant, vegetableVariant.length)),
  ]

  const egg = getRandomCollection(eggVariants)
  const serving = getRandomItem(servingVariant)
  const topping = Math.random() < 0.5 ? 'SESAME' : null
  const spreads = [
    ...new Set(getRandomCollection(spreadVariant, spreadVariant.length)),
  ]
  console.log({
    sandwichName,
    cutlery,
    napkins,
    base: { bread, cheese, vegetables, meat, dressing },
    extras: { egg, spreads, serving, topping },
  })

  return {
    sandwichName,
    cutlery,
    napkins,
    base: { bread, cheese, vegetables, meat, dressing },
    extras: { egg, spreads, serving, topping },
  }
}
