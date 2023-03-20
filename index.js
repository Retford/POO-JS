import { cliente } from './Cliente.js';
import { cuentaCorriente } from './CuentaCorriente.js';

const cliente1 = new cliente('Juan', '73251452', '10732514521');
console.log(cliente1);

const cliente2 = new cliente('Pedrito', '73212552', '10732125521');
console.log(cliente2);

const cuenta1 = new cuentaCorriente(cliente1, '1', '001');

console.log(cuenta1);

const cuentaMaria = new cuentaCorriente(cliente2, '2', '002');
const cuentaLucas = new cuentaCorriente(cliente2, '3', '003');
const cuentaLucho = new cuentaCorriente(cliente2, '4', '004');
const cuentaCarlos = new cuentaCorriente(cliente2, '5', '005');

cuenta1.entradaSaldo(1000);
cuenta1.verSaldo();
console.log(cuenta1.verSaldo());

cuenta1.transferirCuenta(200, cuentaMaria);
cuentaMaria.verSaldo();
console.log(cuentaMaria);
console.log(cuenta1.verSaldo());

console.log(cuentaCorriente.cantidadCuentas);