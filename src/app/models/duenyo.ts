export class Duenyo {
    idDuenyo:number;
    nombre:string;
    edad:number;
}

export class NewDuenyo {
    idDuenyo:number;
    nombre:string;
    edad:number;
}

export function DuenyosToAJSON(data):Duenyo[]{
    return data["duenyos"].records.map((val)=>{
        return {
            idDuenyo:   val[0],
            nombre:     val[1],
            edad:       val[2]
        }
    })
}