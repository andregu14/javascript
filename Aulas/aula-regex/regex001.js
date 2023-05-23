// Primeiro exemplo
const regex1 = /w/

// Segundo exemplo
const regex2 = new RegExp(/[a-z]/, 'ig')

console.log(regex1.test('abc'))

console.log(regex2.test('abc'))