const name = 'Hakim';
const age= 17;
const job='Web Developer';
const city = 'Cirebon';

let html;

//without Template String (es5)

html = '<ul><li>Name: '+ name +'</li><li>Age: ' +age+'</li><li>Job: ' +job+'</li><li>City: ' +city+'</li></ul>';

html = '<ul>' +
            '<li>Name: '+ name + '</li>' +
            '<li>Age: '+ age + '</li>' +
            '<li>Job: '+ job + '</li>' +
            '<li>City: '+ city + '</li>' +
        '</ul>';

function hello(){
    return 'Hello';
}

//with tempalate srting (es6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>city: ${city}</li>
        <li> ${5+2}</li>
        <li>${hello()}</li>
        <li>${age > 20 ? 'Over 20' : 'Under 20'}</li>
    </ul>
`;

document.body.innerHTML = html; 