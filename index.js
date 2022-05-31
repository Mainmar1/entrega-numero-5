alert("Bienvenido al creador de curriculum vitae");

// tittle del creador de CV

let primer_h1 = document.createElement("h1")

primer_h1.innerHTML = "<h1> CURRICULUM VITAE </h1>"

primer_h1.style.textDecoration = "underline"
primer_h1.style.backgroundColor = "grey"
primer_h1.style.textAlign = "center"

document.body.append(primer_h1)


// INGRESO DATOS PERSONALES:

alert("INGRESO DE DATOS PERSONALES:")

let primer_h3 = document.createElement("h2")

primer_h3.innerHTML = "<h2> DATOS PERSONALES: </h2>"

document.body.append(primer_h3)

const datos_personales = []
let flag2 = true;


while (flag2){

    for (i=0; i < 6; i++){

        if (i === 0 ){
            let mostrar = document.createElement("ul")
            datos_personales[i] = prompt("Ingresar nombre: ")
            mostrar.innerHTML = `<li>Nombre: ${datos_personales[i]} </li>`
            document.body.append(mostrar)
        }
        if (i === 1 ){
            let mostrar = document.createElement("ul")
            datos_personales[i] = prompt("Ingresar apellido: ")
            mostrar.innerHTML = `<li>Apellido: ${datos_personales[i]} </li>`
            document.body.append(mostrar)
        }
        if (i === 2 ){
            let mostrar = document.createElement("ul")
            datos_personales[i] = prompt("Ingresar DNI: ")
            mostrar.innerHTML = `<li>DNI: ${datos_personales[i]} </li>`
            document.body.append(mostrar)
        }
        if (i === 3 ){
            let mostrar = document.createElement("ul")
            datos_personales[i] = prompt("Ingresar E-mail: ")
            mostrar.innerHTML = `<li>Email: ${datos_personales[i]} </li>`
            document.body.append(mostrar)
        }
        if (i === 4 ){
            let mostrar = document.createElement("ul")
            datos_personales[i] = prompt("Ingresar celular: ")
            mostrar.innerHTML = `<li>Celular: ${datos_personales[i]} </li>`
            document.body.append(mostrar)
        }
        if (i === 5 ){
            let mostrar = document.createElement("ul")
            datos_personales[i] = prompt("Ingresar direccion: ")
            mostrar.innerHTML = `<li>Direccion: ${datos_personales[i]} </li>`
            document.body.append(mostrar)
        }
    
    }
     flag2 = false;
}

// CARGA DE DATOS DE EXPERIENCIA LABORAL:

let rta1 = parseInt(prompt("Desea cargar experiencia laboral?: 1 = 'SI ---- 2 = 'NO'"));

const experiencia_laboral = []
let a = 1;
let flag = true;

while(rta1 === 1){

if(flag){
let seg_h2 = document.createElement("h2")

seg_h2.innerHTML = "<h2>EXPERIENCIA LABORAL:</h2>"
    
document.body.append(seg_h2)
}

let segundo_h3 = document.createElement("h3")

segundo_h3.innerHTML = `<h3> EXPERIENCIA LABORAL NUMERO ${a}:</h3>`

document.body.append(segundo_h3)

a = a +1;

for (i=0; i < 5; i++){

    if ( i === 0){
        let mostrar = document.createElement("ul")
            experiencia_laboral[i] = prompt("Ingresar nombre de la empresa: ")
            mostrar.innerHTML = `<li>Nombre de la empresa: ${experiencia_laboral[i]} </li>`
            document.body.append(mostrar)
    }
    if ( i === 1){
        let mostrar = document.createElement("ul")
            experiencia_laboral[i] = prompt("Ingresar años trabajados en la empresa: ")
            mostrar.innerHTML = `<li>Años trabajados: ${experiencia_laboral[i]} </li>`
            document.body.append(mostrar)
    }
    if ( i === 2){
        let mostrar = document.createElement("ul")
            experiencia_laboral[i] = prompt("Ingresar fecha de ingreso en este formato --/--/---- :  ")
            mostrar.innerHTML = `<li>Fecha de ingreso: ${experiencia_laboral[i]} </li>`
            document.body.append(mostrar)
    }
    if ( i === 3){
        let mostrar = document.createElement("ul")
            experiencia_laboral[i] = prompt("Ingresar Fecha de egreso en este formato --/--/---- : ")
            mostrar.innerHTML = `<li>Fecha de egreso: ${experiencia_laboral[i]} </li>`
            document.body.append(mostrar)
    }
    if ( i === 4){
        let mostrar = document.createElement("ul")
            experiencia_laboral[i] = prompt("Ingresar Tareas a realizar: ")
            mostrar.innerHTML = `<li>Tareas a realizar: ${experiencia_laboral[i]} </li>`
            document.body.append(mostrar)
    }

}


 
rta1 = parseInt(prompt("Desea cargar otra experiencia laboral?: 1 = 'SI' --  2 = 'NO'"))
flag = false;

}

// INGRESAR DATOS DE NIVEL ACADEMICO:

alert("DATOS DEL NIVEL ACADEMICO:")

let tercer_h3 = document.createElement("h2")

tercer_h3.innerHTML = "<h2> NIVEL ACADEMICO: </h2>"

document.body.append(tercer_h3)

let flag1 = true;

const nivel_academico = []

while(flag1){

for (i = 0 ; i < 4; i++){

    if ( i === 0 ){
        let mostrar = document.createElement("ul")
        nivel_academico[i] = prompt("Ingresar nivel Escolar: ")
        mostrar.innerHTML = `<li>Nivel escolar: ${nivel_academico[i]} </li>`
        document.body.append(mostrar)
    }
    if ( i === 1 ){
        let mostrar = document.createElement("ul")
        nivel_academico[i] = prompt("Ingresar carrera universitaria: ")
        mostrar.innerHTML = `<li>Carrera universitario: ${nivel_academico[i]} </li>`
        document.body.append(mostrar)
    }
    if ( i === 2 ){
        let mostrar = document.createElement("ul")
        nivel_academico[i] = prompt("Ingresar idioma / idiomas: ")
        mostrar.innerHTML = `<li>Idioma / Idiomas: ${nivel_academico[i]} </li>`
        document.body.append(mostrar)
    }
    if ( i === 3 ){
        let mostrar = document.createElement("ul")
        nivel_academico[i] = prompt("Ingresar cursos realizados: ")
        mostrar.innerHTML = `<li>Curso / cursos realizados: ${nivel_academico[i]} </li>`
        document.body.append(mostrar)
    }
}
flag1 = false;

}


alert("SE HA CREADO EL CURRICULUM VITAE CORRECTAMENTE, ENTER PARA VISUALIZAR")




