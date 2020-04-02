const checkSize = (text, max) => {
  if (text.length < max) return { error: false, response: text }
  else {
    return {
      error: true,
      response: `Error: ${text.length} characters, max length: ${max}`,
    }
  }
}

export { checkSize }
