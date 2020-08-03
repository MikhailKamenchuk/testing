export const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
const dayOfWeek = (date, days) => {
    const dayNow = new Date(date).getDate();
    const dayInFuture = new Date(date).setDate(dayNow + days);
    return weekDays[new Date(dayInFuture).getDate()];
}
