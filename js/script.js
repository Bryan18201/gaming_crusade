 //Codigo menu Comienzo//
const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".lista-menu");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      menu.classList.add("active");
      menuBtn.classList.add("hide");
      cancelBtn.classList.add("show");
      body.classList.add("disabledScroll");
    }
    cancelBtn.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
    }

    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }
     //Codigo menu Final//


        //Codigo login Comienzo//
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
    signupBtn.onclick = (()=>{
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    });
    loginBtn.onclick = (()=>{
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    });
    signupLink.onclick = (()=>{
      signupBtn.click();
      return false;
    });
    //Codigo login Final//

    //Responsive menu//
    const responsive = {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        560: {
            items: 2
        },
        960: {
            items: 3
        }
    }
    /**Comienzo menu responsive */
    $(document).ready(function () {
    
        $nav = $('.nav');
        $toggleCollapse = $('.toggle-collapse');
    
        /** Click para abrir el menu */
        $toggleCollapse.click(function () {
            $nav.toggleClass('collapse');
        })
    
        // blog
        $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 3000,
            dots: false,
            nav: true,
            navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
            responsive: responsive
        });
    
    
        // click para abrir arriba
        $('.move-up span').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        })
    
       
        AOS.init();
    
    });
    /**Comienzo menu responsive */