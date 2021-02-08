// const name = "Peter Heronimous Lind";

// const firstSpace = name.indexOf(" ");
// const lastSpace = name.lastIndexOf(" ");

// const firstName = name.substring(0, firstSpace);
// const middleName = name.substring(firstSpace + 1, lastSpace);
// const lastName = name.substring(lastSpace + 1);

// console.log(firstName, middleName, lastName);


// second exercise
// const name = "petEr";
// const correctName = name.substring(0, 1);
// const finalName = correctName.toUpperCase();

// const lowerName = name.substring(1);
// const finalPart = lowerName.toLowerCase();

// console.log(finalName + finalPart);

// third exercise
const name = "peTer heruNIMous liNd";

const separateNames = name.split(" ");

separateNames.forEach(f => {
    const firstLetter = f.substring(0, 1).toUpperCase();
    const restName = f.substring(1).toLowerCase();
    console.log(firstLetter + restName);
});