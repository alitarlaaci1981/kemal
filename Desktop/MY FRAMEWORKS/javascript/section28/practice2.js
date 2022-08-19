// /**
//  * A long process to prepare green tea.
//  * @return {string} A cup of green tea.
//  **/
//  const prepareGreenTea = () => "greenTea";

//  const prepareBlackTea = () => "BlackTea";
//  /**
//   * Get given number of cups of tea.
//   * @param {function():string} prepareTea The type of tea preparing function.
//   * @param {number} numOfCups Number of required cups of tea.
//   * @return {Array<string>} Given amount of tea cups.
//   **/
//  const getTea = (prepareTea, numOfCups) => {
//    const teaCups = [];
 
//    for (let cups = 1; cups <= numOfCups; cups += 1) {
//      const teaCup = prepareTea();
//      teaCups.push(teaCup);
//    }
 
//    return teaCups;
//  };
 
//  // Add your code below this line
//  const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :)
//  const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :)
//  // Add your code above this line
 
//  console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
 

// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
//   ];
  
//   const names = users.map(user => user.name);
  
//   console.log(names);