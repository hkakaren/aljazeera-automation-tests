const { I } = inject();
const livestreamPage = require('../pages/LivestreamPage');

Given('I am on the AlJazeera live page',async()=>{
  livestreamPage.open();
});

Then('the player should be visible', async()=>{
  livestreamPage.checkPlayerVisible();
});

Then('the Switch Player button should be visible',async()=>{
  livestreamPage.checkSwitchButtonVisible();
});
