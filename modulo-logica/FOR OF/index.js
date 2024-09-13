const name = ['lorenzo jaeger', 'laura ost', 'pug moana']

for (let value of name) {
    console.log(value);    
}

name.forEach(function(array, index, value) {
    console.log(value,index, array);
});