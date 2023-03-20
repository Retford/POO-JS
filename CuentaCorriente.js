import { cliente } from './Cliente.js';

export class cuentaCorriente {
  #cliente;
  numeroCuenta;
  agencia;
  #saldoCuenta;
  static cantidadCuentas = 0;

  set cliente(value) {
    if (value instanceof cliente) this.#cliente = value;
  }

  get cliente() {
    return this.#cliente;
  }

  constructor(cliente, numeroCuenta, agencia) {
    this.cliente = cliente;
    this.numeroCuenta = numeroCuenta;
    this.agencia = agencia;
    this.#saldoCuenta = 0;
    cuentaCorriente.cantidadCuentas++;
  }
  entradaSaldo(value) {
    if (value > 0) this.#saldoCuenta += value;
    return this.#saldoCuenta;
  }
  salidaSaldo(value) {
    if (this.#saldoCuenta >= value) this.#saldoCuenta -= value;
    return this.#saldoCuenta;
  }

  verSaldo() {
    return this.#saldoCuenta;
  }

  transferirCuenta(value, cuentaDestino) {
    this.salidaSaldo(value);
    cuentaDestino.entradaSaldo(value);
  }
}
