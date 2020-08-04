// const tasks = [
//     { 
//         id: Math.random().toString().slice(2), 
//         text: 'Buy milk', 
//         done: false, 
//         createDate: new Date(2020, 1, 1, 11, 10, 10).getTime(),
//         finishedDay: null,
//     },
//     { 
//         id: Math.random().toString().slice(2), 
//         text: 'Pick up Tom from airport', 
//         done: false,
//         createDate: new Date(2020, 1, 2, 11, 10, 10).getTime(),
//         finishedDay: null,
//     },
//     { 
//         id: Math.random().toString().slice(2), 
//         text: 'Visit party', 
//         done: false ,
//         createDate: new Date(2020, 1, 3, 11, 10, 10).getTime(),
//         finishedDay: null,
//     },
//     { 
//         id: Math.random().toString().slice(2), 
//         text: 'Visit doctor', 
//         done: true,
//         createDate: new Date(2020, 1, 4, 11, 10, 10).getTime(),
//         finishedDay: new Date(2020, 6, 4, 11, 10, 10).getTime(),
//     },
//     { 
//         id: Math.random().toString().slice(2), 
//         text: 'Buy meat', 
//         done: true,
//         createDate: new Date(2020, 1, 2, 11, 10, 10).getTime(),
//         finishedDay: new Date(2020, 6, 5, 11, 10, 10).getTime(),
//      },
// ];

// const storage = {
//     'tasksList': tasks
// };

export const setItem = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
};
export const getItem = key => {
    return JSON.parse(localStorage.getItem(key));
};
