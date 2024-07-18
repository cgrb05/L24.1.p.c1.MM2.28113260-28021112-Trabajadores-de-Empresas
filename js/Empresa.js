export default class Empresa {
    constructor (){
        this.acumHorasEx = 0;
        this.menor = 50000;
        this.auxNombre = "";

    }
    procesartrabajadores(trab){
    this.acumHorasEx+= trab.montohorasEx();
    if (trab.total() < this.menor){
        this.menor = trab.total();
        this.auxNombre = trab.nombre;
    } 
    }
    devolvertotalhex(){
        return this.acumHorasEx;
    }
    devolvertotalmenor(){
        return this.menor;
    }
    devolvernommenor(){
        return this.auxNombre;
    }   
}