export function addCommas(value: number): string {
  if (!Number.isFinite(value)) {
    return '';
  }

  const [integer, decimal] = value.toString().split('.');

  return integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (decimal ? `.${decimal}` : '');
}
