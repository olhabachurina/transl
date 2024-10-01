import React, { useState } from 'react';
import InputTextArea from './components/InputTextArea';
import OutputTextArea from './components/OutputTextArea';
import Button from './components/Button';
import { phoneticTransliteration } from './utils/phoneticTransliteration';
import { scientificTransliteration } from './utils/scientificTransliteration';
import { standardTransliteration } from './utils/standardTransliteration';
import './App.css';
function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [history, setHistory] = useState([]); // История транслитераций
  const [sourceLang, setSourceLang] = useState('ru'); // Исходный язык
  const [targetLang, setTargetLang] = useState('en'); // Язык транслитерации
  const [style, setStyle] = useState('standard'); // Стиль транслитерации

  // Обрабатываем транслитерацию на основе выбранного стиля
  const handleTransliterate = () => {
    let transliteratedText = '';

    if (style === 'standard') {
      transliteratedText = standardTransliteration(inputText, sourceLang, targetLang);
    } else if (style === 'phonetic') {
      transliteratedText = phoneticTransliteration(inputText, sourceLang, targetLang);
    } else if (style === 'scientific') {
      transliteratedText = scientificTransliteration(inputText, sourceLang, targetLang);
    }

    setOutputText(transliteratedText);
    setHistory([...history, { input: inputText, output: transliteratedText }]); // Сохраняем в истории
  };

  return (
    <div className="App">
      <h1>Transliteration App</h1>

      {/* Поле для ввода текста */}
      <InputTextArea value={inputText} onChange={setInputText} />

      {/* Выбор исходного языка */}
      <div className="language-selection">
        <label>Исходный язык:</label>
        <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          <option value="ru">Русский</option>
          <option value="en">Английский</option>
        </select>
      </div>

      {/* Выбор целевого языка */}
      <div className="language-selection">
        <label>Целевой язык:</label>
        <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="en">Английский</option>
          <option value="ru">Русский</option>
        </select>
      </div>

      {/* Выбор стиля транслитерации */}
      <div className="style-selection">
        <label>Стиль:</label>
        <select value={style} onChange={(e) => setStyle(e.target.value)}>
          <option value="standard">Стандартный</option>
          <option value="phonetic">Фонетический</option>
          <option value="scientific">Научный</option>
        </select>
      </div>

      {/* Кнопка для выполнения транслитерации */}
      <Button onClick={handleTransliterate} text="Транслитерировать" />

      {/* Поле для вывода транслитерированного текста */}
      <OutputTextArea value={outputText} />

      {/* История транслитераций */}
      <div className="history">
        <h2>История транслитераций:</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              <strong>Исходный текст:</strong> {item.input}<br />
              <strong>Транслитерированный текст:</strong> {item.output}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;