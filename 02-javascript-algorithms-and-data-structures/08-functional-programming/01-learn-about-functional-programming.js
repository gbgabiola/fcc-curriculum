/*
  Challenge: In the code editor, the prepareTeaand getTeafunctions are already defined for you.
  Call the getTeafunction to get 40 cups of tea for the team, and store them in the tea4TeamFCCvariable.
*/

/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = numOfCups => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40);

console.log(tea4TeamFCC);

// (40) ["greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea", "greenTea"]
