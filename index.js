var Departamento = /** @class */ (function () {
    function Departamento(nombre) {
        this.nombre = nombre;
    }
    Departamento.prototype.getName = function () {
        return this.nombre;
    };
    return Departamento;
}());
;
var Piso = /** @class */ (function () {
    function Piso(nombre) {
        this.nombre = nombre;
        this.departamentos = [];
    }
    Piso.prototype.pushDepartamento = function (departamento) {
        this.departamentos.push(departamento);
    };
    Piso.prototype.getDepartamentos = function () {
        return this.departamentos;
    };
    return Piso;
}());
var Edificio = /** @class */ (function () {
    function Edificio(piso) {
        this.piso = piso;
    }
    Edificio.prototype.addDepartamentoToPiso = function (nombreDePiso, departamento) {
        var pisoBuscado = this.piso.find(function (piso) { return piso.nombre === nombreDePiso; });
        if (pisoBuscado) {
            pisoBuscado.pushDepartamento(departamento);
        }
        else {
            console.log("Piso no encontrado, ingrese un piso válido.");
        }
    };
    Edificio.prototype.getDepartamentosByPiso = function (nombreDePiso) {
        var pisoBuscado = this.piso.find(function (piso) { return piso.nombre === nombreDePiso; });
        if (pisoBuscado) {
            return pisoBuscado.getDepartamentos();
        }
        else {
            console.log("No se encontró el piso ingresado");
        }
    };
    return Edificio;
}());
;
function testClaseEdificio() {
    var unPiso = new Piso("planta baja");
    var otroPiso = new Piso("primer piso");
    var unEdificio = new Edificio([unPiso, otroPiso]);
    var deptoUno = new Departamento("depto uno");
    var deptoDos = new Departamento("depto dos");
    var deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
    var deptos = unEdificio.getDepartamentosByPiso("planta baja");
    var deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
    if (Array.isArray(deptosEmpty) &&
        deptosEmpty.length == 0 &&
        deptos.length == 3 &&
        deptos[2].getName() == "depto tres") {
        console.log("testClaseBandaApartment passed");
    }
    else {
        throw "testClaseBandaApartment not passed";
    }
}
function main() {
    testClaseEdificio();
}
main();
