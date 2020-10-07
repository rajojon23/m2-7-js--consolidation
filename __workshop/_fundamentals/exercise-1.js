// Exercise 1
//
// Write a function will transform the inputData object into a new shape (As provided below.)

const inputData = {
  name: "Will Byers",
  age: 9,
  status: "upside down",
  superpower1: "can-blink-lights",
  superpower2: null,
  address1: "123 Whatever street",
  addressCity: "Hawkins",
  addressState: "Indiana",
  addressCountry: "United States",
  motherName: "Joyce Byers",
  motherAge: 35,
  motherStatus: "worried",
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: "Mike Wheeler",
  bestFriendAge: 9,
  bestFriendStatus: "frenetic",
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: "Eleven",
  girlfriendAge: 9,
  girlfriendStatus: "angry",
  girlfriendSuperpower1: "telepathy",
  girlfriendSuperpower2: "multiverse portal sealing",
};

// We want a function that can transform it from that shape to this shape:
//
// {
//   "name": "Will Byers",
//   "age": 9,
//   "status": "upside down",
//   "address": {
//     "streetAddress": "123 Whatever street",
//     "city": "Hawkins",
//     "state": "Indiana",
//     "country": "United States"
//   },
//   "superpowers": [
//     "can-blink-lights"
//   ],
//   "relationships": [
//     {
//       "type": "mother",
//       "name": "Joyce Byers",
//       "age": 35,
//       "status": "worried",
//       "superpowers": []
//     },
//     {
//       "type": "girlfriend",
//       "name": "Eleven",
//       "age": 9,
//       "status": "angry",
//       "superpowers": [
//         "telepathy",
//         "multiverse portal sealing"
//       ]
//     }
//   ]
// }

// Specifically:

// - Address becomes nested in an object
// - Instead of `superpower1` and `superpower2`, an array is used
// - Instead of having a "flat" structure for relationships, a new `relationships`
//   array is added, which holds objects for each relationship.
// - Each relationship has a `type`, like mother/best-friend/girlfriend
// - Each relationship also has an array of super powers, same logic as the main
//   `superpowers` array

// NOTE: For superpowers, you should only have as many items as are available.
// For example, the main superpowers array should be:
// ✅ ['can-blink-lights']
// ⛔️ ['can-blink-lights', null]

function transformData(data) {
  // Your code here
  let new_obj = {};
  let result2;
  
  let relationships = [];
  let relationships_1 = [];
  let superpowers = [];
  
/* 
  FOR EXAMPLES ONLY: 
    
  relationships = setNestedProp(relationships, ["type"], "mother");
  relationships = setNestedProp(relationships, ["status"], "worried");
  relationships = setNestedProp(relationships, ["superpowers"], []); */
  /* new_obj = setNestedProp(new_obj, ["relationships"], to_Array(relationships)) ;*/

  
  for (const [key, value] of Object.entries(data)) {
    
     
    if(!isNaN(key.slice(-1))){// has a number at the end
      
    }
   
   else if(has_UpperCase(key)){
        
        
   
    }
    else{//if it's a normal key:value, nothing to change
       
       new_obj[key] = value;
    }
   
//check whether string starts with, ignoring case differences
      let pattern = new RegExp('^' + 'superpower', 'i');
     let result = pattern.test(key);
     if (result === true) {
         
         let no_digit = key.replace(/[0-9]/g, 's');
         if(value !== null){
            new_obj[no_digit] = to_Array(value);
          }
         
     } else {
     }
      
 //check whether string starts with, ignoring case differences
      let pattern_address = new RegExp('^' + 'address', 'i');
     let result_address = pattern_address.test(key);
     if (result_address === true) {
         
         let split_digit = key.split(/(\d+)/);
         
         let split_upper = key.split(/(?=[A-Z])/); //get the word after address to use for the new object (we know it because it starts with an uppercase)
         
         
         if(split_upper[1] != undefined){

           
            result2 = setNestedProp(new_obj, [split_upper[0],split_upper[1].toLowerCase()], value);
            
            
            new_obj = result2;
         }
         else{
          
              result2 = setNestedProp(new_obj, [split_digit[0],"streetAddress"], value);
              new_obj = result2;
              
         }
         
     } else {
        
     }   
   
   
   
    let pattern_str = 'girlfriend';
  //check whether string starts with, ignoring case differences
      let pattern_relation = new RegExp('^' + pattern_str, 'i');
     let result_relation = pattern_relation.test(key);
     if (result_relation === true) {

         
         let split_digit = key.split(/(\d+)/);
        
         let split_upper = split_digit[0].split(/(?=[A-Z])/); //get the word after address to use for the new object (we know it because it starts with an uppercase)
         
          relationships = setNestedProp(relationships, ["type"], pattern_str);
          
         if(split_digit[1] != undefined){//get the properties with numbers only (superpowers)
            

            
            if(value !== null){
                  superpowers.push(value);
                  
                   relationships = setNestedProp(relationships, [split_upper[1].toLowerCase().concat('', 's')], superpowers);
            }
            else{
                
            }
         }
         else{//nest any other properties that does not contain > 1 value 
                relationships = setNestedProp(relationships, [split_upper[1].toLowerCase()], value);

         }
         
     } else {
        
     }  
     
      pattern_str = 'mother';
  //check whether string starts with, ignoring case differences

      pattern_relation = new RegExp('^' + pattern_str, 'i');
     result_relation = pattern_relation.test(key);
     if (result_relation === true) {
         
         let split_digit = key.split(/(\d+)/);
         
         let split_upper = split_digit[0].split(/(?=[A-Z])/); 
         
          relationships_1 = setNestedProp(relationships_1, ["type"], pattern_str);
          
           

         if(split_digit[1] != undefined){//get the properties with numbers only (superpowers)
            
            if(value !== null){
                  superpowers.push(value);
                   relationships_1 = setNestedProp(relationships_1, [split_upper[1].toLowerCase()], superpowers);
            }
            else{
                  relationships_1 = setNestedProp(relationships_1, [split_upper[1].toLowerCase().concat('', 's')], []);
                
            }
         }
         else{//nest any other properties that does not contain > 1 value
                relationships_1 = setNestedProp(relationships_1, [split_upper[1].toLowerCase()], value);

         }
         
     } else {
     }  
     
     
     
  }    
    
   let result = [];
   result.push(relationships_1);
   result.push(relationships);
  
  
    new_obj = setNestedProp(new_obj, ["relationships"], result);
 return new_obj;

}



function to_Array(obj){
  let new_arr = [];
  new_arr.push(obj);
  return new_arr;
}

function has_UpperCase(str) {
    return (/[A-Z]/.test(str));
}


/*credit to Henry Ing-Simmons: https://stackoverflow.com/questions/18936915/dynamically-set-property-of-nested-object 
makes it possible to travel through the nested object and add properties at the same time
*/
const setNestedProp = (obj, keys, value) => {
  
  if (typeof obj === "undefined") {
    obj = {};
  }
  
  const [first, ...rest] = keys;

  return {
    ...obj,
    [first]: rest.length
      ? setNestedProp(obj[first], rest, value)
      : value,
      
  };
};

// Use a console.log to verify
// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.
console.log(JSON.stringify(transformData(inputData), null, 2));

// Test your code: "yarn test exercise-1"

module.exports = { inputData, transformData };
