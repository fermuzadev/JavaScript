class Pokemon {
    //atributos
    nombre;
    tipo;
    nivel;
    poder;
    entrenador;
    tipoAtaque;
    puntoAtaque;
    evolucion;
    vida;

    //funcion constructora
    //No necesita con la clase que tenga todos los atributos si asi lo quiero
    constructor(nombre, tipo, nivel, poder, entrenador, tipoAtaque, puntosAtaque, evolucion, vida) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
        this.poder = poder;
        this.entrenador = entrenador;
        this.tipoAtaque = tipoAtaque;
        this.puntosAtaque = puntosAtaque;
        this.evolucion = evolucion;
        this.vida = vida;
}
//acciones

atacar = function() {
    console.log(this.nombre + " genera un ataque de tipo " + this.tipo);
};
evolucionar = function(nombre, nuevosPuntosAtaque, nuevaVida) {
    this.nombre = nombre;
    this.nivel = this.nivel +1;
    this.puntosAtaque = nuevosPuntosAtaque;
    this.vida = nuevaVida;
    console.log("Se ha evolucionado el pokemon a " + this.nombre);
};

volverPokeBola = function () {
    console.log(this.nombre + " vuelve a la pokebola");
}
}
