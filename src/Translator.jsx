import { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Translations from './components/Translations';

const Translator = () => {

  const [definition, setDefinition] = useState('');
  const [searchTerm, setSearchTerm] = useState({
    from: null,
    to: null,
    searchStr: ''
  });

  const fetchDefinition = async (word, from = 'en', to = 'de') => {
    const apiKey = 'dict.1.1.20240610T090637Z.f6d6efe832849511.e996d69148c86f9d5c0b20bb029c2989646ee383';
    try {
      const response = await axios.get(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}&lang=${from}-${to}&text=${word}`);
  
      if (response.status === 200) {
        const data = response.data;
        const definition = data.def[0]|| 'No definition found.';
        setDefinition(definition);
      } else {
        setDefinition('No definition found.');
      }
    } catch (error) {
      console.error('Error fetching definition:', error);
      setDefinition('No definition found.');
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.searchStr) return;
    try {
      await fetchDefinition(searchTerm.searchStr, searchTerm.from, searchTerm.to);
    } catch (error) {
      console.error('Error fetching definition:', error);
      setDefinition('No definition found.');
    }
  };

  return (
    <div>
      <Form searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch}/>      
      <Translations answer={definition} />
    </div>
  );
};

export default Translator;
