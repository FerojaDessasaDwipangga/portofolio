export function formatNumber(num) {
  return new Intl.NumberFormat('id-ID').format(num);
}

export function formatDate(date, locale = 'id-ID') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function formatPercent(num, decimals = 1) {
  return `${num.toFixed(decimals)}%`;
}
