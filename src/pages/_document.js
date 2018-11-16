import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

/**
 * <Document />
 */
class extends Document {
  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document