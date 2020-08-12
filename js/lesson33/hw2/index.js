export const getMostActiveDevs = ({ days, userId, repoId }) => fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(res => res.json())
    .then(data => data
        .filter(item => {
            const { commit: { author: { date } } } = item;
            const maxPossibleDate = new Date();
            maxPossibleDate.setDate(maxPossibleDate.getDate() - days);
            return (new Date(date) > new Date(maxPossibleDate))
        })
        .map(item => {
            const { commit: { author: { name, email } } } = item;
            return { name, email }
        })
        .reduce((acc, item) => {
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

// getMostActiveDevs({ days: 7, userId: 'MikhailKamenchuk', repoId: 'live-session' }).then(res => console.log(res))
