let widgets = [{
    id: 1,
    name: 'Test Widget No1',
    price: 100000,
    desc: 'Test description'
}, {
    id: 2,
    name: 'Test Widget No2',
    price: 200000,
    desc: 'Test description'
}, {
    id: 3,
    name: 'Test Widget No3',
    price: 300000,
    desc: 'Test description'
}, {
    id: 4,
    name: 'Test Widget No4',
    price: 400000,
    desc: 'Test description'
}, {
    id: 5,
    name: 'Test Widget No5',
    price: 500000,
    desc: 'Test description'
}, {
    id: 6,
    name: 'Test Widget No6',
    price: 600000,
    desc: 'Test description'
}, {
    id: 7,
    name: 'Test Widget No7',
    price: 700000,
    desc: 'Test description'
}];

exports.find = function (id, callback) {
    for (let i = 0; i < widgets.length; i++) {
        if (id === widgets[i].id) 
            return callback(null, widgets[i]);
    }
    callback(null, null);
};

exports.findAll = function (callback) {
    callback(null, widgets);
};

exports.add = function (data, callback) {
    if (!(data && data.name && data.price)) //если не все заданы поля возвращаем ошибку
        return callback(new Error('Error data'));
    let index = widgets.length + 1; //Рассчитываем идентификатор нового виджета
    widgets[widgets.length] = {
        id: index,
        name: data.name,
        price: parseFloat(data.price) || 0,
        desc: data.desc || ""
    };
    callback(null, widgets[index]);
};

exports.delete = function (id, callback) {
    for (let i = 0; i < widgets.length; i++) {
        if (id === widgets[i].id)
            return callback(null, widgets.splice(i, 1));
    }
    callback(null, null); /*если не найден удаляемый элемент, то вызываем callback функцию с null аргументами, первый аргумент callback функции зарезервирован для возвращения ошибки */
};

