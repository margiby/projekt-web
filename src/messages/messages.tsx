
interface LanguageObj {
    [key: string]: string;
}

const lang = {
    // Header & Navigation
    app_title: ["BEST APP", "BEST APP"], // Der Haupttitel und Home-Link
    nav_upload: ["Upload", "Upload"], 
    nav_api: ["API", "API"],              

    // Seitenspezifische Texte
    homePage_welcome: ["Willkommen bei BEST APP", "Welcome to BEST APP"],
    uploadPage_title: ["Datei-Upload", "File Upload"], 
    apiPage_title: ["API Dokumentation", "API Documentation"],

    // Schlüssel für Content.tsx
    content_diagram_placeholder: ["Hier kommt ein Diagramm hin", "A diagram will be displayed here"],

    // Andere Texte.  Diese behalte ich als Beispiel für andere mögliche Texte 
    dbfz_header: ["Startseite des DBFZ", "DBFZ Homepage"], 
    presentation_text: [
        "Im DatenLabor finden Sie eine Auswahl von frei zugänglichen Forschungsdaten aus dem Themenfeld der Bioökonomie.",
        "In the DataLab, you find a selection of freely accessible research data from the field of the bioeconomy.",
    ],
    // ... Weitere Schlüssel in Zukunft
};

const de: LanguageObj = {};
const en: LanguageObj = {};

Object.entries(lang).forEach(([key, val]) => {
    de[key] = val[0];
    en[key] = val[1];
});

export { de, en };