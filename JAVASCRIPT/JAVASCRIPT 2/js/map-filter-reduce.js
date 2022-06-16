const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const arr1 = users.filter((user) => user.languages.length >= 3);
console.log(arr1);
// Use .map to create an array of strings where each element is a user's email address
const arr2 = users.map((user) =>user.email);
console.log(arr2);
//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const arr3 = (users.reduce((acc,cur) => acc + cur.yearsOfExperience, 0)) / users.length;
console.log(arr3);
// Use .reduce to get the longest email from the list of users.
const arr4 = users.reduce(function(acc, cur) {
    if(cur.email.length > acc){
   return cur.email
    }
        return acc;
}, users[0].email);
console.log(arr4);
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const arr5 = users.reduce((acc, cur) => acc + cur.name + " ", "");
console.log(arr5)
// Use .reduce to get the unique list of languages from the list of users.
    const arr6 = users.reduce(function(acc, cur) {
    for(let language of users.languages){
    acc.add(language)
    }
    return acc;}, new Set());
console.log(arr6);