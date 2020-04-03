/**
 * Returns the translation for given id
 * @param id
 * @param
 */
export const formatMessage = (id, translations) => {
  return translations[id] ? translations[id] : id
}
