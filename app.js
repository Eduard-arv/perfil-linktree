 // Nombre del perfil en una constante
 const nombrePerfil = "Eduard Rivas";
 // Descripción del perfil en una constante
 const descripcionPerfil = "Estudiante en Desarrollo de Sotware 💻";

 // Obtenemos el elemento HTML con el ID "descripcion" (este elemento debe existir en tu HTML)
 const descripcion = document.getElementById("descripcion");

 // Creamos un nuevo elemento HTML de tipo "h1" (encabezado)
 const nameElement = document.createElement("h1");
 // Asignamos el nombre del perfil al contenido del encabezado
 nameElement.textContent = nombrePerfil;

 // Creamos un nuevo elemento HTML de tipo "p" (párrafo)
 const descriptionElement = document.createElement("p");
 // Asignamos la descripción del perfil al contenido del párrafo
 descriptionElement.textContent = descripcionPerfil;

 // Agregamos el encabezado (nombre) como hijo del elemento "profile-info"
 profileInfo.appendChild(nameElement);
 // Agregamos el párrafo (descripción) como hijo del elemento "profile-info"
 profileInfo.appendChild(descriptionElement);
