import type { Article } from './types';

/**
 * English editorial content — developer-facing guides only.
 * The consumer-facing guides stay fr/ar (the merchant audience); the API
 * integration audience reads English, so these two pages exist in the
 * four site languages under the same slugs (hreflang pairs).
 */
export const GUIDES_EN: Article[] = [
  {
    slug: 'api-facturation-maroc',
    section: 'guides',
    lang: 'en',
    metaTitle: 'Morocco invoicing API: the integrator’s guide (2026)',
    metaDesc:
      'Add compliant Moroccan invoicing (ICE, VAT, continuous numbering) to a SaaS, CRM or website: what the law requires, the technical options compared, and how a dedicated API does it in one HTTP call.',
    keywords:
      'morocco invoicing api, invoicing api morocco, moroccan invoice api, invoice api saas, integrate invoicing morocco, e-invoicing api morocco',
    title: 'Morocco invoicing API: issue compliant invoices from your application',
    intro:
      'Your SaaS, CRM or e-commerce platform serves Moroccan customers, and they need compliant invoices. Building a Moroccan invoicing module yourself is a project of its own — legal mentions, numbering, VAT, tax regimes, upcoming e-invoicing. Here is what the law requires, the technical options that actually exist, and how a dedicated invoicing API reduces the whole thing to one HTTP call.',
    answer:
      'A Morocco invoicing API lets any application (SaaS, CRM, e-commerce, ERP) issue invoices and quotes compliant with the Moroccan tax code — ICE, tax ID, itemised VAT, amount in words, continuous numbering — through a simple HTTP call, without building an invoicing module. The Fatora API is included in every plan, with delivery by WhatsApp, email or QR code.',
    blocks: [
      {
        h: 'Why Moroccan invoicing cannot be improvised',
        p: [
          'A valid Moroccan invoice is not just a PDF with a total. Article 145 of the General Tax Code imposes a precise list of mentions: the issuer’s ICE and tax identifier, professional tax number, the customer’s ICE in B2B, VAT itemised by rate, the amount written out in words, and a continuous chronological numbering sequence with no gaps. An incomplete invoice can be refused by the customer and rejected in a tax audit.',
          'On top of that come the special regimes: an auto-entrepreneur (law 114-13) invoices outside the scope of VAT with a mandatory mention; an exempt company carries a different mention; VAT rates were narrowed to 20% and 10% in 2026. And mandatory e-invoicing (a pre-clearance model) is arriving in waves — every invoice will have to pass through the national platform.',
          'For a software vendor whose core business is not invoicing, keeping all of this current through every finance law is a recurring cost, not a one-off build. It is exactly the kind of building block you delegate.'
        ]
      },
      {
        h: 'The three technical options, compared',
        p: [
          'An integrator who must produce Moroccan invoices from their application has three paths.'
        ],
        table: {
          head: ['Option', 'Initial effort', 'Compliance', 'Maintenance'],
          rows: [
            ['Build your own module (in-house PDF generation)', 'Weeks to months', 'Yours to carry, at every finance law', 'Permanent: rates, mentions, e-invoicing'],
            ['Generic international PDF generator', 'Days', 'None: no ICE, no Moroccan VAT, no legal numbering', 'Low, but the output is not a compliant invoice'],
            ['Moroccan invoicing API (Fatora)', 'One hour — one HTTP call', 'Carried by the API: article 145 mentions, regimes, current rates', 'None on the integrator’s side']
          ]
        },
        note:
          'The often-forgotten point: numbering. A gapless FAT-2026-0001, 0002, 0003 sequence belongs to the merchant, not to your application. A serious multi-tenant API keeps one sequence per account — that is what makes the document legally enforceable.'
      },
      {
        h: 'How the Fatora API works',
        p: [
          'Every Fatora merchant has a personal API key, obtained by writing “api” to their WhatsApp bot. Your application stores that key and issues on their behalf: the invoice comes out in THEIR numbering, with THEIR stamp, THEIR logo and THEIR tax regime — which your code does not even need to know, the API enforces it by itself.',
          'One POST /v1/documents call with the customer and the line items is enough: the API computes VAT, generates the PDF, and delivers it by WhatsApp, email or through a QR code to display or print. Modification happens in free text: your user writes “replace the training with 3 days at 1200 dh” in a text field, and the AI applies the correction on the same invoice number.',
          'The full documentation, with production-tested examples for every endpoint, is on the site’s API page (see the “API” menu). Everything is included in the merchant’s plan, from the free trial — quotes do not even consume the quota.'
        ]
      },
      {
        h: 'Who benefits from integrating an invoicing API',
        p: [
          'The use cases keep coming back to the same profiles:'
        ],
        list: [
          'Moroccan SaaS and CRM vendors: an “Invoice” button in your interface, compliance included, without writing the module.',
          'E-commerce platforms and marketplaces: an automatic invoice with every order, delivered by email or a QR code on the delivery note.',
          'Web agencies: offer compliant invoicing to your merchant clients without developing or maintaining anything.',
          'Vertical ERPs (transport, construction, distribution): your users invoice from the business tool they already have.',
          'Point-of-sale software: receipt + invoice QR code printed together — the customer scans and leaves with their invoice.'
        ]
      },
      {
        h: 'What about mandatory e-invoicing?',
        p: [
          'This is the decisive argument for delegating rather than building. When the national pre-clearance platform activates your customers’ segment, every invoice will have to be transmitted in a structured format and validated before being enforceable. If your application generates its own PDFs, that connection will be your project. If it goes through an invoicing API, the API provider connects — once, for all its integrators.',
          'Issuing structured, complete, properly numbered documents through an API today is precisely the state you want to be in on the day the switch arrives.'
        ]
      }
    ],
    faq: [
      {
        q: 'How much does integrating the Fatora API cost?',
        a: 'Nothing for the integrator. The API is included in every Fatora plan, free trial included. Each merchant pays their own subscription (from 30 MAD/month) and API invoices count in their quota; quotes are free and unlimited.'
      },
      {
        q: 'Does my application have to handle VAT rates and tax regimes?',
        a: 'No. The merchant’s tax regime (normal, auto-entrepreneur, exempt) is stored on their Fatora account and enforced by the API: an auto-entrepreneur will always get invoices without VAT and with the legal mention, whatever your application sends. You can still set a rate per line if needed.'
      },
      {
        q: 'How does the end customer receive the invoice?',
        a: 'Three channels, combinable: WhatsApp (the PDF lands in their conversation), email (a message with the invoice attached), or QR code (every document exposes a PNG image to display at the counter or print — the customer scans and downloads). A lost document is resent in one call.'
      },
      {
        q: 'Does it work with a foreign product that has nothing Moroccan in it?',
        a: 'Yes — that is the typical use case: the foreign software keeps its business logic and calls the API when invoicing a Moroccan customer. All the local compliance — mentions, numbering, VAT, document language — is carried by the API.'
      }
    ],
    related: ['generer-facture-pdf-api'],
    updated: '2026-08-15',
    readMin: 8
  },

  {
    slug: 'generer-facture-pdf-api',
    section: 'guides',
    lang: 'en',
    metaTitle: 'Generate an invoice PDF via API: Morocco tutorial 2026',
    metaDesc:
      'Generate a compliant invoice PDF through one HTTP call: get the key, issue the document, handle VAT and tax-inclusive amounts, deliver by WhatsApp, email or QR code. Step-by-step, with production-tested examples.',
    keywords:
      'generate invoice pdf api, invoice pdf api morocco, create invoice api, automatic invoice api, quote api morocco',
    title: 'Generate an invoice PDF via API: the step-by-step tutorial',
    intro:
      'You want one click in your application to produce a real Moroccan invoice — a compliant, numbered, stamped PDF — and to have it reach the customer. Here is the complete journey with the Fatora API, from the first call to delivery, exactly as it runs in production.',
    answer:
      'To generate an invoice PDF via API in Morocco: obtain the merchant’s API key (they write “api” to their Fatora WhatsApp bot), then POST to bot.swiviq.com/v1/documents with the customer and the line items. The API computes VAT, generates a compliant PDF numbered in the merchant’s sequence, and delivers it by WhatsApp, email or QR code.',
    blocks: [
      {
        h: 'Step 1 — the API key, with no developer signup',
        p: [
          'There is no developer console and no manual approval. The merchant opens their Fatora-Bot WhatsApp conversation and writes “api”: the bot replies with their personal key, in the fk_ format followed by 40 characters. That is the key your application stores and passes in the Authorization: Bearer header.',
          'The key is specific to each merchant: it issues in THEIR numbering and only sees THEIR documents. “api reset” rotates it at any time — the old one is revoked immediately. A GET /v1/account is the simplest way to check that a key pasted by the user is valid: it returns the company profile, the plan and the remaining quota.'
        ]
      },
      {
        h: 'Step 2 — issue the document',
        p: [
          'A single call: POST /v1/documents, with the customer’s name (and their ICE in B2B), then the lines — description, quantity, unit price. The API computes VAT line by line, applies the merchant’s tax regime, generates the PDF with logo and stamp, and answers 201 with the assigned number, the net/VAT/gross totals, the PDF link and a QR code URL.',
          'Two options change everyday life. "type": "quote" issues a quote (numbered DEV-, valid 30 days, outside the quota) instead of an invoice. "priceIsTtc": true tells the API your amounts are tax-inclusive: it rebuilds the net base itself — essential when your selling prices are displayed with tax.',
          'To correct an already-issued document, there is no update schema to learn: the modification endpoint accepts a free-text instruction (“replace the training with 3 days at 1200 dh per day”) and applies it on the same number, PDF regenerated, totals recomputed.'
        ],
        note:
          'Numbering stays continuous: modifying never creates a gap in the sequence, and cancelling goes through a credit note — as Moroccan regulation requires.'
      },
      {
        h: 'Step 3 — deliver the invoice to the customer',
        p: [
          'Generating the PDF is pointless if the customer never receives it. Three channels are available, at creation ("sendToPhone" and "sendToEmail" fields) or afterwards through the send endpoint:'
        ],
        list: [
          'WhatsApp: the PDF lands in the customer’s conversation, in the merchant’s name.',
          'Email: a polished message with the invoice attached.',
          'QR code: every document exposes a public PNG image — display it at the counter, print it on the receipt, the customer scans and downloads their invoice.'
        ]
      },
      {
        h: 'The errors your code should handle',
        p: [
          'The API always returns a JSON with two fields: "error" (a stable machine code) and "message" (an explanation displayable as-is). Four cases deserve specific handling in your UI: 402 quota reached (the response carries used and limit — display them, the merchant upgrades in two WhatsApp messages), 401 invalid key (often a key rotated by “api reset” — ask for the new one), 422 instruction not understood (offer to rephrase, nothing was modified), and 429 beyond 60 requests per minute (queue and retry).',
          'The full list of codes, each with a sample response, is on the site’s API page — every example there was replayed against the production API.'
        ]
      }
    ],
    faq: [
      {
        q: 'Do I need a developer account or an approval to use the API?',
        a: 'No. The key is obtained by writing “api” to the WhatsApp bot of the Fatora account concerned, in seconds. There is no console, no contract, no fee: the API is included in every plan, free trial included.'
      },
      {
        q: 'Is the generated PDF really audit-proof?',
        a: 'The PDF carries the mentions of article 145 of the tax code: ICE, tax identifier, professional tax, itemised VAT, amount in words, continuous numbering, and the regime mentions (auto-entrepreneur, exempt) where they apply. The merchant’s stamp and logo are applied automatically.'
      },
      {
        q: 'Can I issue quotes and convert them into invoices?',
        a: 'Yes. "type": "quote" issues a DEV-numbered quote valid 30 days, free and outside the quota. Conversion happens through the free-text instruction (“turn quote DEV-2026-0012 into an invoice”) — the invoice takes a normal FAT- number.'
      },
      {
        q: 'How do I test without polluting the merchant’s numbering?',
        a: 'Issue quotes during your tests: they are free, unlimited and do not touch the invoice sequence. Keep real invoices for production — every issued invoice enters the legal numbering and is cancelled by credit note, not by deletion.'
      }
    ],
    related: ['api-facturation-maroc'],
    updated: '2026-08-15',
    readMin: 6
  }
];
