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
				popup.classList.add("active");
				popupOverlay.classList.add("active");
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
		} catch(err) {
			console.log(err);
		}

	}
	popup(".popup", ".popup__overlay", ".popup__close", 5000);
// 	fancybox();

});