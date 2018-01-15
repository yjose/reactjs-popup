const Prism = require('prismjs')

import PrismDependencies from './PrismDependencies.js'

const loadPrismLanguage = language => {
  const languageDependencies = PrismDependencies.languages
  if (Prism.languages[language]) {
    // Don't load already loaded language
    return
  }

  const languageData = languageDependencies[language]
  if (!languageData) {
    throw new Error(`Prism doesn't support language '${language}'.`)
  }

  if (languageData.option === 'default') {
    // Default language has already been loaded by Prism
    return
  }

  if (languageData.require) {
    // Load the required language first
    if (Array.isArray(languageData.require)) {
      languageData.require.forEach(loadPrismLanguage)
    } else {
      loadPrismLanguage(languageData.require)
    }
  }

  require(`prismjs/components/prism-${language}.js`)
}

export const highlight = (code, language) => {
  loadPrismLanguage(language)
  return Prism.highlight(code, Prism.languages[language])
}
export const loadPrismTheme = theme => {
  const PrismThemes = PrismDependencies.themes
  const PrismTheme = `prism-${theme}`
  const themeData = PrismThemes[PrismTheme]
  if (!themeData) {
    throw new Error(`the ${theme} theme is not exist .`)
  }

  require(`prismjs/themes/${PrismTheme}'.css'`)
}
