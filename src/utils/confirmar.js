import Swal from 'sweetalert2';

export const confirmar = (onConfirm, titulo = '¿Desea eliminar el registro?', textoBotonConfirmacion = "Eliminar") => {

    Swal.fire({
        title: titulo,
        confirmButtonText: textoBotonConfirmacion,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
    }).then(result => {
        if(result.isConfirmed){
            onConfirm();
        }
    })
}