export const formatDate = (date: Date | null | string) => {
  let dt: Date | null = null;
  if (typeof date === 'string') {
    dt = new Date(date);
  } else {
    dt = date;
  }
  if (!dt) return '';

  // Форматируем время в 24-часовой формат с точкой вместо двоеточия
  const time = dt
    .toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    .replace(':', '.');

  // Форматируем дату в нужный формат
  const datePart = dt.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return `${time}, ${datePart}`;
};
