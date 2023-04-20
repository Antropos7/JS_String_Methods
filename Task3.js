function capitaliserOfVowels(str){
let capitalisedLetters = "";
for (let i = 0; i < str.length; i++) {
    const letters = str [i];
   if ("oauie".includes(letters)){
        capitalisedLetters += letters.toUpperCase();
   } 
   else{
       capitalisedLetters += letters

   }
}
return capitalisedLetters;
}

console.log(capitaliserOfVowels("antropos7"));
