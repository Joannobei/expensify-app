const code={
    title: 'react',
    Author: 'Joan',
    tutor:{
        name:'Ay'

    }
};

const{ name ='Self-taught' }= code.tutor

console.log(`The name of my tutor is ${ name }`);

const item = [, , '$4.00']

const [type = 'Tea', , midPrice, ,] = item;

console.log(`A medium ${type} cost ${midPrice}`);