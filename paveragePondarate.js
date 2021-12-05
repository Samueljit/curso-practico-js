const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map(noteObject => {
  return noteObject.note * noteObject.credit;
});
console.log(notesWithCredit);

const sumOfNotesWithCredit = notesWithCredit.reduce((sum = 0, newVal) => {
  return sum + newVal;
});
console.log(sumOfNotesWithCredit);

const credits = notes.map(noteObject => {
  return noteObject.credit;
});
console.log(credits);

const sumOfCredits = credits.reduce((a , b) => {
  return a + b;
});

console.log(sumOfCredits);

const averagePoderateWithCredits = sumOfNotesWithCredit / sumOfCredits;
console.log(averagePoderateWithCredits)