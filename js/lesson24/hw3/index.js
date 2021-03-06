// algo:
// 1. create obj for returned data
// 2. create array of months
// 2. map students and add every student to target value in obj
// 2. sort students by birthDate in every value in obj
// 2. lieve only names in arr for every value in obj

// input: array students
// output: object with sotred students

const stud = [
    {
        name: 'Ben',
        birthDate: '01/17/2008' 
    },
    { 
        name: 'Tom', 
        birthDate: '01/15/2010' 
    }, 
     
    { 
        name: 'Sam', 
        birthDate: '03/15/2010' 
    }
];

 export const studentsBirthDays = students => {
    const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
    return students
        .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
        .reduce((acc, next) => {
            const arr = [];
            const stringifyDate = formatter.format(new Date(next.birthDate));
            students.map(student => {
                if(stringifyDate === formatter.format(new Date(student.birthDate))){
                  arr.push(student.name);
                };
            });
            acc[stringifyDate] = arr;
            return acc;
        }, {});

};
