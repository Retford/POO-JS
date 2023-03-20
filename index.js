import { cliente } from './Cliente.js';
import { cuentaCorriente } from './CuentaCorriente.js';

const cliente1 = new cliente();

cliente1.nombre = 'Juan';
cliente1.dni = '73251452';
cliente1.ruc = '10732514521';

const cliente2 = new cliente();

cliente2.nombre = 'Pedrito';
cliente2.dni = '73212552';
cliente2.ruc = '10732125521';

const cuenta1 = new cuentaCorriente();

cuenta1.numeroCuenta = '1651651651';
cuenta1.agencia = '6516515';
cuenta1.cliente = cliente1;

const cuenta2 = new cuentaCorriente();

cuenta2.numeroCuenta = '1651651651';
cuenta2.agencia = '6516515';
cuenta2.cliente = cliente2;


let saldoJuan = cuenta1.verSaldo();
console.log(`El Saldo inicial de ${cliente1.nombre} es: ${saldoJuan}`);

saldoJuan = cuenta1.entradaSaldo(15000);

console.log(
  `El Saldo actual de ${cliente1.nombre} después de depositar 15000 es: ${saldoJuan}`
);

console.log(`El Saldo inicial de ${cliente2.nombre} es: ${cuenta2.verSaldo()}`);
let saldoPedrito = cuenta1.transferirCuenta(3000, cuenta2);
saldoPedrito = cuenta2.verSaldo();

saldoJuan = cuenta1.verSaldo();

console.log(
  `El Saldo actual de ${cliente2.nombre} después de la transferencia es: ${saldoPedrito}`
);
console.log(
  `El Saldo actual de ${cliente1.nombre} después de la transferencia es: ${saldoJuan}`
);
console.log(cuenta1);
console.log(cuenta2);
