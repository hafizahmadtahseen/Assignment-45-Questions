/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is
printed*/

const Users: string[] = ["Admin", "Ahmu", "Pinku", "Cheeku", "BulBul"];
let empt_Userss: string[] = [];

let greetUsers = (array: any[]) => {
  for (let i = 0; i <= array.length; i++) {
    if (array.length == 0) {
      console.log("We need to find some users!");
    } else if (array[i] === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${array[i]} , thank you for logging in again`);
    }
  }
};

greetUsers(Users);
greetUsers(empt_Userss);
export {};
