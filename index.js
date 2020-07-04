import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"
import{ContaPoupanca} from "./ContaPoupanca.js"
import{Conta} from "./Conta.js"

const cliente1 = new Cliente("Ricardo", 11122233309)


const ContaCorrenteRIcardo = new Conta(0, cliente1, 1001)
ContaCorrenteRIcardo.depositar(500)
ContaCorrenteRIcardo.depositar(500)


const contaPoupanca = new Conta(50, cliente1, 1001)


console.log(contaPoupanca)
console.log(ContaCorrenteRIcardo)