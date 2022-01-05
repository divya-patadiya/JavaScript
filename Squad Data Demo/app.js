let data = [{
        name: 'Matero',
        age: '30'
    },
    {
        name: 'John',
        age: '32'
    },
    {
        name: 'Harsh',
        age: '23'
    },
    {
        name: 'Smith',
        age: '18'
    },
    {
        name: 'Divya',
        age: '22'
    },
    {
        name: 'Yug',
        age: '30'
    },
    {
        name: 'Abhi',
        age: '34'
    },
    {
        name: 'Sami',
        age: '20'
    },
    {
        name: 'Hardin',
        age: '30'
    },
    {
        name: 'Tessa',
        age: '20'
    },

];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + '' + ' is ' + item.age + ' years old' + '</div>';

});

info.innerHTML = details.join('\n');