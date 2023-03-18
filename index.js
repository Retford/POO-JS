import { cliente } from './Cliente.js';
import { cuentaCorriente } from './CuentaCorriente.js';

const cl1 = new cliente();

cl1.nombre = 'Juan';
cl1.numero = '165156';
cl1.dni = '73251452';
cl1.ruc = '10732514521';

const cuenta1 = new cuentaCorriente();

cuenta1.numeroCuenta = '1651651651';
cuenta1.agencia = '6516515';

let saldoTotal = cuenta1.verSaldo();
console.log(`El Saldo actual es: ${saldoTotal}`);

saldoTotal = cuenta1.entradaSaldo(15000);

console.log(`El Saldo actual es: ${saldoTotal}`);

saldoTotal = cuenta1.salidaSaldo(9000);

console.log(`El Saldo actual es: ${saldoTotal}`);
