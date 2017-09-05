/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for(var i = 0; i < array.length; i++){
        fn(array[i], i, array);
    }
    
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        fn(array[i], i, array){
            newArray.push array[i]
        }
    }
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    if (array.length == 0 && initialValue == 'undefind') {
        throw new Error('TypeError');
    } else if ( (array.length == 1 && initialValue == 'undefind') || (array.length == 1 && initialValue !== 'undefind' )) {
        return array;
    } else {
        return value = [];
        for(var i = 0; i < array.length; i++){
            fn(previousValue, currentValue, index, array, initial){
                if (initialValue !== 'undefind'){
                    previousValue = initialValue
                    currentValue = array[0];
                } else { 
                    previousValue = array[i]
                    currentValue = array[i+1];
                }
                previousValue + currentValue;
                return value;

            }
        }
    }
    
}
try{
    reduce();
}
catch(e){
    console.log(e.message)
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    if ('prop' in obj) {
        delite obj.prop;
    }
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    if ('prop' in obj) {
        return true;
    } else {
        return false;
    }
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var props = [];
    for(var key in obj){
        props.push( key, obj[key] );
    }
	return props;
};
var user = {
	name: 'Vasya',
	age: 22
}
getEnumProps(user);

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var props = [];
    for(var key in obj){
        key = key.toUpperCase();
        props.push( key );
    }
	return props;
}
var user = {
	name: 'Vasya',
	age: 22
}
upperProps(user);

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    var newArray = [];
    fn() {
         for(var i = 0; i < array.length; i++){
             if (i == from && i < to){
                 newArray.push (array[i]);
             }
         }
    }
    return newArray;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
