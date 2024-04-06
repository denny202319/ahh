const params = (new URL(document.location)).searchParams;
const utmSource = params.get('utm_source');
const utmMedium = params.get('utm_medium');
const utmCampaign = params.get('utm_campaign');
const referrer = encodeURIComponent(window.location.href);
const iframes = document.querySelectorAll('iframe[data-test-id="beehiiv-embed"]');

const addParameterToURL = (url, paramName, paramValue) => {
  url += (url.split('?')[1] ? '&':'?') + `${paramName}=${paramValue}`;
  return url;
}

for (let i = 0; i < iframes.length; i++) {
  let newSrcUrl = iframes[i].src

  if (utmSource) {
    newSrcUrl = addParameterToURL(newSrcUrl, 'utm_source', utmSource)
  }

  if (utmMedium) {
    newSrcUrl = addParameterToURL(newSrcUrl, 'utm_medium', utmMedium)
  }

  if (utmCampaign) {
    newSrcUrl = addParameterToURL(newSrcUrl, 'utm_campaign', utmCampaign)
  }

  if (referrer) {
    newSrcUrl = addParameterToURL(newSrcUrl, 'referrer', referrer)
  }

  iframes[i].src = newSrcUrl
}
