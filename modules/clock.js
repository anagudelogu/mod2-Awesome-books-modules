import { DateTime } from './luxon.js';

const DATE = document.querySelector('.date');

const CLOCK = () => {
  const THE_DATE = DateTime.now().toUTC().minus({ hours: 6 });
  DATE.innerHTML = THE_DATE.toLocaleString(DateTime.DATETIME_MED);
};

setInterval(CLOCK, 1000);

export default CLOCK;
