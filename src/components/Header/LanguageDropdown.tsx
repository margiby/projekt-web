import React from 'react';
import { useLocale } from "../../hooks/Context";

const LanguageDropdown: React.FC = () => {
    // Hole die aktuelle Sprache und die Funktion zum Ändern aus dem Context
    const [{ activeLocale, de, en }, setLocale] = useLocale();

    const changeLanguageHandler = (e: React.MouseEvent<HTMLButtonElement>, lang: string) => {
        setLocale(lang); // Ruft die Funktion aus dem Context auf, um die Sprache zu ändern
        e.preventDefault();
    };

    return (
        <div className="navbar-item"> 
            <div className="field has-addons"> 
                {[de, en].map((langCode) => (
                    <div className="control" key={langCode}>
                        <button
                            className={`button is-small lang-button ${activeLocale === langCode ? 'is-active-lang' : ''}`}
                            onClick={(e) => changeLanguageHandler(e, langCode)}
                            disabled={activeLocale === langCode} // Deaktiviert den Button der aktiven Sprache
                            type="button"
                        >
                            {langCode.toUpperCase()}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageDropdown;