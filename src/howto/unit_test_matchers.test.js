/**
 * Read more at https://jestjs.io/docs/en/expect
 */
describe('learn about matchers', () => {
    test('toBe compares value', () => {
        expect(2 + 2).toBe(4)
    })

    test('.not asserts it to be different', () => {
        const expected = "pear"
        const actual = "apple"
        expect(actual).not.toBe(expected)
    })
    
    it('toEqual compares all properties', () => {
        const can1 = {
            flavor: 'grapefruit',
            ml: 250
        }
        const can2 = {
            flavor: 'grapefruit',
            ml: 250
        }
        
        expect(can1).toEqual(can2)
    })

    it('asserts an error thrown', () => {
        expect(drinkFrappuccino).toThrowError('yuck, this is a sugar drink')
        expect(() => drinkCoffee("frappuccino")).toThrowError('yuck, this is a sugar drink')
    })

    function drinkFrappuccino() {
        drinkCoffee('frappuccino')
    }

    function drinkCoffee(flavor) {
        if(flavor === 'frappuccino') {
            throw new Error('yuck, this is a sugar drink')
        }

        if(flavor === 'kopi' || flavor === 'latte' || flavor === 'espresso') {
            return 'ohhh so nice!'
        }

        throw new Error('what flavor did you had?')
    }

})