
let radiologia = [
    {
    hora: "11:00",
    especialista: "ignacio schulz",
    paciente: "francisca rojas",
    rut: "9878782-1",
    prevision: "fonasa"
},{
    hora: "11:30",
    especialista: "federico subercaseaux",
    paciente: "pamela estrada",
    rut: "15345241-3",
    prevision: "isapre"
},{
    hora: "15:00",
    especialista: "fernando wurthz",
    paciente: "armando luna",
    rut: "16445345-9",
    prevision: "isapre"
},{
    hora: "15:30",
    especialista: "ana maria godoy",
    paciente: "manuel godoy",
    rut: "17666419-0",
    prevision: "fonasa"
},{
    hora: "16:00",
    especialista: "patricia suazo",
    paciente: "ramon ulloa",
    rut: "14989389-k",
    prevision: "fonasa"
}
]


let traumatologia = [
    {
    hora: "8:00",
    especialista: "maria paz altuzarra",
    paciente: "paula sanchez",
    rut: "15554774-5",
    prevision: "fonasa"
},{
    hora: "10:00",
    especialista: "raul araya",
    paciente: "angélica navas",
    rut: "15444147-9",
    prevision: "isapre"
},{
    hora: "10:30",
    especialista: "maria arriagada",
    paciente: "ana klapp",
    rut: "17879423-9",
    prevision: "isapre"
},{
    hora: "11:00",
    especialista: "alejandro badilla",
    paciente: "felipe mardones",
    rut: "1547423-6",
    prevision: "isapre"
},{
    hora: "11:30",
    especialista: "cecilia budnik",
    paciente: "diego marre",
    rut: "16554741-K",
    prevision: "fonasa"
},{
    hora: "12:00",
    especialista: "arturo cavagnaro",
    paciente: "cecilia mendez",
    rut: "9747535-8",
    prevision: "isapre"
},{
    hora: "12:30",
    especialista: "andres kanacri",
    paciente: "marcial suazo",
    rut: "11254785-5",
    prevision: "isapre"
}
]


let dental = [
    
{
    hora: "8:30",
    especialista: "andrea zuñiga",
    paciente: "marcela retamal",
    rut: "11123425-6",
    prevision: "isapre"
},{
    hora: "11:00",
    especialista: "maria pia zañartu",
    paciente: "angel muñoz",
    rut: "9878789-2",
    prevision: "isapre"
},{
    hora: "11:30",
    especialista: "scarlett witting",
    paciente: "mario kast",
    rut: "7998789-5",
    prevision: "fonasa"
},{
    hora: "13:00",
    especialista: "francisco von teuber",
    paciente: "karin fernandez",
    rut: "18887662-k",
    prevision: "fonasa"
},{
    hora: "13:30",
    especialista: "eduardo viñuela",
    paciente: "hugo sanchez",
    rut: "17665461-4",
    prevision: "fonasa"
},{
    hora: "14:00",
    especialista: "raquel villaseca",
    paciente: "ana sepulveda",
    rut: "14441281-0",
    prevision: "isapre"
}
]


let radioLargo = radiologia.length;
let dentalLargo = dental.length;
let traumaLargo = traumatologia.length;

document.write(`Cantidad de Consultas Dental ${dental.length}</br>`);
document.write(`Cantidad de Consultas Radiologia ${radiologia.length}</br>`);
document.write(`Cantidad de Consultas Traumotologia ${traumatologia.length}</br>`);


document.write(`Primera Atencion Dental:${dental[0].paciente}-${dental[0].rut}-${dental[0].prevision}|Ultima Atencion:${dental[dentalLargo -1].paciente}-${dental[dentalLargo -1].rut}-${dental[dentalLargo -1].prevision}</br>`);
document.write(`Primera Atencion Radiologia:${radiologia[0].paciente}-${radiologia[0].rut}-${radiologia[0].prevision}|Ultima Atencion:${radiologia[radioLargo -1].paciente}-${radiologia[radioLargo -1].rut}-${radiologia[radioLargo -1].prevision}</br>`);
document.write(`Primera Atencion Traumatologia:${traumatologia[0].paciente}-${traumatologia[0].rut}-${traumatologia[0].prevision}|Ultima Atencion:${traumatologia[traumaLargo -1].paciente}-${traumatologia[traumaLargo -1].rut}-${traumatologia[traumaLargo -1].prevision}</br>`);




