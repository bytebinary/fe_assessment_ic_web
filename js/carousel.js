const carousel = () => {
  const bgItems = [
    {
      img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80',
      html: `
        <div class="slide-content">
          <h1 data-value="REDEFINED">REDEFINED</h1>
        </div>`,
    },
    {
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      html: `
        <div class="slide-content">
          <h1 data-value="PIONEER">PIONEER</h1>
        </div>`,
    },
    {
      img: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      html: '',
    },
  ];

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });

  const path = './src/img';
  for (const item of bgItems) {
    swiper.appendSlide([
      `<div class="swiper-slide" style="height:100vh;">
          <div class="slide-bg" style="background: linear-gradient(0deg,
            rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item.img}')"></div>
          ${item.html}
          </div>
        </div>`,
    ]);
  }
}
export default carousel