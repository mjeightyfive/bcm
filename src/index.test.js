const bemCSSModules = require('.');

const styles = {
    a: 'a',
    b: 'b',
    c: 'c',
    'a--d': 'a--d',
    'a--i': 'a--i',
    'a--j': 'a--j',
    'a--k': 'a--k',
    'b--l': 'b--l',
    'b--m': 'b--m'
};

const bx = bemCSSModules(styles);

describe('generate BEM classes', () => {
    it('handles class name', () => {
        expect(bx('a')).toEqual('a');
    });

    it('handles multiple class names', () => {
        expect(bx('a', 'b', 'c')).toEqual('a b c');
    });

    it('handles multiple class names passed as a string', () => {
        expect(bx('a b c')).toEqual('a b c');
    });

    it('handles classes names with falsey values', () => {
        expect(bx(null, 'a', undefined, NaN, 0, 4, true, 'b', false, '')).toEqual('a b');
    });

    it('handles modifiers with falsey values', () => {
        expect(bx('a', 'b', 'c', { d: true, e: false, f: 0, g: null, h: undefined, i: 1 })).toEqual('a a--d a--i b c');
    });

    it('handles array of modifiers', () => {
        expect(bx('a', 'b', 'c', ['d', 'i'])).toEqual('a a--d a--i b c');
    });

    it('handles spreading class names', () => {
        expect(bx(...['a', 'b', 'c'], ['d', 'i'])).toEqual('a a--d a--i b c');
    });

    it('handles objects and array of modifiers', () => {
        expect(bx('a', 'b', 'c', { d: true, i: true }, ['j', 'k'])).toEqual('a a--d a--i a--j a--k b c');
    });

    it('handles adding modifiers for blocks and other classes', () => {
        expect(bx('a', 'b', 'c', { 'b--l': true, 'b--m': true }, ['j', 'k'])).toEqual('a a--j a--k b b--l b--m c');
    });

    it('trims empty values', () => {
        expect(bx('', 'b', {}, '')).toEqual('b');
    });

    it('returns an empty string for an empty configuration', () => {
        expect(bx({})).toEqual('');
    });

    it('ignores an array of modifiers without block/element', () => {
        expect(bx(['a', 'b'])).toEqual('');
    });

    it('ignores modifiers without block/element', () => {
        expect(bx({ a: true }, 'b', 0)).toEqual('b');
    });
});
