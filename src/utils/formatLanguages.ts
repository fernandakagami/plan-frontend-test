export function formatLanguages(languages: string[]) {
  const langArray = Object.values(languages)
  if (langArray.length === 0) return ''
  if (langArray.length === 1) return langArray[0]
  if (langArray.length === 2) return `${langArray[0]} e ${langArray[1]}`

  const last = langArray[langArray.length - 1]
  const initial = langArray.slice(0, -1)
  return `${initial.join(', ')} e ${last}`
}
