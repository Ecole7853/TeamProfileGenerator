let renderEmployeeSections = [];

function generateManagerSection(manager){
    return `<div class=employee>
    <h2 id=name>${manager.getName()}<i class="fas fa-mug-hot">Manager </i></h2>
    <p id=id>ID: ${manager.getId()}</p>
    <p>Email: <a href="mailto:${manager.getEmail()}" id="email">${manager.getEmail()}</a></p>
    <p id=officeNumber>Office Number: ${manager.getOfficeNumber()}</p>
</div>`
}
function generateInternSection(intern){
    return `<div class=employee>
    <h2 id=name>${intern.getName()}<i class="fas fa-graduation-cap">Intern </i></h2>
    <p id=id>ID: ${intern.getId()}</p>
    <p>Email: <a href="mailto:${intern.getEmail()}" id="email">${intern.getEmail()}</a></p>
    <p id=school>School: ${intern.getSchool()}</p>
</div>`
}
function generateEngineerSection(engineer){
    return `<div class=employee>
    <h2 id=name>${engineer.getName()}<i class="fas fa-glasses">Engineer </i></h2>
    <p id=id>ID: ${engineer.getId()}</p>
    <p>Email: <a href="mailto:${engineer.getEmail()}" id="email">${engineer.getEmail()}</a></p>
    <p>Github: <a href="https://www.github.com/"id=github>${engineer.getGithub()}</a></p>
</div>`
}

function generateHtml(employees){
    renderEmployeeSection = [];
    console.log("in the generate html", renderEmployeeSections);
    for (var i = 0; i < employees.length; i++){
       if (employees[i].getRole() === "Manager"){
           renderEmployeeSections.push(generateManagerSection(employees[i]))
       }
       else if (employees[i].getRole() === "Engineer"){
        renderEmployeeSections.push(generateEngineerSection(employees[i]))
    }
        else  
        {
        renderEmployeeSections.push(generateInternSection(employees[i]))
    }   
    }
    return ` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./src/styles.css">
    <script src="https://kit.fontawesome.com/34d35bc68f.js" crossorigin="anonymous"></script>
    <title>My Team</title>
</head>
<body>
<main>
<div class=jumbo>
    <span class=title>My team</span>
</div>
<div id=team>
<div class=container>
${renderEmployeeSections.join("")}
</div>
</div>
</main>
</body>
</html>
`
}

module.exports = generateHtml;