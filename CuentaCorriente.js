export class cuentaCorriente {
  cliente;
  numeroCuenta;
  agencia;
  #saldoCuenta;

  constructor() {
    this.cliente = null;
    this.numeroCuenta = '';
    this.agencia = '';
    this.#saldoCuenta = 0;
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
