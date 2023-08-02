// Control de vehículos.
var { Table } = require('console-table-printer');
var colors = require("colors");

let db = require('./Aplicacion/db_vehiculo');
const cls_Vehiculo = require('./modelo/vehiculos');

// Muestra la información original del arreglo.
var tableVehiculos = new Table({title: "Base de Datos Vehículos",
                                columns: [
                                  { name: 'id', title: 'ID', alignment: 'center' },
                                  { name: 'marca', title: 'Marca', alignment: 'center' },
                                  { name: 'modelo', title: 'Modelo', alignment: 'center' },
                                  { name: 'tipo', title: 'Tipo', alignment: 'center' },
                                  { name: 'color', title: 'Color', alignment: 'center' }
                                ]});
tableVehiculos.addRows(db.lt_Vehiculos, { color: 'cyan' });
console.log('--- Registros Originales ---'.grey);
tableVehiculos.printTable();

// Crea un registro nuevo y muestra previa descripción del mismo antes de su inserción.
const vehiculo01 = new cls_Vehiculo.Vehiculo(8, "Ford", "Mercury", "Turismo", "Azul");
db.lt_Vehiculos.push(vehiculo01);
tableVehiculos.addRow(vehiculo01, { color: 'cyan' });
console.log('--- Registro Insertado ID: 8 ---'.green);
vehiculo01.descripcion();
tableVehiculos.printTable();

// Modifica un registro existente del arreglo.
const registroModificado = db.lt_Vehiculos.find((vehiculo) => vehiculo.id === 1);
registroModificado.tipo = "4X4";
console.log('--- Registro Modificado ID: 1 ---'.yellow);
tableVehiculos.printTable();

//Eliminar un registro existente del arreglo.
db.lt_Vehiculos = db.lt_Vehiculos.filter((vehiculo) => vehiculo.id !== 4);
console.log('--- Registro Eliminado ID: 4 ---'.red);
tableVehiculos = new Table({title: "Base de Datos Vehículos",
                            columns: [
                              { name: 'id', title: 'ID', alignment: 'center' },
                              { name: 'marca', title: 'Marca', alignment: 'center' },
                              { name: 'modelo', title: 'Modelo', alignment: 'center' },
                              { name: 'tipo', title: 'Tipo', alignment: 'center' },
                              { name: 'color', title: 'Color', alignment: 'center' }
                            ]});
tableVehiculos.addRows(db.lt_Vehiculos, { color: 'cyan' });
tableVehiculos.printTable();

//Filtro de registros del arreglo.
db.lt_Vehiculos = db.lt_Vehiculos.filter((vehiculo) => vehiculo.marca == 'Hyundai');
console.log('--- Filtro de registros por marca "Hyundai"  ---'.blue);
tableVehiculos = new Table({title: "Base de Datos Vehículos",
                            columns: [
                              { name: 'id', title: 'ID', alignment: 'center' },
                              { name: 'marca', title: 'Marca', alignment: 'center' },
                              { name: 'modelo', title: 'Modelo', alignment: 'center' },
                              { name: 'tipo', title: 'Tipo', alignment: 'center' },
                              { name: 'color', title: 'Color', alignment: 'center' }
                            ]});
tableVehiculos.addRows(db.lt_Vehiculos, { color: 'cyan' });
tableVehiculos.printTable();