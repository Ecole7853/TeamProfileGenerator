let renderEmployeeSections = [];

function generateManagerSection(manager){
    return `<div class=employee>
    <p id=name><i class="fas fa-mug-hot">${manager.getName()}</p>
    <a href="mailto:${manager.getEmail()} "id=email>${manager.getEmail()}"</a>
    <p id=id>${manager.getId()}</p>
    <p id=officeNumber>${manager.getOfficeNumber()}</p>
</div>`
}
function generateInternSection(intern){
    return `<div class=employee>
    <p id=name><i class="fas fa-graduation-cap"></i>${intern.getName()}</p>
    <a href="mailto:${intern.getEmail()}" id=email>${intern.getEmail()}"</a>
    <p id=id>${intern.getId()}</p>
    <p id=school>${intern.getSchool()}</p>
</div>`
}
function generateEngineerSection(engineer){
    return `<div class=employee>
    <p id=name><i class="fas fa-glasses"></i>${engineer.getName()}</p>
    <a href="mailto:${engineer.getEmail()} "id=email>${engineer.getEmail()}"</a>
    <a href="github.com/"id=github>${engineer.getGithub()}"</a>
    <p id=github>${engineer.getGithub()}</p>
</div>`
}

function generateHtml(employees){
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
<h1>My team</h1>
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