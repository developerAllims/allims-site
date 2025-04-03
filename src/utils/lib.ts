/* eslint-disable @typescript-eslint/no-explicit-any */
interface ReplaceTemplate {
  template: string
  config: any
}

export const replaceTemplate = ({ template = '', config }: ReplaceTemplate) => {
  const props = Object.keys(config) || []
  let text = template
  for (const prop of props) {
    const value = config[prop] || ''
    text = text.replace(prop, value)
  }
  return text
}
