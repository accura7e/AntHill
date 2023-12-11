import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function teamSlider(){
    const swiper = new Swiper('.team-swiper', {
        // Optional parameters
        spaceBetween: 20,
        keyboard: true,
        grabCursor: true,
      });
}

export default teamSlider