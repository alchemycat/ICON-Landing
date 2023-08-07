// import fancybox from "./modules/fancybox.js";

document.addEventListener("DOMContentLoaded", () => {

	const burger = document.querySelector(".burger");
    const wrapper = document.querySelector(".header__wrapper");
    const nav = document.querySelector(".header__wrapper-nav");
    const contacts = document.querySelector(".header__wrapper-contacts");
	const overlay = document.querySelector(".overlay");
	const header = document.querySelector(".header");
// 	const intro = document.querySelector(".intro");

// 	const navLinks = document.querySelectorAll('.nav__link');

// 	navLinks.forEach(lnk => {
// 		lnk.addEventListener('click', () => {
// 			try {
// 				if (overlay.classList.contains('active')) {
// 					burger.click();
// 				}
// 			} catch(err) {
// 				console.log(err.message);
// 			}
// 		})
// 	})

	burger.addEventListener("click", toggleBurger);

	function toggleBurger() {
		try {
			if (JSON.parse(burger.getAttribute("aria-expanded"))) {
				overlay.classList.add("active");
				// if (intro) {
					// intro.classList.add("active");
				// }
				burger.classList.add("active");
				wrapper.classList.add("active");
				nav.classList.add("active");
				contacts.classList.add("active");
				header.classList.add("active");
				document.body.style.overflow = "hidden";
			} else {
                overlay.classList.remove("active");
				// if (intro) {
                    // intro.classList.remove("active");
                    // }
                    
                burger.classList.remove("active");
                wrapper.classList.remove("active");
                nav.classList.remove("active");
                contacts.classList.remove("active");
                header.classList.remove("active");
				document.body.style.overflow = "auto";
			}
		} catch {

		}
		
	}


// 	const slider = () => {
// 		try {
// 			new Swiper(".mySwiper", {
// 				slidesPerView: 'auto',
// 				freeMode: true,
// 				spaceBetween: 16,
// 				breakpoints: {
// 				  320: {
// 					slidesPerView: 'auto',
// 					spaceBetween: 12,
// 				  },
// 				  575: {
// 					slidesPerView: 2,
// 					spaceBetween: 12,
// 				  },
// 				  768: {
// 					slidesPerView: 'auto',
// 					spaceBetween: 12,
// 				  },
// 				  992: {
// 					slidesPerView: 4,
// 					spaceBetween: 16,
// 				  }
// 				},
// 			});
	
// 			new Swiper(".atmo__slider", {
// 				navigation: {
// 					nextEl: ".atmo__arrow-next",
// 					prevEl: ".atmo__arrow-prev",
// 				  },
// 			});
// 		} catch {

// 		}
		
// 	}

// 	slider();

// 	const questions = () => {
// 		try {
// 			const e = document.querySelectorAll(".ques__question");
// 			e.forEach((e=>{
// 				e.addEventListener("click", (t=>{
// 					const c = e.querySelector(".ques__caption")
// 						, a = e.querySelector(".ques__top");
// 					e.classList.contains("collapsed") ? (e.classList.remove("active"),
// 					c.classList.remove("active"),
// 					a.classList.remove("active")) : (e.classList.add("active"),
// 					c.classList.add("active"),
// 					a.classList.add("active"))
// 				}
// 				))
// 			}
// 			)),
// 			e[0].click()
// 		} catch {}
// 	}

// 	questions();

// 	const calculator = () => {
// 		try {
// 			const salary = document.querySelector('.calc__salary');
		
// 			let event = new Event("changeValue");
		
// 			document.addEventListener("changeValue", (e) => {
// 				calcSumm();
// 			});
	
// 			calcSumm();
	
// 			function calcSumm() {
// 				const days = document.querySelector('[data-row="days"] .calc__board');
// 				const hours = document.querySelector('[data-row="hours"] .calc__board');
	
	
// 				const daysValue = days.textContent;
// 				const hoursValue = hours.textContent * 1000;
	
// 				let summ = +daysValue * +hoursValue * 4;
	
// 				summ = summ.toLocaleString("ru-RU");
	
// 				salary.textContent = "+ " + summ + "₽";
// 			}
			
// 			const changeCalcValues = (parentSelector, initValue = 4, limits = {low: 4, high: 6}) => {
// 				const wrapper = document.querySelector(parentSelector);
		
// 				const plus = wrapper.querySelector('[data-action="plus"]');
// 				const minus = wrapper.querySelector('[data-action="minus"]');
				
// 				const board = wrapper.querySelector('.calc__board');
			
// 				const { low, high } = limits;
		
// 				board.textContent = initValue;
		
// 				if (initValue === low) {
// 					minus.setAttribute('disabled', true);
// 				}
		
// 				if (initValue === high) {
// 					plus.setAttribute('disabled', true);
// 				}
		
// 				plus.addEventListener('click', () => {
// 					if (initValue < high) {
// 						initValue++;
// 						board.textContent = initValue;
		
// 						if (initValue === high) {
// 							plus.setAttribute('disabled', true);
// 						}
		
// 						if (initValue > low && minus.getAttribute('disabled')) {
// 							minus.removeAttribute('disabled');
// 						}
	
// 						document.dispatchEvent(event);
// 					}
// 				});
		
// 				minus.addEventListener('click', () => {
// 					if (initValue > low) {
// 						initValue--;
// 						board.textContent = initValue;
		
// 						if (initValue === low) {
// 							minus.setAttribute('disabled', true);
// 						}
		
// 						if (initValue < high && plus.getAttribute('disabled')) {
// 							plus.removeAttribute('disabled');
// 						}
	
// 						document.dispatchEvent(event);
// 					}
// 				})
		
// 			}
		
// 			changeCalcValues('[data-row="days"]', 4, {low: 4, high: 6});
// 			changeCalcValues('[data-row="hours"]', 6, {low: 6, high: 8});
// 		} catch {

// 		}
		
// 	}

// 	calculator();

// 	fancybox();

});