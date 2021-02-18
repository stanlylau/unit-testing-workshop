/**
 * Read more at https://jestjs.io/docs/en/mock-functions
 */
describe('learn about types of test doubles', () => {
    let logger: LoggerStub

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

    function sendEmail(message: string, callback: any) {
        callback({sent: true})
    }

    class LoggerStub implements Logger {
        log(message: string) {}
    }

    interface Logger {
        log(message: string): void
    }

    function runSimulation(logger: Logger) {
        logger.log("Simulation ended.")
    }

    class Coffee {
        name: string
        roaster: string
        roast: string

        constructor(name: string, roaster: string, roast: string) {
            this.name = name
            this.roaster = roaster
            this.roast = roast
          }
    }

    class FakeCoffeeRepository {
        queryByType(roast: string) {
            if(roast === "espresso") {
                return [new Coffee("The Founder", "ONA", "espresso"),
                new Coffee("Ethiopia Yirgacheffe", "Padre Coffee", "filter")]
            }

            return []
        }
    }
})