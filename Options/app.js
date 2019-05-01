let options = {
    width: 1024,
    height: 1024,
    name: 'test',
    data: '325kb'
};

options.bool = false;
options.color = {
    color: 'red',
    bg: 'black'
};

console.log(options);

delete options.bool;

console.log(Object.keys(options).length);

for (let key in options) {
    console.log('The property ' + key + ' have value ' + options[key]);   
}