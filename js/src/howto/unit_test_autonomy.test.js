describe('test suite', () => {
    beforeAll(() => {
        console.log('beforeAll')
    })

    afterAll(() => {
        console.log('afterAll')
    })

    beforeEach(() => {
        console.log('beforeEach')
    })

    afterEach(() => {
        console.log('afterEach')
    })

    test('test case strawberry', () => {
        console.log('in test case strawberry')
        expect(true).toBeTruthy()
    })
    test('test case banana', () => {
        console.log('in test case banana')
        expect(false).toBe(false)
    })

    describe('inner test suite', () => {
        beforeEach(() => {
            console.log('inner beforeEach')
        })

        afterEach(() => {
            console.log('inner afterEach')
        })

        test('inner test case', () => {
            console.log('in inner test case')
            expect(true).toBe(true)
        })
    })

})