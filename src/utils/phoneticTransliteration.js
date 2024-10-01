export const phoneticTransliteration = (text, sourceLang, targetLang) => {
    if (sourceLang === 'ru' && targetLang === 'en') {
      return text
        .replace(/а/g, 'ah')
        .replace(/б/g, 'b')
        .replace(/в/g, 'v')
        .replace(/г/g, 'g')
        .replace(/д/g, 'd')
        .replace(/е/g, 'ye')
        .replace(/ё/g, 'yo')
        .replace(/ж/g, 'zh')
        .replace(/з/g, 'z')
        .replace(/и/g, 'ee')
        .replace(/й/g, 'y')
        .replace(/к/g, 'k')
        .replace(/л/g, 'l')
        .replace(/м/g, 'm')
        .replace(/н/g, 'n')
        .replace(/о/g, 'o')
        .replace(/п/g, 'p')
        .replace(/р/g, 'r')
        .replace(/с/g, 's')
        .replace(/т/g, 't')
        .replace(/у/g, 'oo')
        .replace(/ф/g, 'f')
        .replace(/х/g, 'kh')
        .replace(/ц/g, 'ts')
        .replace(/ч/g, 'ch')
        .replace(/ш/g, 'sh')
        .replace(/щ/g, 'shch')
        .replace(/ы/g, 'y')
        .replace(/э/g, 'e')
        .replace(/ю/g, 'yu')
        .replace(/я/g, 'ya');
    }
    return text;
  };