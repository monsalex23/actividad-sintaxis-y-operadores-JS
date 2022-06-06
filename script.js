function compareNumber(num1, num2) {
    if(!num1 || !num2)return 'defina 2 numros';
    const firstClass = crearFristClass(num1, num2);
    const seconClass = crearSeconClass(num1, num2);

    return `${firstClass} ${seconClass}`
}

function crearFristClass(num1, num2) {
    let sonIguales = '';
    if (num1 !== num2) {
        sonIguales = 'no';
    }

    return `los numeros ${num1} e ${num2} ${sonIguales} Son iguales.`
};

function crearSeconClass(num1, num2) {
    const sum = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compare10 = sum > 10;
    const compare20 = sum > 20;

    if(compare10) {
        resultado10 = 'mayor'
    }
    if(compare20) {
        resultado20 = 'mayor';
    }
    return `Su suma es ${sum}, que es ${resultado10} que 10 es ${resultado20} que 20`
}

console.log(compareNumber());