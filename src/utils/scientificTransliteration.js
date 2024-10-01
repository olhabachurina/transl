export const scientificTransliteration = (text, sourceLang, targetLang) => {
  if (sourceLang === 'ru' && targetLang === 'en') {
    return text
      .replace(/а/g, 'a')
      .replace(/б/g, 'b')
      .replace(/в/g, 'v')
      .replace(/г/g, 'g')
      .replace(/д/g, 'd')
      .replace(/е/g, 'e')
      .replace(/ё/g, 'ë')
      .replace(/ж/g, 'ž')
      .replace(/з/g, 'z')
      .replace(/и/g, 'i')
      .replace(/й/g, 'j')
      .replace(/к/g, 'k')
      .replace(/л/g, 'l')
      .replace(/м/g, 'm')
      .replace(/н/g, 'n')
      .replace(/о/g, 'o')
      .replace(/п/g, 'p')
      .replace(/р/g, 'r')
      .replace(/с/g, 's')
      .replace(/т/g, 't')
      .replace(/у/g, 'u')
      .replace(/ф/g, 'f')
      .replace(/х/g, 'x')
      .replace(/ц/g, 'c')
      .replace(/ч/g, 'č')
      .replace(/ш/g, 'š')
      .replace(/щ/g, 'šč')
      .replace(/ы/g, 'y')
      .replace(/э/g, 'è')
      .replace(/ю/g, 'ju')
      .replace(/я/g, 'ja');
  }
  return text;
};