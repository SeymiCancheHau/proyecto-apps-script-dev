function guardarUsuario(usuario){
   try {
     const {id, nombreCompleto, correo, contraseña } = usuario;
     const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
     sheetUsuarios.appendRow([id, nombreCompleto, correo, contraseña]);
     return{
       titulo: "Registro exitoso",
       descripcion: "Ya se encuentra el usuario en la base de datos."
   };

   }catch (error) {
       return{
           titulo: "Ops ha ocurrido un error! " + error,
           descripcion: "Por favor contacte a soporte."
       };
   }
}

function listarUsuarios() {
   return obtenerDatos(env_().SH_REGISTRO_USUARIOS);
 }