const axios = require('axios');

const getArray = async (token) => {

    let arrayDesordenado;
    await axios.get(`https://rooftop-career-switch.herokuapp.com/blocks?token=${token}`)
        .then(res => {
            arrayDesordenado = res.data;
        })
        .catch(error => {
            console.error(error);
        });

    return arrayDesordenado?.data
}

const check = async (array, token) => {

    let arrayOrdenado = array[0];
    let elementoAComparar = array[0]
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            const bloques = [await elementoAComparar, await array[j]]
            await axios.post(`https://rooftop-career-switch.herokuapp.com/check?token=${token}`, {
                blocks: bloques,
            }).then(res => {
                if (res.data.message === true) {
                    arrayOrdenado += array[j];
                    elementoAComparar = array[j];
                    return;
                }
            })
                .catch(error => {
                    console.error(error);
                });

        }
    }
    return arrayOrdenado;
}

const finalCheck = async (array, token) => {
    let mensaje;
    await axios.post(`https://rooftop-career-switch.herokuapp.com/check?token=${token}`, {
        encoded: array,
    })
        .then(res => {
            mensaje = res.data.message
        })
        .catch(error => {
            console.error(error);
        });
    return mensaje;
}
const testRoofTop = async (token) => {
    const arrayDesordenado = await getArray(token);
    const arrayOrdenado = await (check(arrayDesordenado, token));
    const resultadoFinal = await (finalCheck(arrayOrdenado, token))
    return resultadoFinal

}

module.exports = {
    getArray,
    check,
    finalCheck,
    testRoofTop
};