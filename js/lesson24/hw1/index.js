// algo:
// 1. find the difference between two dates modulo in ms;
// 2. get amount days from this amount ms and get the rest ms after this operation;
// 3. get amount hours from the rest ms after previous operation and get the rest ms after this operation;
// 3. get amount min from the rest ms after previous operation and get the rest ms after this operation;
// 4. get amount sec from the rest ms after previous operation;
// 5. return this string like '2d 23h 34m 32s';

// input: two date objects
// output: string

const msInDay = 1000*60*60*24;
const msInHour = 1000*60*60;
const msInMin = 1000*60;
const msInSec = 1000;

export const getDiff = (startDate, endDate) => {
    const diff = Math.abs(startDate.getTime() - endDate.getTime());
    const diffDays = Math.floor(diff / msInDay);

    const restMsAfterGetDays = diff - diffDays * msInDay;
    const diffHours = Math.floor(restMsAfterGetDays / msInHour);

    const restMsAfterGetHours = restMsAfterGetDays - diffHours * msInHour;
    const diffMins = Math.floor(restMsAfterGetHours / msInMin);
    
    const restMsAfterGetMins = restMsAfterGetHours - diffMins * msInMin;
    const difSec = Math.floor(restMsAfterGetMins / msInSec);
    return `${diffDays}d ${diffHours}h ${diffMins}m ${difSec}s`;
}
