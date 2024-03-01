const _siteInfo = () => {
    let headerLogo = `
        <img alt="Logo" src="assets/img/site-img/1695888280-logo_public.png" class="h-20px h-lg-30px app-sidebar-logo-default">
    `;
    $('#kt_logo_header_frontend').html(headerLogo);
    let headerLogoMobile = `<img alt="Logo-mobile" src="assets/img/site-img/1695886700-backend_logo_icon.png" class="h-30px" />`;
    $('#logoMobile a').html(headerLogoMobile);
    $('#footerCopyright').html('Copyright © 2023 Yoga Setiaonce');
}
const _aboutMeHeader = () => {
    let headerContent = ` <!--begin: Pic-->
    <div class="me-7 mb-4">
        <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
            <img src="assets/img/igedeyogasetiawan.jpg" alt="my-foto">
        </div>
    </div>
    <!--end::Pic-->
    <!--begin::Info-->
    <div class="flex-grow-1">
        <!--begin::Title-->
        <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
            <!--begin::User-->
            <div class="d-flex flex-column">
                <!--begin::Name-->
                <div class="d-flex align-items-center mb-2">
                    <a href="javascript:void(0);" class="text-gray-900 text-hover-primary fs-2 fw-bold me-1">GEDE YOGA SETIAWAN</a>
                </div>
                <!--end::Name-->

                <!--begin::Info-->                        
                <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                    <a href="javascript:void(0);" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                        <i class="bi bi-person-circle fs-4 me-1"></i>Web Developer
                    </a>
                    <a href="javascript:void(0);" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                        <i class="bi bi-geo-alt fs-4 me-1"></i>Jakarta Selatan
                    </a>
                    <a href="mailto:gedeyoga1126@gmail.com" class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                        <i class="bi bi-envelope-at fs-4 me-1"></i>gedeyoga1126@gmail.com
                    </a>
                </div>
                <!--end::Info-->
            </div>
            <!--end::User-->
        </div>
        <!--end::Title-->

        <!--begin::Stats-->
        <div class="d-flex flex-wrap flex-stack">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column flex-grow-1 pe-8">
                <div class="overflow-auto pb-5">
                    <div class="col-md-4" >
                        <a href="assets/pdf/c97776da030111cce2ab4bc30fe96d8c-curriculumvitae.pdf" target="_blank" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-inverse" title="Lihat curriculum vitae!">
                            <div class="d-flex align-items-center border border-dashed border-primary rounded  p-5">
                                <!--begin::Item-->
                                <div class="d-flex flex-aligns-center pe-10 pe-lg-20">  
                                    <!--begin::Icon-->                                  
                                    <img alt="" class="w-30px me-3" src="assets/img/pdf.svg">
                                    <!--end::Icon--> 
                                    <!--begin::Info--> 
                                    <div class="ms-1 fw-semibold">
                                        <!--begin::Desc--> 
                                        <span class="fs-6 text-hover-primary fw-bold">Curriculum Vitae</span>
                                        <!--end::Desc--> 
                                        <!--begin::Number--> 
                                        <div class="text-gray-400">1.9mb</div>
                                        <!--end::Number--> 
                                    </div>
                                    <!--begin::Info--> 
                                </div>
                                <!--end::Item-->
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Stats-->
    </div>
    <!--end::Info-->`;
    $('#sectionHeaderAboutMe .body-content').html(headerContent);
    $('#kt_about_me').html(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates nesciunt molestias doloremque tenetur, nobis aliquid expedita molestiae hic asperiores placeat perferendis atque beatae optio, dolorem ad itaque id fugiat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt maxime recusandae ipsam, totam nemo blanditiis? Ea dignissimos quam sit fugit quos reiciendis, obcaecati, minima facilis modi sed totam molestiae dolore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic minus, maxime corrupti, fugiat nihil voluptatem quas nobis, fuga sed rem illo laborum esse reiciendis. Voluptatem sapiente dolores adipisci molestias. <br>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officiis atque repellat quis ipsam. Consequuntur inventore voluptates nisi, quo nulla iusto, culpa, enim quidem quas rem ab eum quia atque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum rem tempora quam quos earum pariatur impedit autem quae iure blanditiis tenetur doloribus a hic, quis magni accusamus libero fugiat aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea officia sapiente, nihil corrupti alias est sunt voluptate tempora fuga provident animi molestias nulla et veniam nemo dolorum distinctio beatae blanditiis.`);
    let contentSkills;
    let rows = [
        {
            'image': 'assets/img/icons/php.png',
            'name': 'PHP'
        },
        {
            'image': 'assets/img/icons/html5.png',
            'name': 'HTML'
        },
        {
            'image': 'assets/img/icons/css.png',
            'name': 'CSS'
        },
        {
            'image': 'assets/img/icons/javascript.png',
            'name': 'JAVASCRIPT'
        },
        {
            'image': 'assets/img/icons/jquery.png',
            'name': 'JQUERY'
        },
        {
            'image': 'assets/img/icons/laravel.png',
            'name': 'LARAVEL'
        },
        {
            'image': 'assets/img/icons/mysql.png',
            'name': 'MYSQL'
        },
        {
            'image': 'assets/img/icons/photoshop.png',
            'name': 'PHOTOSHOP'
        },
        {
            'image': 'assets/img/icons/canva.png',
            'name': 'CANVA'
        },
        {
            'image': 'assets/img/icons/rest-api.png',
            'name': 'REST API'
        },
    ];
    contentSkills = '';
    contentSkills += '<div class="row g-10 mt-2 M">';
    $.each(rows, function(key, row) {
        contentSkills += `<div class="col-md-3">           
        <div class="card h-100 shadow">
            <!--begin::Card body-->
            <div class="card-body d-flex justify-content-center text-center flex-column p-8">
                <!--begin::Name-->
                <a href="javascript:void(0);" class="text-gray-800 text-hover-primary d-flex flex-column">
                    <!--begin::Image-->
                    <div class="symbol symbol-60px mb-5">
                        <img src="`+row.image+`" class="theme-light-show" alt="icons-images">
                        <img src="`+row.image+`" class="theme-dark-show" alt="icons-images">                            
                    </div>
                    <!--end::Image-->
                    <!--begin::Title-->
                    <div class="fs-5 fw-bold mb-2">
                        `+row.name+`           
                    </div>
                    <!--end::Title-->
                </a>
                <!--end::Name-->
            </div>
            <!--end::Card body-->
        </div>
    </div>  `;
    });
    contentSkills += '</div>';
    $('#kt_skills').html(contentSkills);
}
setTimeout(function() {
    _siteInfo(), _aboutMeHeader();
}, 1000);
