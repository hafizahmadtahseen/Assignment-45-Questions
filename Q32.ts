/* Checking Usernames: Do the following to create a program that simulates how
websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the
new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If
it has, print a message that the person will need to enter a new username. If a username
has not been used, print a message saying that the username is available.• Make sure your comparison is case insensitive. 
If 'John' has been used, 'JOHN' should
not be accepted*/

let current_users = ["John", "hung", "Chipmuk", "Dolu", "Bholu"];
let lower_current_users = current_users.map((i) => i.toLowerCase());
let new_users = ["Fiqa", "Pappu", "john", "hung", "Rami"];

for (const i of new_users) {
  let lower_new_users = i.toLowerCase();
  if (lower_current_users.includes(lower_new_users)) {
    console.log(`${lower_new_users} is already taken. Enter new User Name! `);
  } else {
    console.log(`"${lower_new_users}" is Available!`);
  }
}
