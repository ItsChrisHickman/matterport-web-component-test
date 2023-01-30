
import '@matterport/webcomponent';

// Import stylesheets
import './style.css';

const viewer = document.querySelector('matterport-viewer');
viewer.addEventListener('mpSdkPlaying', (evt) => {
  const mpSdk = evt.detail.mpSdk;
  mpSdk.Camera.rotate(90, 0);
});
