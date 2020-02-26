const convertToBaby = arr => {
      const babyArray = [];
      for (let i = 0; i < arr.length; i++) {
            babyArray.push('baby ' + arr[i]);
      }
      return babyArray
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
