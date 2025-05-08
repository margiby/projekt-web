import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { LocaleContextProvider, useLocale } from './hooks/Context';
import { DE } from './hooks/Context/localeConstants'; // default

// Inner component to handle language changes
const AppLanguageView: React.FC = () => {
    const [{ activeLocale }] = useLocale();
    const [messages, setMessages] = useState<{ [key: string]: string } | null>(null);

    //Lazy loading of messages based on the active locale
    useEffect(() => {
        const loadMessages = async () => {
            let loadedMessages;
            if (activeLocale === 'de') {
                loadedMessages = (await import('./messages')).de;
            } else {
                loadedMessages = (await import('./messages')).en;
            }
            setMessages(loadedMessages);
        };
        loadMessages();
    }, [activeLocale]);

    
    if (!messages) {
        return <div>Loading translations...</div>; 
    }

    return (
        <IntlProvider locale={activeLocale} messages={messages} defaultLocale={DE}>
            <Header />
            <main>
                <Content /> 
            </main>
            <Footer />
        </IntlProvider>
    );
};

// The main App component
const App: React.FC = () => {
    return (
        <LocaleContextProvider>
            <AppLanguageView />
        </LocaleContextProvider>
    );
};

export default App;
