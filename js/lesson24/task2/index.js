export const getGreenwichTime = date => {
    const formatter = new Intl.DateTimeFormat('en', {
        timeZone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    });
    return formatter.format(date);
}

