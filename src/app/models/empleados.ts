export class Empleado {
    idEmpleado:number;
    nombre:string;
    clave:string;
}

export class NewEmpleado{
    idEmpleado:number;
    nombre:string;
    clave:string;
}

export function EmpleadosToAJSON(data):Empleado[]{
    return data["empleados"].records.map((val)=>{
        return {
            idEmpleado:     val[0],
            nombre:         val[1],
            clave:          val[2]
        }
    })

}
