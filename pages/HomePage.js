const { I } = inject();

class HomePage {
  mostReadSection = '.trending-articles';
  mostReadPosts = '#most-read-container article';
  skipToMostReadLink = 'a[href="#most-read-container"]';

  open() {
    I.amOnPage('/');
    I.wait(5);
  }

  checkMostReadVisible(){
    I.seeElement(this.mostReadSection);
  }

  checkMostReadNotVisible() {
    I.dontSeeElement(this.mostReadSection);
  }

  countMostReadPosts(){
    return I.grabNumberOfVisibleElements(this.mostReadPosts);
  }

  setMobileView(){
    I.resizeWindow(375,812);
  }

  setDesktopView() {
    I.resizeWindow(1366, 768);
  }

  // accessibility test - click left of logo to set focus
  async clickEmptySpaceNearLogo(){
    const coords = await I.executeScript(() => {
      const rect = document.querySelector('.site-logo').getBoundingClientRect();
      return { x: rect.left - 50, y: rect.top + (rect.height / 2) };
    });
    
    await I.useWebDriverTo('click at specific coordinates', async ({ browser }) => {
      await browser.performActions([{
        type: 'pointer',
        id: 'mouse',
        parameters: { pointerType: 'mouse' },
        actions: [
          { type: 'pointerMove', duration: 0, origin: 'viewport', x: coords.x, y: coords.y },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerUp', button: 0 }
        ]
      }]);
    });
  }
}

module.exports = new HomePage();
