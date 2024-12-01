document.getElementById('btn-buscar').addEventListener('click', function() {

    const nombre = document.getElementById('buscar-nombre').value.trim();//uso trim()para borrar espacios en blanco inutiles en el valor ingresado por el usuario

    if (nombre) {//si el valor de nombre si es correcto

        buscarUsuariosPorNombre(nombre);///busca el usuario por el nombre ingresador en el input 

    } else {//sino

        alert('Por favor, ingrese un nombre para buscar💬.');
        
    }

});

async function cargarUsuario() {//carga todos los usuarios

    let usuariosHtml = document.getElementById("usuarios");

    try {

        const usuariosGuardados = localStorage.getItem("usuarios");//cargo el local storage para que no se haga la peticion incesariamente

        if (usuariosGuardados) {//si esta
            
            const usuarios = JSON.parse(usuariosGuardados);
            mostrarUsuarios(usuarios);//muestra el usuario
            console.log(`usuario:`);

        }else{//sino

            const respuestaApi = await fetch("https://jsonplaceholder.typicode.com/users");//hago peticion a la api
            const datosGenerados = await respuestaApi.json();//paso a json

            
            localStorage.setItem("usuarios", JSON.stringify(datosGenerados));//guardo el usurio en el local storage

            
            mostrarUsuarios(datosGenerados);//muestro el usuario genarado
            console.log(`nuevo: ${datosGenerados}`);
        }
    } catch (e) {

        alert("🤔No se pudo obtener los usuarios😫", e);

    }
}

function mostrarUsuarios(listaUsuarios) {//funcion para listar y mostrar cuando buscan por nombre

    let usuariosHtml = document.getElementById("usuarios");//id de dodne se va a mostrar en el html
    usuariosHtml.innerHTML = ''; 

    listaUsuarios.forEach(usuario => {//hace un ciclo por los usuarios 

        let tarjeta = document.createElement("div");//creo un div
        tarjeta.classList.add("user-card");//agrego unos estilos a la carta

        tarjeta.innerHTML = `

            <h5><i class="bi bi-person-fill"></i> ${usuario.name}</h5>
            <p><i class="bi bi-key-fill"></i> ${usuario.id}</p>

        `;//muestro el nombre con el id

        tarjeta.addEventListener("click", () => {

            localStorage.setItem("usuario", JSON.stringify(usuario));//duarda el usaurio seleccionado 
            window.location.href = "info.html";//redirige a la pag de la info del seleccionado

        });

        usuariosHtml.appendChild(tarjeta);

    });
}

function buscarUsuariosPorNombre(nombre) {//busca  usuarios por nombre

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if (!usuarios) {

        alert("🤔No hay usarios. Intente recargar la pag👍.");
        return;

    }

    const usuariosFiltrados = usuarios.filter(usuario =>usuario.name.toLowerCase().includes(nombre.toLowerCase()));//filtro por nombre que incluya en nombre inregrado en el input

    if (usuariosFiltrados.length > 0) {//si la cadena que ingreso es mayo a 0

        mostrarUsuarios(usuariosFiltrados);//muestra los usuarios

    } else {

        alert("No se encontraron usuarios con ese nombre🤔.");

    }
}

cargarUsuario();