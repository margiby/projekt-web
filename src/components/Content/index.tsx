import React from "react";
import { FormattedMessage } from "react-intl";

const Content: React.FC = () => (
  <section className="section">
    <div className="container">
      <div
        className="box has-text-centered"
        style={{ backgroundColor: "var(--box-background)" }}
      >
        <p style={{ color: "var(--text-color)" }}>
          <FormattedMessage
            id="content_diagram_placeholder"
            defaultMessage="Hier kommt ein Diagramm hin"
          />
        </p>
      </div>
    </div>
  </section>
);

export default Content;
