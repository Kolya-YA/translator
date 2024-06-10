import { useState } from 'react'
const langs = [
    "be-be",
    "be-ru",
    "bg-ru",
    "cs-cs",
    "cs-en",
    "cs-ru",
    "da-en",
    "da-ru",
    "de-de",
    "de-en",
    "de-ru",
    "de-tr",
    "el-en",
    "el-ru",
    "en-cs",
    "en-da",
    "en-de",
    "en-el",
    "en-en",
    "en-es",
    "en-et",
    "en-fi",
    "en-fr",
    "en-it",
    "en-lt",
    "en-lv",
    "en-nl",
    "en-no",
    "en-pt",
    "en-ru",
    "en-sk",
    "en-sv",
    "en-tr",
    "en-uk",
    "es-en",
    "es-es",
    "es-ru",
    "et-en",
    "et-ru",
    "fi-en",
    "fi-ru",
    "fi-fi",
    "fr-fr",
    "fr-en",
    "fr-ru",
    "hu-hu",
    "hu-ru",
    "it-en",
    "it-it",
    "it-ru",
    "lt-en",
    "lt-lt",
    "lt-ru",
    "lv-en",
    "lv-ru",
    "mhr-ru",
    "mrj-ru",
    "nl-en",
    "nl-ru",
    "no-en",
    "no-ru",
    "pl-ru",
    "pt-en",
    "pt-ru",
    "ru-be",
    "ru-bg",
    "ru-cs",
    "ru-da",
    "ru-de",
    "ru-el",
    "ru-en",
    "ru-es",
    "ru-et",
    "ru-fi",
    "ru-fr",
    "ru-hu",
    "ru-it",
    "ru-lt",
    "ru-lv",
    "ru-mhr",
    "ru-mrj",
    "ru-nl",
    "ru-no",
    "ru-pl",
    "ru-pt",
    "ru-ru",
    "ru-sk",
    "ru-sv",
    "ru-tr",
    "ru-tt",
    "ru-uk",
    "ru-zh",
    "sk-en",
    "sk-ru",
    "sv-en",
    "sv-ru",
    "tr-de",
    "tr-en",
    "tr-ru",
    "tt-ru",
    "uk-en",
    "uk-ru",
    "uk-uk",
    "zh-ru",
    "emj-ru",
    "emj-en",
    "emj-fr",
    "emj-es",
    "emj-tr",
    "emj-it",
    "emj-pt"
]

const langsObj = langs.reduce((langAcc, l) => {
    const [fromLang, toLang] = l.split('-')
    if (Object.hasOwn(langAcc, fromLang)) {
        langAcc[fromLang].push(toLang)
    } else {
        langAcc[fromLang] = [toLang]   
    }
    return langAcc
}, {})

const Form = ({ searchTerm, setSearchTerm, handleSearch }) => {

    const [toLangs, setToLangs] = useState([])

    const handleInput = (e) => {
        setSearchTerm((prev) => ({
            ...prev,
            searchStr: e.target.value
        }))
    }

    const handleFromLang = (e) => {
        setToLangs(langsObj[e.target.value])
        setSearchTerm((prev) => ({
            ...prev,
            from: e.target.value
        }))
    }
    const handleToLang = (e) => {
        setSearchTerm((prev) => ({
            ...prev,
            to: e.target.value
        }))
    }

    return (
        <form className='grid gap-2' onSubmit={handleSearch}>
            <div className='grid md:grid-cols-2 gap-2'>
                <label className='grid gap-2'>From:
                    <select name="fromLang" onChange={handleFromLang} className='px-4 py-2 border border-gray-300 rounded-md'>
                        <option value="">-- Select language --</option>
                        {
                            Object.keys(langsObj).map(fLang => (
                                <option key={fLang} value={fLang}>{fLang}</option>
                            ))
                        }
                    </select>
                </label>
                <label className='grid gap-2'>To:
                    <select name="fromLang" onChange={handleToLang} className='px-4 py-2 border border-gray-300 rounded-md'>
                        <option value="">-- Select language --</option>
                        {
                            toLangs.map(toLang => (
                                <option key={toLang} value={toLang}>{toLang}</option>
                            ))
                        }
                    </select>
                </label>
            </div>
            <label className='grid gap-2'>
                <input
                    type="text"
                    value={searchTerm.searchStr}
                    onChange={handleInput}
                    placeholder="Search for a word..."
                    className='px-4 py-2 border border-gray-300 rounded-md'
                />
            </label>
            <button className='border border-gray-300 rounded-md bg-sky-800 text-white px-4 py-2'>Translate</button>
        </form>
    )
}

export default Form