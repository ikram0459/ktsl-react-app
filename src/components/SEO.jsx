import { useEffect } from "react";

const SITE_URL = "https://www.khantechservices.online";
const DEFAULT_OG_IMAGE = "https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/07f372733_generated_fb72a2c3.png";

function setMetaTag(attrName, attrValue, content) {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLinkTag(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function SEO({
  title,
  description,
  keywords,
  url = SITE_URL,
  image,
  type = "website",
}) {
  const effectiveImage = image || DEFAULT_OG_IMAGE;

  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaTag("property", "og:title", title);
      setMetaTag("name", "twitter:title", title);
    }

    if (description) {
      setMetaTag("name", "description", description);
      setMetaTag("property", "og:description", description);
      setMetaTag("name", "twitter:description", description);
    }

    if (keywords) {
      setMetaTag("name", "keywords", keywords);
    }

    setMetaTag("name", "robots", "index, follow");
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:site_name", "Khan Tech");
    setMetaTag("property", "og:url", url);
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:url", url);

    if (effectiveImage) {
      setMetaTag("property", "og:image", effectiveImage);
      setMetaTag("property", "og:image:width", "1200");
      setMetaTag("property", "og:image:height", "630");
      setMetaTag("name", "twitter:image", effectiveImage);
    }

    setLinkTag("canonical", url);
  }, [title, description, keywords, url, effectiveImage, type]);

  return null;
}
