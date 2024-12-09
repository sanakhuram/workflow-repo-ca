export function updateMainHeading(newHeading) {
  const heading = document.querySelector('h1');
  if (heading) {
    heading.textContent = `Venue details: ${newHeading}`;
  }
}
