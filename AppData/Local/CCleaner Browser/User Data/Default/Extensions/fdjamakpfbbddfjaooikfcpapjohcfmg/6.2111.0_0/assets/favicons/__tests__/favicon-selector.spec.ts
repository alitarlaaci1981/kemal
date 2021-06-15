import { faviconSelector } from '../favicon-selector';

describe('faviconSelector', () => {
  let darkMode = false;
  const addEventListener = jest.fn();
  beforeEach(() => {
    // Borrowed from https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: darkMode,
        addEventListener,
      })),
    });

    document.head.innerHTML = `
      <link rel="icon" class="light-scheme-favicon" href="favicon-32x32.png">
      <link rel="icon" class="dark-scheme-favicon" href="favicon-32x32-dark.png">
    `;
  });

  it('should register change listener', () => {
    faviconSelector();
    expect(addEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function)
    );
    // There's no need to test addEventListener itself.
  });

  it('should show correct favicon for light mode', () => {
    faviconSelector();
    const elements = Array.from(document.getElementsByTagName('link'));
    expect(elements).toHaveLength(1);
    expect(elements[0].className).toEqual('light-scheme-favicon');
  });

  it('should show correct favicon for dark mode', () => {
    darkMode = true;
    faviconSelector();
    const elements = Array.from(document.getElementsByTagName('link'));
    expect(elements).toHaveLength(1);
    expect(elements[0].className).toEqual('dark-scheme-favicon');
  });
});
