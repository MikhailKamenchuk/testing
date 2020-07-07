const getMessagesForBestStudents = (allStudents, failureStudents) => {
    return allStudents.filter(item => failureStudents.indexOf(item) === -1).map(item => item = 'Good job, ' + item)
}