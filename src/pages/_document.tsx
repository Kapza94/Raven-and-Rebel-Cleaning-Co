// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16892736573"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-16892736573');
            `,
          }}
        />

        {/* Optional: Google Ads Conversion Event snippet */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': 'AW-16892736573/FqG3CN-c1tcaEL3oivc-',
                'value': 1.0,
                'currency': 'ZAR'
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
