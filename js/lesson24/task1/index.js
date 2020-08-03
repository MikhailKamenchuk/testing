 export const dayOfWeek = (date, days) => {
    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
    const dayNow = new Date(date).getDay();
    const dayInFuture = new Date(date).setDate(dayNow + days);
    return weekDays[new Date(dayInFuture).getDate()];
};
