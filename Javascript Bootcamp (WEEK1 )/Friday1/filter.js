let years = [1996, 2000, 1998, 2006, 1989, 2013];

function getGenZ(birthYear) {
    if (birthYear > 1996) {
        return true;
    }
}

const genZ = years.filter(birthYear => getGenZ(birthYear));
console.log(genZ);
console.log(years);