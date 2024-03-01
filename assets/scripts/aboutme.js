const _siteInfo = () => {
    let headerLogo = `
        <img alt="Logo" src="assets/img/site-img/1695888280-logo_public.png" class="h-20px h-lg-30px app-sidebar-logo-default">
    `;
    $('#kt_logo_header_frontend').html(headerLogo);
    let headerLogoMobile = `<img alt="Logo-mobile" src="assets/img/site-img/1695886700-backend_logo_icon.png" class="h-30px" />`;
    $('#logoMobile a').html(headerLogoMobile);
    $('#footerCopyright').html('Copyright © 2023 Yoga Setiaonce');
}
setTimeout(function() {
    _siteInfo();
}, 1000);
