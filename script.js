const strings = [{
    string: "The quick brown fox jumped over the lazy dog.",
}, {
    string: ""
}, {

}, {

}, {

}, {

}, {

}, {

}, ]

let string = strings[0].string;
let encode = string.split('');
console.log(encode);

// need regex to only encode characters that match A-Za-z