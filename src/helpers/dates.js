/**
 * 
 * @param {*} date string
 * @returns repaired date
 */
 const fixNonexistentDate = date => new Date(Date.parse(date))

 module.exports = { fixNonexistentDate } 