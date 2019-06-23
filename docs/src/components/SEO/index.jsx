import React from 'react';
import Helmet from 'react-helmet';
import {
  title,
  favicon,
  logo,
  cover,
  url,
  description,
  social,
  socialLinks,
  contact,
  legalName,
} from '../../../data/config';

const SEO = ({children, location = ''}) => {
  const structuredDataOrganization = `{
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "2017",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"contactType": "customer service"
		}],
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.github}"
		]
    }`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={cover} />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-touch-icon.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:url" content={`${url}${location}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={cover} />
      <meta property="fb:app_id" content={social.facebook} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={cover} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{children}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

export default SEO;
