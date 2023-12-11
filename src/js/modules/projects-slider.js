import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function projectsSlider(){
    const swiper = new Swiper('.projects-swiper', {
        // Optional parameters
        spaceBetween: 20,
        keyboard: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //   },
      });
}

export default projectsSlider