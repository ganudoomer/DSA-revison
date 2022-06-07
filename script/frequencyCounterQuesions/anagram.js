export default function main() {
    console.log("Anagram");
    console.log(validAnagram("geeksforgeeks","forgeeksgeeks"))
}

function validAnagram(str1,str2){
    let frequencyCounterOne = {}
  let frequencyCounterTwo = {}
  
  for(let i = 0; i < str1.length ; i++){
     frequencyCounterOne[str1[i]] = (frequencyCounterOne[str1[i]] || 0) + 1
     frequencyCounterTwo[str2[i]] = (frequencyCounterTwo[str2[i]] || 0) + 1 
  }

    for(let key in frequencyCounterOne){
         if(frequencyCounterOne[key] != frequencyCounterTwo[key]){
    return false
    }
    }
 return true
}




