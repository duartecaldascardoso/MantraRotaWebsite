let currentLanguage = 'portuguese'; 

const translations = {
    english: null,
    portuguese: null
};

async function loadTranslations(language) {
    if (translations[language]) {
        return Promise.resolve(translations[language]);
    }

    try {
        const response = await fetch(`/src/components/language/${language}.json`);
        const data = await response.json();
        translations[language] = data;
        return data;
    } catch (error) {
        console.error(`Error loading translations for ${language}:`, error);
        return {};
    }
}

function translate(key) {
    console.log(`Translating key: ${key}`);
    console.log(`Current Language: ${currentLanguage}`);
    console.log(`Translations:`, translations[currentLanguage]);
    return translations[currentLanguage]?.[key] ?? key;
}

function setLanguage(language) {
    currentLanguage = language;
    return loadTranslations(language);
}

export default {
    translate,
    setLanguage
};
