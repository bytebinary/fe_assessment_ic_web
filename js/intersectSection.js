import { CountUp } from 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.4.2/countUp.min.js';
const countUp = () => {
  const counters = document.querySelectorAll('.count-up');
  const options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  };

  counters.forEach((item) => {
    const value = item.dataset.value;
    const counter = new CountUp(item, value, options);
    counter.start();
  });
};
const intersectSection = () => {
  // intersection observer
  const onIntersection = (entries, observer) => {
    for (const { isIntersecting, target } of entries) {
      if (isIntersecting) {
        countUp();
        observer.unobserve(target);
      }
    }
  };

  const options = {
    root: null,
    rootMargin: '50px 0px',
    threshold: [0],
  };

  const section = document.getElementById('intersect-observe');
  const observer = new IntersectionObserver(onIntersection, options);

  observer.observe(section);
}
export default intersectSection