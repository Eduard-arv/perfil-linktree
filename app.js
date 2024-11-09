 // Nombre del perfil en una constante
 const nombrePerfil = "Eduard Rivas";
 // Descripción del perfil en una constante
 const descripcionPerfil = "Estudiante en Desarrollo de Sotware 💻";

 // Elemento HTML con el ID "descripcion"
 const descripcion = document.getElementById("profile-info");

 // Creamos un nuevo elemento HTML de tipo "h1" (encabezado)
 const nameElement = document.createElement("h1");
 // Asignamos el nombre del perfil al contenido del encabezado
 nameElement.textContent = nombrePerfil;

 // Creamos un nuevo elemento HTML de tipo "p" (párrafo)
 const descriptionElement = document.createElement("p");
 // Asignamos la descripción del perfil al contenido del párrafo
 descriptionElement.textContent = descripcionPerfil;

 profileInfo.appendChild(nameElement);
 profileInfo.appendChild(descriptionElement);

 