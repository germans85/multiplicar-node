const fs = require('fs');
const { promises } = require('dns');
const { resolve } = require('path');
const colors = require('colors');

let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++) {

        console.log('======================='.green);
        console.log(`Tabla de ${base}`.green);
        console.log('======================='.green);
        let resultado = base * i;

        console.log(`${base} * ${i} = ${resultado}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            let resultado = base * i;

            data += `${base} * ${i} = ${resultado}\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                rejects(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}