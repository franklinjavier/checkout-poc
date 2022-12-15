export function pluralize(count: number, singular: string, plural: string) {
  return count > 1 ? plural : singular
}
