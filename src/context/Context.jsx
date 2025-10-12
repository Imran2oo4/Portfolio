import React from 'react';
import MensajeIngles from './../language/en.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {
    const locale = 'en-US';
    const messages = MensajeIngles;

    return (
        <langContext.Provider value={{}}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export {LangProvider, langContext};