const people = [
    { id: 1, name: "Amit Kumar", age: 25 },
    { id: 2, name: "Rahul Dixit", age: 20 },
    { id: 3, name: "Ravi Joshi", age: 55 },
    { id: 4, name: "Rohit Verma", age: 35 },
    { id: 5, name: "Ajay Jain", age: 17 },
  ];
  
   // a. Print id and name of the youngest and oldest person
   const[young,old]=people.reduce((acc,person)=>{

    if(person.age<acc[0].age)acc[0]=person;
    if(person.age>acc[1].age)acc[1]=person;
    return acc;
   },[people[0],people[0]]);

   console.log("Young:",young.id,young.name);
   console.log("Old:",old.id,old.name);
  
  // b. Create another list having id and name of all the persons above 18 years
  const above18 = people
    .filter((person) => person.age > 18)
    .map(({ id, name }) => ({ id, name }));
  
  console.log("Above 18:", above18);
  
  // c. Find the average age
  const averageAge = people.reduce((sum, person) => sum + person.age, 0) / people.length;
  console.log("Average Age:", averageAge);
  
  // d. Create 2 lists with names starting with only 'A' and 'R' respectively
  const startsWithA = people.filter((person) => person.name.startsWith("A")).map(({ name }) => name);
  const startsWithR = people.filter((person) => person.name.startsWith("R")).map(({ name }) => name);
  
  console.log("Names starting with 'A':", startsWithA);
  console.log("Names starting with 'R':", startsWithR);
  