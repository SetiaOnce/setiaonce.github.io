var _portfolio = function() {
    $('html, body').animate({
        scrollTop: $("#sectionPortfolio").offset().top
    }, 1000); 
}
var _blogs = function() {
    $('html, body').animate({
        scrollTop: $("#sectionBlogs").offset().top
    }, 1000); 
}
var _contact = function() {
    $('html, body').animate({
        scrollTop: $("#sectionContact").offset().top
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
                            <h1 class="text-gray-500 fs-1 d-block fw-bold">Seorang <span class="fw-bolder" style="color:#4682A9;">Developer</span> </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-2 text-center">
        <div class="rounded text-center">
            <img src="assets/img/my_foto.png" alt="" class="rounded-top w-350px" style="height: 400px;" />
        </div>
    </div>`)
}
setTimeout(function() {
    _siteInfo(), _headBanner();
}, 1000);
