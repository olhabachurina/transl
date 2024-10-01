const transliterationMapRuToEn = {
    А: 'A', а: 'a',
    Б: 'B', б: 'b',
    В: 'V', в: 'v',
    Г: 'G', г: 'g',
    Д: 'D', д: 'd',
    Е: 'E', е: 'e',
    Ё: 'Yo', ё: 'yo',
    Ж: 'Zh', ж: 'zh',
    З: 'Z', з: 'z',
    И: 'I', и: 'i',
    Й: 'Y', й: 'y',
    К: 'K', к: 'k',
    Л: 'L', л: 'l',
    М: 'M', м: 'm',
    Н: 'N', н: 'n',
    О: 'O', о: 'o',
    П: 'P', п: 'p',
    Р: 'R', р: 'r',
    С: 'S', с: 's',
    Т: 'T', т: 't',
    У: 'U', у: 'u',
    Ф: 'F', ф: 'f',
    Х: 'Kh', х: 'kh',
    Ц: 'Ts', ц: 'ts',
    Ч: 'Ch', ч: 'ch',
    Ш: 'Sh', ш: 'sh',
    Щ: 'Shch', щ: 'shch',
    Ы: 'Y', ы: 'y',
    Э: 'E', э: 'e',
    Ю: 'Yu', ю: 'yu',
    Я: 'Ya', я: 'ya'
  };
  
  const transliterationMapEnToRu = {
    A: 'А', a: 'а',
    B: 'Б', b: 'б',
    C: 'Ц', c: 'ц',
    D: 'Д', d: 'д',
    E: 'Е', e: 'е',
    F: 'Ф', f: 'ф',
    G: 'Г', g: 'г',
    H: 'Х', h: 'х',
    I: 'И', i: 'и',
    J: 'Й', j: 'й',
    K: 'К', k: 'к',
    L: 'Л', l: 'л',
    M: 'М', m: 'м',
    N: 'Н', n: 'н',
    O: 'О', o: 'о',
    P: 'П', p: 'п',
    Q: 'К', q: 'к',
    R: 'Р', r: 'р',
    S: 'С', s: 'с',
    T: 'Т', t: 'т',
    U: 'У', u: 'у',
    V: 'В', v: 'в',
    W: 'В', w: 'в',
    X: 'Кс', x: 'кс',
    Y: 'Й', y: 'й',
    Z: 'З', z: 'з'
  };
  
 
  export const standardTransliteration = (text, sourceLang, targetLang) => {
    const map = sourceLang === 'ru' && targetLang === 'en'
      ? transliterationMapRuToEn
      : transliterationMapEnToRu;
  
    return text.split('').map(char => map[char] || char).join('');
  };