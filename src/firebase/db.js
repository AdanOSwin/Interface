import {db} from './firebase';
import 'firebase/firestore';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
require("firebase/firestore");

//var uuid = require('uuid');

//export const userRef = firebase.firestore().collection('rc');

export const refKpi = firebase.database().ref('kpi');
//export const itemKpi = db.ref(`kpi/${uuid}`);
export const refRc = db.ref('rc');
export const refArea = db.ref('area');
export const refUsers = db.ref('users');
export const refEquipo = db.ref('equipos');
//export const refOkrRc = db.ref(`okr/${idOkr}/rc`);
export const refOkr = db.ref('okr');

export const doRegisterUser = (nombre, apellido, email, pass1, empresa) =>
db.ref('users').push({
    nombre, 
    apellido,
    email,
    pass1,
    empresa
});

export const doCreateIniciativa = (nombre, descripcion, equipo, progreso, okr) =>
db.ref(`okr/${okr}/iniciativas`).push({
    nombre,
    descripcion,
    equipo,
    progreso
});

export const doCreateKpi = (uuid, nombre, descripcion, valInicial, valActual, valTarget, rc) =>
db.ref('kpi').push({
    nombre,
    descripcion,
    valInicial,
    valActual,
    valTarget,
    rc
});

export const doCreateRc = (nombre, inicial, actual, esperado, target, inicio, termino, okr) =>
db.ref('rc').push({
    nombre,
    inicial,
    actual,
    esperado,
    target,
    inicio,
    termino,
    okr
});

export const doCreateOkr = (idOkr, nombre, descripcion, equipo, prioridad, tipo, progreso) =>
db.ref(`okr/${idOkr}`).set({
    nombre,
    descripcion,
    equipo,
    prioridad,
    tipo,
    progreso,
    idOkr
})

export const doCreateEquipo = (nombre, descripcion, area, jefe) =>
db.ref('equipos').push({
    nombre,
    descripcion,
    area,
    jefe
});

export const doCreateArea = (nombre, descripcion, jefe) =>
db.ref('area').push({
    nombre,
    descripcion,
    jefe,
});

export const doCreateUser = (nombre, apellido, email, pass1, tel, equipo, area) =>
    db.ref('users').push({
        nombre,
        apellido,
        email,
        pass1,
        tel,
        equipo,
        area
});

export const doOkrRc = (nombre, inicial, actual, esperado, target, inicio, termino, okr) => 
db.ref(`okr/${okr}/rc`).push({
    nombre,
    inicial,
    actual,
    esperado,
    target,
    inicio,
    termino,
});