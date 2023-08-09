import fancybox from "./modules/fancybox.js";

document.addEventListener("DOMContentLoaded", () => {

	const burger = document.querySelector(".burger");
    const wrapper = document.querySelector(".header__wrapper");
    const nav = document.querySelector(".header__wrapper-nav");
    const contacts = document.querySelector(".header__wrapper-contacts");
	const overlay = document.querySelector(".overlay");
	const header = document.querySelector(".header");

	const navLinks = document.querySelectorAll('.nav__link');

	navLinks.forEach(lnk => {
		lnk.addEventListener('click', () => {
			try {
				if (overlay.classList.contains('active')) {
					burger.click();
				}
			} catch(err) {
				console.log(err.message);
			}
		})
	})

	burger.addEventListener("click", toggleBurger);

	function toggleBurger() {
		try {
			if (JSON.parse(burger.getAttribute("aria-expanded"))) {
				overlay.classList.add("active");
				burger.classList.add("active");
				wrapper.classList.add("active");
				nav.classList.add("active");
				contacts.classList.add("active");
				header.classList.add("active");
				document.body.style.overflow = "hidden";
			} else {
                overlay.classList.remove("active");
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


	const slider = () => {
		try {	
			new Swiper(".swiper", {
				navigation: {
					nextEl: ".rooms__arrow-next",
					prevEl: ".rooms__arrow-prev",
				  },
				  pagination: {
					el: ".swiper-pagination",
				  },
			});
		} catch(err) {
			console.log(err);
		}
		
	}

	slider();

	const popup = (popupSelector, popupOverlaySelector, popupCloseSelector, timeout) => {
		try {
			const popup = document.querySelector(popupSelector);
			const popupOverlay = document.querySelector(popupOverlaySelector);
			const popupCloseBtn = document.querySelector(popupCloseSelector)
	
			
			const showPopup = (popup, popupOverlay) => {
				if (!getCookie("popup")) {
					console.log(getCookie("popup"));
					popup.classList.add("active");
					popupOverlay.classList.add("active");
					setCookie('popup', 'true', {secure: true, 'max-age': 600});
				}
			}
	
			const closePopup = (popup, popupOverlay, popupCloseBtn) => {
				popupCloseBtn.addEventListener('click', () => {
					popup.classList.remove("active");
					popupOverlay.classList.remove("active");
				})
			}
	
			setTimeout(() => {
				showPopup(popup, popupOverlay);
				closePopup(popup, popupOverlay, popupCloseBtn);
			}, timeout);

			function setCookie(name, value, options = {}) {

				options = {
				  path: '/',
				  // при необходимости добавьте другие значения по умолчанию
				  ...options
				};
			  
				if (options.expires instanceof Date) {
				  options.expires = options.expires.toUTCString();
				}
			  
				let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
			  
				for (let optionKey in options) {
				  updatedCookie += "; " + optionKey;
				  let optionValue = options[optionKey];
				  if (optionValue !== true) {
					updatedCookie += "=" + optionValue;
				  }
				}
			  
				document.cookie = updatedCookie;
			  }

			  function getCookie(name) {
				let matches = document.cookie.match(new RegExp(
				  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
				));
				return matches ? decodeURIComponent(matches[1]) : undefined;
			  }
		} catch(err) {
			console.log(err);
		}

	}

	const timer = () => {
		function updateCountdown(endTime) {
			const now = new Date().getTime();
			const timeRemaining = endTime - now;
		
			if (timeRemaining <= 0) {
				clearInterval(countdownInterval);
				document.querySelector(".hours").textContent = "00";
				document.querySelector(".minutes").textContent = "00";
				document.querySelector(".seconds").textContent = "00";
			} else {
				const hours = String(Math.floor(timeRemaining / (1000 * 60 * 60))).padStart(2, '0');
				const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
				const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0');
			
				document.querySelector(".hours").textContent = hours;
				document.querySelector(".minutes").textContent = minutes;
				document.querySelector(".seconds").textContent = seconds;
			}
		}
	
		const endTime = new Date().getTime() + (5 * 60 * 60 * 1000) + (17 * 60 * 1000) + (15 * 1000);

		const countdownInterval = setInterval(() => updateCountdown(endTime), 1000);
		
		updateCountdown(endTime);
  
	}

	popup(".popup", ".popup__overlay", ".popup__close", 15000);
	timer();
// 	fancybox();

});