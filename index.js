let students=[]
//getting data
function addStudent(name,score){
    score=Number(score)
    score=score??0;
    name=name.trim().toUpperCase();
    students.push({name,score})
}
//getting grade for gn score
function getGrade(){
    return students.map((student)=>{
        let grade="F";
    if(student.score>=90) grade="A";
    else if(student.score>=80) grade="B";
    else if(student.score>=65) grade="C";
    else if(student.score>=45) grade="D";
    //RETURN CUZ WE'RE USING MAP
    return{...student,grade}
})
}
//TO FIND TOP SCORES
function getTopscore(){
    return students.filter((student)=> student.score>=75)
}
//to find student
function findStudent(name){
    return students.find((student)=>student.name==name)

}
//check failure
function hasFailures(){
    return students.some((student)=>student.score<45)
}
//display student data
function displayAll(){
    const grade=getGrade();
    console.log("Student Data");
    console.log("All Student with Grades");
    console.log("Name | Score | grade"); 
    grade.forEach((student)=>{
        console.log(`${student.name}  |${student.score}  |${student.grade} `)
    })
}
//adding student
addStudent("john","91");
addStudent("nancy","82");
addStudent("mary","44");
addStudent("thomas","75");
//display students data
displayAll();
//listing top scores
console.log("\n Top Scores:")
console.log(getTopscore())
//find user
console.log("\n searching for ravi")
console.log(findStudent("NANCY"))

//CHECK FAILURES
console.log("\n Any Failure ?")
console.log(hasFailures() ?"Yes there is failure":"No there is no failure")

