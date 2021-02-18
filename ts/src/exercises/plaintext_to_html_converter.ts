import notify from './notifier'
import fs from 'fs'
import path from 'path'
class PlaintextToHtmlConverter {
    toHtml() {
        const text = fs.readFileSync(path.join(__dirname, 'sample.txt'), 'utf8')
        const htmlLines = this._basicHtmlEncode(text)
        notify('HTML encoding done.')
        return htmlLines
    }

    _basicHtmlEncode(source: string) {
        const stashNextCharacterAndAdvanceThePointer = () => {
            var c = source.charAt(i)
            i += 1
            return c

        };

        const addANewLine = () => {
            let line: string = convertedLine.join('')
            result.push(line)
            convertedLine = []
        };

        const pushACharacterToTheOutput = () => {
            convertedLine.push(characterToConvert)
        };

        let i = 0
        let result: string[] = []
        let convertedLine: string[] = []
        let characterToConvert = stashNextCharacterAndAdvanceThePointer();
        while (i <= source.length) {

            switch (characterToConvert) {
                case '<':
                    convertedLine.push('&lt;')
                    break
                case '>':
                    convertedLine.push('&gt;')
                    break
                case '&':
                    convertedLine.push('&amp;')
                    break
                case '\n':
                    addANewLine()
                    break;
                default:
                    pushACharacterToTheOutput()
            }

            characterToConvert = stashNextCharacterAndAdvanceThePointer()
        }

        addANewLine();
        let finalResult: string = result.join('<br />')
        return finalResult
    }
}

export { PlaintextToHtmlConverter }