import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309)

const cliente2 = new Cliente("Alice", 88822233309 )

const ContaCorrenteRIcardo = new ContaCorrente(1001, cliente1)


ContaCorrenteRIcardo.depositar(500)

const conta2 = new ContaCorrente(1002, cliente2)



ContaCorrenteRIcardo.tranferir(200, conta2)



console.log(ContaCorrente.numeroDeContas)