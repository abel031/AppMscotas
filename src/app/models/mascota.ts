export class Mascota {
    idAnimal:number;
    idDuenyo:number;
    animal:string;
    nombre:string;
    foto:string;
}

export class NewMascota {
    constructor(
    idAnimal:number,
    idDuenyo:number,
    animal:string,
    nombre:string,
    foto:string,
    ){};
}

export function MascotasToAJSON(data):Mascota[]{
    return data["animales"].records.map((val)=>{
        return {
            idAnimal:   val[0],
            idDuenyo:   val[1],
            animal:     val[2],
            nombre:     val[3],
            foto:       val[4]
        }
    })
}
