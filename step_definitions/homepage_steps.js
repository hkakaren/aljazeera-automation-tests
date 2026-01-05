const { I } = inject();
const homePage = require('../pages/HomePage');

Given('I am on the AlJazeera homepage',async()=>{
  homePage.open();
});

Given('I am viewing the page on desktop', async () => {
  homePage.setDesktopView();
});

Given('I am viewing the page on mobile',async()=>{
  homePage.setMobileView();
});

When('I look for the Most Read section', async()=>{
  I.scrollTo('#most-read-container', 0, -100);
});

When('I count the posts in Most Read section', async function(){
  const count = await homePage.countMostReadPosts();
  this.mostReadPostsCount = count;
});

When('I click on the empty space near the logo',async()=>{
  await homePage.clickEmptySpaceNearLogo();
});

When('I press the TAB key', async () => {
  I.pressKey('Tab');
});

When('I click on {string} link',async(linkText)=>{
  I.click(homePage.skipToMostReadLink);
});

Then('the Most Read section should be visible', async()=>{
  homePage.checkMostReadVisible();
});

Then('the Most Read section should not be visible',async()=>{
  homePage.checkMostReadNotVisible();
});

Then('I should see exactly {int} posts', function(expectedCount){
  const actualCount = this.mostReadPostsCount;
  
  if(actualCount !== expectedCount) {
    throw new Error(
      `Expected ${expectedCount} posts but found ${actualCount} posts`
    );
  }
});

Then('the URL should contain {string}', async(expectedText)=>{
  const currentUrl = await I.grabCurrentUrl();
  
  if(!currentUrl.includes(expectedText)){
    throw new Error(
      `Expected URL to contain "${expectedText}" but got: ${currentUrl}`
    );
  }
});
