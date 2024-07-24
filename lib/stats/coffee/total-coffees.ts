export function calculateTotalCoffeeConsumption(): number {
  const today = new Date();
  const yearStart = new Date(today.getFullYear(), 0, 1);
  const daysSinceYearStart = Math.floor(
    (today.getTime() - yearStart.getTime()) / (1000 * 60 * 60 * 24)
  );

  const avgCoffeePerDay = 3;

  return daysSinceYearStart * avgCoffeePerDay;
}
