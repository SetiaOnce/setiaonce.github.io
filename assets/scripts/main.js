var _portfolio = function() {
    $('html, body').animate({
        scrollTop: $("#sectionPortfolio").offset().top
    }, 1000); 
}

const _siteInfo = () => {
    let headerLogo = `
        <img alt="Logo" src="assets/img/site-img/1695888280-logo_public.png" class="h-20px h-lg-30px app-sidebar-logo-default">
    `;
    $('#kt_logo_header_frontend').html(headerLogo);
    let headerLogoMobile = `<img alt="Logo-mobile" src="assets/img/site-img/1695886700-backend_logo_icon.png" class="h-30px" />`;
    $('#logoMobile a').html(headerLogoMobile);
    $('#footerCopyright').html('Copyright © 2023 Yoga Setiaonce');
}
const _headBanner = () => {
    $('#sectionBanner').html(`<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-2">
        <div class="d-flex flex-row h-300px">
            <div class="d-flex flex-column flex-row-fluid">
                <div class="d-flex flex-row flex-column-fluid">
                    <div class="d-flex flex-row-fluid flex-center align-center align-middle">
                        <div class="sectionText">
                            <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0 me-3">Hallo Semua 👋, saya </h1>
                            <h1 style="font-family: Brush Script MT,cursive; font-size:60px; color:#4682A9;">Yoga Setiaonce</h1>
                            <h1 class="text-gray-500 fs-1 d-block fw-bold">Seorang <span class="fw-bolder" style="color:#4682A9;">Web Developer</span> </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-2 text-center">
        <div class="rounded text-center">
            <img src="assets/img/myfotoprofile.png" alt="" class="rounded-top w-350px" style="height: 350px;" />
        </div>
    </div>`)
}
const _contentPortfolio = () => {
    $('#sectionPortfolio .card-title').html(`<h3 class="card-label fw-bolder text-primary">-- PORTFOLIO --</h3>`)
    $('#sectionPortfolio .loader-portfolio').html(`<h3 class="card-label fw-bolder text-primary">-- PORTFOLIO --</h3>`)
    $('#sectionPortfolio .loader-portfolio').hide(), $('#sectionPortfolio .list-portfolio').show()
    // $('.image-popup').magnificPopup({
    //     type: 'image', closeOnContentClick: true, closeBtnInside: false, fixedContentPos: true,
    //     image: {
    //         verticalFit: true
    //     }
    // });
    $('#sectionPortfolio .list-portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Sedang memuat foto #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">Foto #%curr%</a> tidak dapat dimuat...',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>'+item.el.attr('subtitle')+'</small>';
            }
        }
    });
}
setTimeout(function() {
    _siteInfo(), _headBanner(), _contentPortfolio();
}, 1000);
