function abbreviate(string) {
    let alfabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','x','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','X','Z']
    
  let stringNew = string => string.split('').map( x  =>     (alfabet.includes(x)) ? x : ' ' ).join('')
        let words = stringNew(string).split(' ')
            console.log(words[0])
        for(let i = 0 ; i < words.length ; i++ ){
            if( words[i].length>= 4 ) {
                words[i] = words[i].split('').filter((x,i) =>  i === 0 ).toString()  +  (words[i].split('').length-2) + words[i].split('').reverse().filter((x,i) =>  i === 0  )
                console.log(words[i])
            }else{
                words[i] = words[i]
            }
        }  
        return words
  
  }
  
 
  console.log( abbreviate("Elephant"))

  //

 /* The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
/*