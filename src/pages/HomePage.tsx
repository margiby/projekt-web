
import React from 'react';
import { FormattedMessage } from 'react-intl';

const HomePage: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          <FormattedMessage id="homePage_welcome" defaultMessage="Willkommen bei BEST APP" />
        </h1>
        <p>
          <FormattedMessage id="presentation_text" defaultMessage="Platzhalter Text..." />
        </p>
      </div>
    </section>
  );
};

export default HomePage;