const googleSearch = require('./script');
const dbMock = [
    'whatever.com',
    'dog.com',
    'cat.com',
    'thepizza.com',
    'dogslover.com'
];

describe('googleSearch', () => {
    it('This is a test', () => {
        expect('Hello').toBe('Hello');
    });
    
    it('Google search test', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
        expect(googleSearch("dog", dbMock)).toEqual(['dog.com', 'dogslover.com']);
    });
    
    it('Works with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    it('Does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
})