export interface SandwichPayload {
  sandwichName: string // Max. 35 characters
  cutlery: boolean
  napkins: boolean
  base: paniniBase
  extras: paniniExtras
}

export interface paniniBase {
  bread: BreadVariants
  cheese: CheeseVariants
  meat: MeatVariants
  dressing: DressingVariants
  vegetables: VegetableVariant
}

export interface paniniExtras {
  egg: EggVariants
  spreads: SpreadVariant
  serving: ServingVariant
  topping: ToppingVariant
}

export type BreadVariants = 'FULL GRAIN' | 'WHEAT'
export type CheeseVariants = Array<
  'MOZZARELLA' | 'STRACIATELLA' | 'EDAM' | 'GOUDA'
>
export type MeatVariants = Array<'SALAMI' | 'HAM' | 'BACON' | 'CHICKEN'>
export type DressingVariants = Array<
  'OLIVE OIL' | 'HONEY_MUSTARD' | 'RANCH' | 'MAYO'
>

export type VegetableVariant = Array<
  | 'SALAD'
  | 'TOMATO'
  | 'OBERGINE'
  | 'BEETROOT'
  | 'PICKLES'
  | 'ONION'
  | 'PEPPER'
  | 'ASPARAGUS'
  | 'CUCUMBER'
>

export type EggVariants = Array<
  'FRIED EGG' | 'OMELET' | 'SCRAMBLED EGG' | 'POACHED EGG'
>
export type SpreadVariant = Array<'BUTTER' | 'HUMMUS' | 'GUACAMOLE'>
export type ServingVariant = 'COLD' | 'WARM' | 'GRILLED'
export type ToppingVariant = 'SESAME' | null
