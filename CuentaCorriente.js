export class cuentaCorriente {
  numeroCuenta;
  #saldoCuenta;
  agencia;
  constructor() {
    this.numeroCuenta = '';
    this.#saldoCuenta = 0;
    this.agencia = '';
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
}
