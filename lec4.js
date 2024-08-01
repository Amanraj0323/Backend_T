//converting json into the object

const objecttoconvert={
    name:"Alice",
    age:25
};
const json=JSON.stringify(objecttoconvert);

console.log(json);

console.log(typeof json);