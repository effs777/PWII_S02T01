class Vehiculo {
  constructor( id = "###", marca = "No definido", modelo = "No definido", tipo = "No definido", color = "No definido" ) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;
    this.color = color;
  }

  get descripcionRapida() {
    return `Marca ${this.marca} Modelo ${this.modelo}`;
  }

  descripcion() {
    console.log( `Descripción del vehiculo insertado (Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo: ${this.tipo}, Color: ${this.color}).` );
  }
}
module.exports.Vehiculo = Vehiculo;