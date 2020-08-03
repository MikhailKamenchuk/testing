export const getDiff = (startDate, endDate) => {
    const msInDay = 1000*60*60*24;
    const diff = Math.abs(startDate.getTime() - endDate.getTime());
    const diffDays = Math.floor(diff / msInDay);

    const msInHour = 1000*60*60;
    const restMsAfterGetDays = diff - diffDays * msInDay;
    const diffHours = Math.floor(restMsAfterGetDays / msInHour);

    const msInMin = 1000*60;
    const restMsAfterGetHours = restMsAfterGetDays - diffHours * msInHour;
    const diffMins = Math.floor(restMsAfterGetHours / msInMin);
    
    const msInSec = 1000;
    const restMsAfterGetMins = restMsAfterGetHours - diffMins * msInMin;
    const difSec = Math.floor(restMsAfterGetMins / msInSec);
    return `${diffDays}d ${diffHours}h ${diffMins}m ${difSec}s`;
}
