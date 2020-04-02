import translations from '../translations'

/**
 * Returns the translation for given id
 * @param id
 */
export const formatMessage = id => {
  return translations[id] ? translations[id] : id
}
