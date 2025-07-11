// src/contexts/MultiLanguageProvider.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for the language
const LanguageContext = createContext();

// MultiLanguageProvider component
export const MultiLanguageProvider = ({ children }) => {
    // Get initial language from localStorage or default to 'en'
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('appLanguage') || 'en';
    });

    // State to hold the currently loaded translations
    const [currentTranslations, setCurrentTranslations] = useState({});
    // State to manage loading status
    const [loading, setLoading] = useState(true);
    // State to store available languages for validation (optional, but good practice)
    const [supportedLanguages, setSupportedLanguages] = useState(['en', 'ru', 'uz']); // Add all your supported languages here

    // Effect to load translations when the language changes
    useEffect(() => {
        const loadTranslations = async () => {
            setLoading(true);
            try {
                // Dynamically import the translation file
                const data = await import(`../locales/${language}.json`);
                setCurrentTranslations(data.default); // .default because it's a JSON module
                localStorage.setItem('appLanguage', language);
            } catch (error) {
                console.error("Error loading translations:", error);
                setCurrentTranslations({});
            } finally {
                setLoading(false);
            }
        };

        loadTranslations();
    }, [language]); // Re-run this effect whenever the 'language' state changes

    // Function to change the language
    const changeLanguage = (newLanguage) => {
        // Validate if the new language is supported before setting
        if (supportedLanguages.includes(newLanguage)) {
            setLanguage(newLanguage);
        } else {
            console.warn(`Language '${newLanguage}' not supported.`);
        }
    };

    // Get current translation texts
    const t = (key) => {
        // Return translation or the key itself if translation or currentTranslations is not loaded
        return currentTranslations[key] || key;
    };

    // Render a loading state or null while translations are being fetched
    if (loading) {
        return <div>Loading translations...</div>; // Or a more sophisticated loading spinner/component
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the language context
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a MultiLanguageProvider');
    }
    return context;
};