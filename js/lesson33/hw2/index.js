const getAllDevs = (userId, repoId) => fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(res => res.json());

export const getMostActiveDevs = ({ days, userId, repoId }) => {
    return getAllDevs(userId, repoId).then(data => data
        .map(({ commit: { author: { name, email, date } } }) => ({ 
            name, 
            email, 
            date, 
        }))
        .filter(({ date }) => {
            const maxPossibleDate = new Date();
            maxPossibleDate.setDate(maxPossibleDate.getDate() - days);
            return (new Date(date) > new Date(maxPossibleDate))
        })
        .reduce((acc, item) => {
            delete item.date;

            if (acc.length === 0 || !acc.some(el => el.name === item.name)) {
                acc.push(Object.assign(item, { count: 1 }))
                return acc
            };

            acc.map(el => el.name === item.name
                ? el.count += 1
                : { ...el }
            )
            return acc;
        }, [])
        .filter((el, idx, self) => el.count === self.reduce((maxId, item) => Math.max(maxId, item.count), 0))
    )
}
    

// getMostActiveDevs({ days: 7, userId: 'MikhailKamenchuk', repoId: 'live-session' }).then(res => console.log(res))
