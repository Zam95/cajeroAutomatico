var cuentas = [
    { nombre: "Carlos Zamudio", saldo: 555, NIP: 1111 },
    { nombre: "Krystel Baca", saldo: 987, NIP: 2222 },
    { nombre: "Andres Sanchez", saldo: 678, NIP: 3333 }
];
var saldoCz = Number()
var saldoKb = ""
var saldoAs = Number("")
var credito = Number("")
var cd = Number("")
var nombre = ""
var cr = Number("")
var nm = localStorage.setItem('nm', '');

function loginCz() {
    let Clave = prompt("Por favor, ingresa tu NIP")
    cuentas.forEach(objetos => {
        if (objetos.nombre == "Carlos Zamudio") {
            if (objetos.NIP == Clave) {
                var saldoCz = objetos.saldo
                alert("Bienvenido Carlos Zamudio")
                document.getElementById("accede").innerHTML = "Bienvenido Carlos Zamudio, tu saldo actual es de:"
                document.getElementById("saldo").innerHTML = saldoCz

            }
            else alert("NIP Incorrecto, intentalo nuevamente")
        }
    })
}
function loginKb() {
    let Clave = prompt("Por favor, ingresa tu NIP")
    cuentas.forEach(objetos => {
        if (objetos.nombre == "Krystel Baca") {
            if (objetos.NIP == Clave) {
                localStorage.setItem("nombre", "Krystel");
                var saldoKb = objetos.saldo
                alert("Bienvenida Krystel Baca")
                document.getElementById("accede").innerHTML = "Bienvenida Krystel Baca, tu saldo actual es de:"
                document.getElementById("saldo").innerHTML = saldoKb
            }
            else alert("NIP Incorrecto, intentalo nuevamente")
        }
    })
}

function loginAs() {
    let Clave = prompt("Por favor, ingresa tu NIP")
    cuentas.forEach(objetos => {
        if (objetos.nombre == "Andres Sanchez") {
            if (objetos.NIP == Clave) {
                var saldoAs = objetos.saldo
                alert("Bienvenido Andres Sanchez")
                document.getElementById("accede").innerHTML = "Bienvenido Andres Sanchez, tu saldo actual es de:"
                document.getElementById("saldo").innerHTML = saldoAs

            }
            else alert("NIP Incorrecto, intentalo nuevamente")
        }
    })
}

function Depositar() {
    var credito = Number(document.getElementById("saldo").innerHTML)
    var cd = Number(prompt("Cuanto vas a depositar?"))
    if (credito + cd <= 990) {
        credito = Number(credito) + Number(cd)
        document.getElementById("saldo").innerHTML = credito
        confirm("Tu deposito de $ " + cd + " fue exitoso, tu nuevo saldo es de : $" + credito);
    }
    else alert("No se puede ingresar el monto ya que supera tu limite")
}

function Retirar() {
    var credito = Number(document.getElementById("saldo").innerHTML)
    var cr = prompt("Cuanto vas a retirar?")
    if (credito - cr >= 10) {
        credito = Number(credito) - Number(cr)
        document.getElementById("saldo").innerHTML = credito
        confirm("Tu retiro de $ " + cr + " fue exitoso, tu nuevo saldo es de : $" + credito);
    }
    else alert("No se puede retirar el monto ya que rebasa el minimo en cuenta")

}

function salir() {
    nm = localStorage.getItem(nombre);
    console.log(nm)
    if (nombre = "Andres") {
        alert("Adios Andres")
    }
    else if (nm = "Krystel")
        alert("Adios Krystel")
}