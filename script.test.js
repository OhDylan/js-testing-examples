const googleSearch = require('./script');
const dbMock = [
    'whatever.com',
    'dog.com',
    'cat.com',
    'thepizza.com',
    'dogslover.com'
]
it('This is a test', () => {
    expect('Hello').toBe('Hello');
});

it('Google search test', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])
    expect(googleSearch("dog", dbMock)).toEqual(['dog.com', 'dogslover.com'])
});