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

const name = "peTer heruNIMous liNd";

const firstSpace = name.indexOf(" ");
const lastSpace = name.lastIndexOf(" ");

const firstLetter = name.charAt(0) + name.charAt(firstSpace + 1) + name.charAt(lastSpace + 1)

const firstLetterUppercase = firstLetter.toUpperCase();

console.log(firstLetterUppercase)

// const firstName = name.substring(0, firstSpace);
// const findFirstLetter = firstName.substring(0, 1);
// const firstLetter = findFirstLetter.toUpperCase();
// const lowerFirstRest = name.substring(1, firstSpace);
// const firstLoweredName = lowerFirstRest.toLowerCase();

// console.log("first name:", firstLetter + firstLoweredName);


// const middleName = name.substring(firstSpace + 1, lastSpace);
// const findMiddleFirstLetter = middleName.substring(0, 1);
// const middlefirstLetter = findMiddleFirstLetter.toUpperCase();
// const lowerSecondRest = name.substring(firstSpace + 1 + 1, lastSpace);
// const secondLoweredName = lowerSecondRest.toLowerCase();


// console.log("second name:", middlefirstLetter + secondLoweredName);