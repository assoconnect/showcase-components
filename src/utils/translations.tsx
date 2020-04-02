import translations from '../translations'

/**
 * Returns the translation for given id
 * @param id
 */
export const formatMessage = (id: string) => {
  return translations[id] ? translations[id] : id
}
