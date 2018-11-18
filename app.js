let eltable = document.getElementById('studTable')
let elform = document.getElementById('devForm')

let nameOfStudents = []

let student = function(name, nameOfSchool, progLang){
  this.name = name
  this.nameOfSchool = nameOfSchool
  this.progLang = progLang
}
let elHeader = document.createElement('tr')
eltable.appendChild(elHeader)
let elTh = document.createElement('th')
elHeader.appendChild(elTh)
elTh.innerText = 'Name of Student'
let elThschool = document.createElement('th')
elHeader.appendChild(elThschool)
elThschool.innerText = 'Name of School'
let elThprogLang = document.createElement('th')
elHeader.appendChild(elThprogLang)
elThprogLang.innerText = 'Programing Language'

// localStorage 
if(localStorage.parsestudentsArray){
  let studentStorage = localStorage.getItem('studentsArray')
  nameOfStudents =JSON.parse(studentStorage)
}else {
  let student1 = new student('simon', 'code-partners', 'javascript')
  let student2 = new student('Hannah', 'code-partners', 'java')
  let student3 = new student('kesete', 'code-partners', 'javascript')

//nameOfStudents.push(student1,student2,student3)

  student.prototype.newNameOfStudent = function(){
  
    for(let i=0; i<nameOfStudents.length; i++){
      let listName = document.createElement('ul')
      elTh.appendChild(listName)
      let listschool = document.createElement('ul')
      elThschool.appendChild(listschool)
      let listLang = document.createElement('ul')
      elThprogLang.appendChild(listLang)

      listName.innerText=nameOfStudents[i].name
      listschool.innerText = nameOfStudents[i].nameOfSchool
      listLang.innerText = nameOfStudents[i].progLang
    }
    
  }


// let total = function(){

  for(let i=0; i<nameOfStudents.length; i++){
    nameOfStudents[i].newNameOfStudent() 
  }
}
//Accessing our inputs on our form in html via dot.notation
let elstudent = elform.name
let elschool = elform.nameOfSchool
let ellanguage = elform.progLang

// Event Listner to our constructor function
elform.addEventListener('submit', function(event){
  event.preventDefault()
 
  localStorage.setItem('studentsArray', JSON.stringify(nameOfStudents))
  let newStudent = new student(elstudent.value,elschool.value, ellanguage.value)
  nameOfStudents.push(newStudent)
  newStudent.newNameOfStudent()
  // removeName()
})

let removeName = function(){
  while(elHeader.parentNode){
    elHeader.parentNode.removeChild(elHeader)
  }
}