const { I } = inject();

class LivestreamPage {
  videoPlayer = '[role="region"][aria-label="Video Player"]';
  switchPlayerButton = '//button[contains(text(), "Switch Player")]';
  videoElement = 'video';
  iframePlayer = 'iframe';

  open() {
    I.amOnPage('/live');
  }

  checkPlayerVisible(){
    try{
      I.waitForElement(this.videoPlayer, 15);
    }catch(e) {
      if (!this.hasVideoElement() && !this.hasIframePlayer()) {
        throw new Error('No player found');
      }
    }
  }

  hasVideoElement(){
    try {
      I.waitForElement(this.videoElement, 15);
      return true;
    }catch(e){
      return false;
    }
  }

  hasIframePlayer() {
    try{
      I.waitForElement(this.iframePlayer,15);
      return true;
    } catch(e) {
      return false;
    }
  }

  checkSwitchButtonVisible(){
    I.waitForElement(this.switchPlayerButton,10);
  }
}

module.exports = new LivestreamPage();
