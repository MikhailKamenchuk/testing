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
    let obj = {};
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    students.map(student => {
        if(!obj[months[new Date(student.birthDate).getMonth()]]) {
            const newProperty = obj[months[new Date(student.birthDate).getMonth()]] = [];
            newProperty.push(student);
            return
        }

        obj[months[new Date(student.birthDate).getMonth()]].push(student);
    });               
    Object.values(obj).forEach(value => value
        .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate()));
        
    const newValues = Object.values(obj).map(item => item.map(el => el.name))
    
   return Object.entries(obj)
            .map((el, index) => [el[0], el[1] = newValues[index]])
            .reduce((acc, [key, value]) => (acc[key] = value, acc), {});
}

