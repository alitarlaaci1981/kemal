/**
 * Initialize and listen on changes to the device's preferred color scheme.
 * This follow similar logic and structure as the website project.
 *
 * Note: This is outside React.
 */
export const faviconSelector = () => {
  const lightSchemeIcons = document.querySelectorAll(
    'link.light-scheme-favicon'
  );
  const darkSchemeIcons = document.querySelectorAll('link.dark-scheme-favicon');

  const darkModeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

  function selectFavicon() {
    if (darkModeMatcher.matches) {
      lightSchemeIcons.forEach((i) => i.remove());
      darkSchemeIcons.forEach((i) => document.head.append(i));
    } else {
      darkSchemeIcons.forEach((i) => i.remove());
      lightSchemeIcons.forEach((i) => document.head.append(i));
    }
  }

  // Some browsers using WebKit, like Safari, are stuck in the past. (as on version 13.0.5)
  // They only have the old `addListener` method on `window.matchMedia`.
  // The specification changed the listeners on this interface, as explained there:
  // https://drafts.csswg.org/cssom-view/#dom-mediaquerylist-addlistener
  // So we detect first the avaibility of the recommended `addEventListener` method.
  // Before falling back to using `addListener`.
  if (darkModeMatcher.addEventListener) {
    darkModeMatcher.addEventListener('change', selectFavicon);
  } else {
    darkModeMatcher.addListener(selectFavicon);
  }

  selectFavicon();
};
