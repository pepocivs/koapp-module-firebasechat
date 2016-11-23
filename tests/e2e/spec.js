describe('koapp-module-firebasechat controller', function() {
  beforeEach(function() {
    browser.driver.manage().window().setSize(400, 666);
    browser.get('http://localhost:9001/#/menu-abcd/koapp-module-firebasechat');
  });

  it('should load module', function() {
    expect(element(by.css('.koapp-Module-Firebasechat'))).toBeDefined();
  });

  it('should load the greeting text', function() {
    expect(element(by.id('hi'))).toBeDefined();
  });

  it('should display the right translation for the greeting text', function() {
    element(by.id('hi')).getText().then(function(text) {
      var hiOptions = ['Hello World!', 'Hola Mundo!'];
      expect(hiOptions).toContain(text);
    });
  });
});
