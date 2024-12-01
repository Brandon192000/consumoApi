async function informacionUsuario() {
   
    let infoUsuario = document.getElementById("usuario-info");
    let usuarioSeleccionado = JSON.parse(localStorage.getItem("usuario"));//variable que va a encargase de mostrarar la info del usuario seleccionado con la clave de usuariio conviertoendolo a un objeto con .parse

    console.log("Usuario seleccionado desde localStorage:", usuarioSeleccionado);

    try {
        
        if (usuarioSeleccionado) {

            infoUsuario.innerHTML = 

            `

                 <div style="max-width: 1000px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); background-color: #fff;">

                    <h5 style="text-align: center; color: #333;">
                        <i class="bi bi-person-circle" style="font-size: 2rem; color: #007bff;"></i> ${usuarioSeleccionado.name}
                    </h5>
                    
                    <hr>

                    <p><i class="bi bi-hash" style="color: #6c757d;"></i> <strong>ID:</strong> ${usuarioSeleccionado.id}</p>
                    <p><i class="bi bi-envelope-fill" style="color: #6c757d;"></i> <strong>Email:</strong> ${usuarioSeleccionado.email}</p>

                    <p><i class="bi bi-telephone-fill" style="color: #6c757d;"></i> <strong>Teléfono:</strong> ${usuarioSeleccionado.phone}</p>

                    <p><i class="bi bi-globe" style="color: #6c757d;"></i> <strong>Página:</strong> <a href="http://${usuarioSeleccionado.website}" target="_blank">${usuarioSeleccionado.website}</a></p>
                    <p><i class="bi bi-building" style="color: #6c757d;"></i> <strong>Compañía:</strong> ${usuarioSeleccionado.company.name}</p>

                    <p><i class="bi bi-house-fill" style="color: #6c757d;"></i> 
                    <strong>Dirección:</strong> 
                    Calle: ${usuarioSeleccionado.address.street} / 
                    Ciudad: ${usuarioSeleccionado.address.city} / 
                    Habitación: ${usuarioSeleccionado.address.suite}</p>

                    <p><i class="bi bi-geo-alt-fill" style="color: #6c757d;"></i> <strong>Coordenadas:</strong> 
                    Latitud: ${usuarioSeleccionado.address.geo.lat}, Longitud: ${usuarioSeleccionado.address.geo.lng}</p>
                    
                </div>

            `;

        } else {

            infoUsuario.innerHTML = "<p>No se selecciono ningun usuario.</p>";

        }

    } catch (e) {

        console.error("Error al cargar la información del usuario:", e);

    }
}


informacionUsuario();
