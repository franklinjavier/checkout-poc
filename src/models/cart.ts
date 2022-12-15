export async function getCart() {
  return await fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07').then((r) => r.json())
}
