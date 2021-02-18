import { PlaintextToHtmlConverter } from './plaintext_to_html_converter'

describe("Text Converter", () => {
  it("should foo", () => {
    const converter = new PlaintextToHtmlConverter()
    const result = converter.toHtml()
    expect(result).toEqual('abc<br />&lt;hello&gt;')
  })
})