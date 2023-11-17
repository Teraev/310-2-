let human_name = prompt('what is your name?')
if (human_name[0].toLowerCase() === 'a') {
  let age = +prompt('how many years ')
  if (age >20 && age <41) {
   let money = prompt ('how much money do you have')
   if (money > 100) {
    alert ('good')
   } else {
    alert ('go home')
   }

  } else {
    alert ('Pshol von')
  }

} else {
    alert('good bye')
}