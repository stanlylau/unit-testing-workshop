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

    _basicHtmlEncode(source) {
        const stashNextCharacterAndAdvanceThePointer = () => {
            var c = source.charAt(i)
            i += 1
            return c

        };

        const addANewLine = () => {
            convertedLine = convertedLine.join('')
            result.push(convertedLine)
            convertedLine = []
        };

        const pushACharacterToTheOutput = () => {
            convertedLine.push(characterToConvert)
        };

        let i = 0
        let result = []
        let convertedLine = []
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
        result = result.join('<br />')
        return result
    }
}

export { PlaintextToHtmlConverter }