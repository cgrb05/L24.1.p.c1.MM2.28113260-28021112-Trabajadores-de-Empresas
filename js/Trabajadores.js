export default class Trabajadores {
    constructor (nomb, horasT, horasEx){
        this.nombre = nomb;
        this.horasTrab = horasT;
        this.horasExtra = horasEx;
    }
    set nombre(nomb){
        this._nombre = nomb;
    }
    get nombre(){
        return this._nombre;
    }
    set horasTrab(horasT){
        this._horasTrab = horasT;
    }
    get horasTrab(){
        return this._horasTrab;
    }
    set horasExtra(horasEx){
        this._horasExtra = horasEx;
    }
    get horasExtra(){
        return this._horasExtra;
    }

    montohorast(){
        return this.horasTrab*10;
    }
 montohorasEx(){
    return this.horasExtra*25;
 }
 total(){
    return this.montohorast()+this.montohorasEx();
 }

}
    