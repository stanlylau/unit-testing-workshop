/**
 * Read more at https://jestjs.io/docs/en/mock-functions
 */
describe('learn about types of test doubles', () => {
    let logger

    beforeAll(() => {
        logger = new LoggerStub()
    })
    
    test('<what test double is this?>', () => {
        runSimulation(logger)
    })

    test('<what test double is this?>', () => {
        let fakeCoffeeRepository = new FakeCoffeeRepository()
        expect(fakeCoffeeRepository.queryByType("espresso").length).toBe(2)
    })
    
    it('<what test double is this?>', () => {
        const callback = jest.fn();
        sendEmail("A message", callback)

        expect(callback).toHaveBeenCalledWith({sent: true})
    })

    function sendEmail(message, callback) {
        callback({sent: true})
    }

    class LoggerStub {
        log(message) {}
    }

    function runSimulation(logger) {
        logger.log("Simulation ended.")
    }

    class Coffee {
        constructor(name, roaster, roast) {
            this.name = name
            this.roaster = roaster
            this.roast = roast
          }
    }

    class FakeCoffeeRepository {
        queryByType(roast) {
            if(roast === "espresso") {
                return [new Coffee("The Founder", "ONA", "espresso"),
                new Coffee("Ethiopia Yirgacheffe", "Padre Coffee", "filter")]
            }

            return []
        }
    
    }

})