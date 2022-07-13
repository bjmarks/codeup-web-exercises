const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];
const name = 'benjamin marks';
const email = 'bjmarks13@yhaoo.com';
const languages = ['html','css','javascript', 'php', 'sql', 'bash', 'python'];
users.push({
  name: name,
  email: email,
  languages: languages
});
console.log(users);
let emails = [];
let names = [];
users.forEach((user) => {emails.push(user.email);});
users.forEach((user) =>{names.push(user['name']);});
console.log(emails);
console.log(names);
let developers = [];
users.forEach(function(user) {
  const { name , email, languages } = user;
  developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`);
  console.log(developers);
});
let list = '<ul>';
for (const developer of developers) { // developers.forEach(function (developer) {
  list += `<li>${developer}</li>`; //   list += '<li>' + developer + '</li>';
}// });
list += "</ul>"// list += '</ul>';
let div = document.getElementById("push");
div.innerHTML = list;