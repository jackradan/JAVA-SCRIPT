// function greet(){ 
// let name = prompt('please enter your name:');
// txt = `hello ${name}`
// document.write(txt)

// }
// greet();

// function greet(){ 
//   let name = prompt('please enter your name:');
//   if(name==''|| name== null){
//       txt = `u entered no name`
//   }else{
//     txt = `hello ${name}`
//   }
//   document.write(txt)
  
//   }
//   greet();
// function square(a){
//   return a*a
// }




// function squared(){
// let number = prompt('enter a number take the square')
// if(number==''||number==null){
//   txt = 'u entered no number'
// }else{
//   txt=`the result is ${square(number)}`
// }
// document.write(txt)
// }
// squared()


// function checkPass(pass ){
  
//   if(pass.length < 8 ||!pass.includes('$')){
//     return 'u entered a wrong password'
//   }else {
//     return `valid`
//   }
 
//   }
//   let password = prompt('enter ur password')
  
//   document.write(checkPass(password))



// function checkPass(pass){
//   if(pass.includes(letter)){
//     return `yes it is found in position ${pass.indexOf(letter)}`
//   }else{
//     return `doesnt exist`
//   }

//   }
//   let password = prompt('enter ur password')
//   let letter= 'jay'
//   document.write(checkPass(password))


// let visited = ['dubai','hamburg','stanbul','new york']
// let cities2=['hamburg','berlin','new york']
// function visitedCities(arrVisited,arr){
// let temp =[]
// for(i=0;i<arrVisited.length;i++){
// for(j=0;j<arr.length;j++){
//   if(arrVisited[i]==arr[j]){
//     temp.push(arr[j])
//   }
// }

// }if(temp.length==0){
//   temp = `u have not visited any `
// }
// return temp
// }
// document.write(visitedCities(visited,cities2))
//   console.log(visitedCities(visited,cities2))
// function checkPrular(str){
// if(str[str.length-1]=='s'){
//   return 'prular'
// }else{
//  return 'not prular'
// }
// }
// document.write(checkPrular('world')) 
function checkguest(myName,guestName){
  if(myName.length==guestName.length){
    return 'u r invited'
  }else{
    return 'u r not invited'
  }
}

document.write(checkguest('jay','stef'))