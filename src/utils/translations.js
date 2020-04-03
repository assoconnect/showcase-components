/**
 * Returns the translation for given id
 * @param id
 * @param translations
 */
export const formatMessage = (id, translations = []) =>
  translations[id] ? translations[id] : id
