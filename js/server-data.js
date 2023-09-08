import {renderAnnouncements} from './render.js';
fetch('https://29.javascript.pages.academy/keksobooking/data')
.then((response) => response.json())
.then((announcements) => {
  renderAnnouncements(announcements);
});
