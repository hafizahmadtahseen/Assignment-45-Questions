/*City Names: Write a function called city_country() that takes in the name of a city
and its country. The function should return a string formatted like this:"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s
returned.*/
let city_country = (City: string, Country: string) =>
  console.log(`"${City}, ${Country}"`);

city_country("Lahore", "Pakistan");
city_country("California", "United States");
city_country("Paris", "France");
