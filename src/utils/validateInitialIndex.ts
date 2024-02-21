export const validateInitialIndex = (
  initialIndex: number,
  optionsArray: [] | string[]
) => {
  if (Number.isInteger(initialIndex)) {
    return 0
  }
  if (initialIndex >= optionsArray.length) {
    return 0
  }
  return initialIndex
}
