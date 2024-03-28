  //// Q 04
  let likes = [10,20,15,30]
  let comments = [5,10,8,15]
  function Engagement(likes,comments){
    let sum = 0
    let totalEngagement = []
    for(let i = 0; i < likes.length; i++){
      totalEngagement = likes[i] + comments[i]
    }
    return totalEngagement;
  }
  const totalEngagement = Engagement(likes,comments);
  console.log(`the total engagement for each`,totalEngagement);




  /////// Q 06 
  ///// Using IF-ELSE
  function studentGrade(grade){
    if(grade >= 70){
        return "A"
    } else if(grade >= 60) {
        return "B"
    } else if (grade >= 50) {
        return  "C"
    } else if (grade >= 40){
        return  "D"
    }else if (grade >= 30){
       return  "E"
    }else (grade >= 10)
        return "F"
}   
console.log(studentGrade(85));

////// Using switch case
function studentGrade(grade){
switch (true){
 case grade >= 70:
   return "A"
     break
     case grade >= 60:
   return "B"
     break
 case grade >= 50:
     return "C"
      break
     
  case grade >= 40:
    return "D"
     break
  case grade >= 30:
    return "E"
      break
      case grade >= 10:
   return "F"
     break

  dafault:
    return "try again next time"               
}    
}
console.log(studentGrade(25));


//// Q 07
// const school = {
//     name:dynamic,
//     location:agege,
//     students:[]{

//     }
// }



////Q 02
// class animal(name,age,species){
//   this.name = name
// }