// JavaScript Document
$(function() {
 "use strict";

  function responsive_dropdown () {
    /* ---- For Mobile Menu Dropdown JS Start ---- */
    $("#menu-main span.opener").on("click", function(){
      var menuopener = $(this);
      if (menuopener.hasClass("plus")) {
         
        if (menuopener.parents('.level2').length) {
          menuopener.parent().find('.second-sub-menu').slideDown(700);
        }else{
          menuopener.parent().find('.mobile-sub-menu').slideDown(700);
        }
        menuopener.removeClass('plus');
        menuopener.addClass('minus');
      }
      else
      {
        menuopener.parent().find('.mobile-sub-menu, .second-sub-menu').slideUp();
        menuopener.removeClass('minus');
        menuopener.addClass('plus');
      }
      return false;
    });

    jQuery( ".mobilemenu" ).on("click", function() {
      jQuery( ".mobilemenu-content" ).slideToggle();
      if ($(this).hasClass("openmenu")) {
        $(this).removeClass('openmenu');
        $(this).addClass('closemenu');
      }
      else
      {
        $(this).removeClass('closemenu');
        $(this).addClass('openmenu');
      }
      return false;
    });
    /* ---- For Mobile Menu Dropdown JS End ---- */

    /* ---- For Sidebar JS Start ---- */
    $('.sidebar-box span.opener').on("click", function(){
    
      if ($(this).hasClass("plus")) {
        $(this).parent().find('.sidebar-contant').slideDown();
        $(this).removeClass('plus');
        $(this).addClass('minus');
      }
      else
      {
        $(this).parent().find('.sidebar-contant').slideUp();
        $(this).removeClass('minus');
        $(this).addClass('plus');
      }
      return false;
    });
    /* ---- For Sidebar JS End ---- */

    /* ---- For Footer JS Start ---- */
    $('.footer-static-block span.opener').on("click", function(){
    
      if ($(this).hasClass("plus")) {
        $(this).parent().find('.footer-block-contant').slideDown();
        $(this).removeClass('plus');
        $(this).addClass('minus');
      }
      else
      {
        $(this).parent().find('.footer-block-contant').slideUp();
        $(this).removeClass('minus');
        $(this).addClass('plus');
      }
      return false;
    });
    /* ---- For Footer JS End ---- */

    /* ---- For Category Dropdown JS Start ---- */
    $('.btn-sidebar-menu-dropdown').on("click", function() {
      var sb_block = $('.sidebar-block');
      $('.cat-dropdown').slideToggle();

      if(sb_block.hasClass("open1")){
        sb_block.addClass("close1").removeClass("open1");
      }else{
        sb_block.addClass("open1").removeClass("close1");
      }
      return false;
    });
    /* ---- For Category Dropdown JS End ---- */

    /* ---- For Content Dropdown JS Start ---- */
    $('.content-link').on("click", function() {
      $('.content-dropdown').toggle();
    });
    /* ---- For Content Dropdown JS End ---- */
  }


  /* ----- popup_product Start  ------ */
   function popup_product() {
    $('.popup-with-product').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });
    return false;
  }
  /* ----- popup_product End  ------ */

  /* ------------ Work Zoom JS Start ------------- */
  function work_zoom() {
    $('.zoom-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
    });
    return false;
  }
  /* ------------ Work Zoom JS End ------------- */

  function owlcarousel_slider () {
    /* ------------ OWL Slider Start  ------------- */

    /* ----- blog Start  ------ */
    $('#blog').owlCarousel({
      items: 3,
      navigation: true,
      pagination: false,
      itemsDesktop : [1199, 2],
      itemsDesktopSmall : [991, 2],
      itemsTablet : [767, 1],
      itemsTabletSmall : false,
      itemsMobile : [479, 1]
    });
    /* ----- blog End  ------ */

    /* ----- brand-logo Start  ------ */
    $('#brand-logo').owlCarousel({
      items: 4,
      navigation: true,
      pagination: false,
      itemsDesktop : [1199, 3],
      itemsDesktopSmall : [991, 3],
      itemsTablet : [767, 1],
      itemsTabletSmall : false,
      itemsMobile : [479, 1]
    });
    /* ----- brand-logo End  ------ */

    /* ----- our-team Start  ------ */
    $('.our-team').owlCarousel({
      items: 4,
      navigation: true,
      pagination: false,
      itemsDesktop : [1199, 3],
      itemsDesktopSmall : [991, 3],
      itemsTablet : [767, 2],
      itemsTabletSmall : false,
      itemsMobile : [479, 2]
    });
    /* ----- our-team End  ------ */

    /* ----- our-team Start  ------ */
    $('.pricing-slider').owlCarousel({
      items: 3,
      navigation: true,
      pagination: false,
      itemsDesktop : [1199, 3],
      itemsDesktopSmall : [991, 2],
      itemsTablet : [767, 2],
      itemsTabletSmall : false,
      itemsMobile : [479, 1]
    });
    /* ----- our-team End  ------ */

    /* ---- banner Start ---- */
    $(".main-banner, .client-slider").owlCarousel({
   
      //navigation : true,  Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      autoPlay: false,
      pagination:true,
      singleItem:true,
      navigation:true
    });
    /* ----- banner End  ------ */

    return false;
    /* ------------ OWL Slider End  ------------- */
  }

  function scrolltop_arrow () {
   /* ---- Page Scrollup JS Start ---- */
   //When distance from top = 250px fade button in/out
    var scrollup = $('.scrollup');
    var headertag = $('header');
    var mainfix = $('.main');
    $(window).scroll(function(){
      if ($(this).scrollTop() > 0) {
          scrollup.fadeIn(300);
      } else {
          scrollup.fadeOut(300);
      }

      /* header-fixed JS Start */
      if ($(this).scrollTop() > 0){
         headertag.addClass("header-fixed");
      }
      else{ 
         headertag.removeClass("header-fixed");
      }

      /* main-fixed JS Start */
      if ($(this).scrollTop() > 0){
         mainfix.addClass("main-fixed");
      }
      else{ 
         mainfix.removeClass("main-fixed");
      }
      /* ---- Page Scrollup JS End ---- */
    });
    
    //On click scroll to top of page t = 1000ms
    scrollup.on("click", function(){
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });
  }

  function custom_tab() {
    /* ------------ Account Tab JS Start ------------ */
    $('.account-tab-stap').on('click', 'li', function() {
      $('.account-tab-stap li').removeClass('active');
      $(this).addClass('active');
      
      $(".account-content").fadeOut();
      var currentLiID = $(this).attr('id');
      $("#data-"+currentLiID).fadeIn();
      return false;
    });
    /* ------------ Account Tab JS End ------------ */
  }

  /* Price-range Js Start */
  function price_range () {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 800,
      values: [ 75, 500 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  }
  /* Price-range Js End */

  /*Select Menu Js Start*/
  function option_drop() {
    $( ".option-drop" ).selectmenu();
    return false;
  }
  /*Select Menu Js Ends*/

  /* Product Detail Page Tab JS Start */
  function product_detail_tab () {
    $("#tabs li").on("click", function(e){
      var title = $(e.currentTarget).attr("title");
      $("#tabs li , .tab_content li div").removeClass("selected");
      $(".tab-"+title +", .items-"+title).addClass("selected");
      $("#items").attr("class","tab-"+title);

      return false;
    });
  }
  /* Product Detail Page Tab JS End */

  // Navigation Scroll
  $(window).scroll(function(event) {
    scroll();
  });

  $('.navbar-collapse ul li a').on('click', function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 90}, 1000);
    return false;
  });
  
  // User define function
  function scroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   $(window).scrollTop();
    var rangeTop    =   200;
    var rangeBottom =   500;
    $('.navbar-collapse').find('li.scroll a').each(function(){
      contentTop.push( $( $(this).attr('href') ).offset().top);
      contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
    })
    $.each( contentTop, function(i){
      if ( winTop > contentTop[i] - rangeTop ){
        $('.navbar-collapse li.scroll')
        .removeClass('active')
        .eq(i).addClass('active');      
      }
    })
  };


  /* search open JS Start */
  function search_open () {
    $('li.search-box').on('click', function(){
      $('.sidebar-search-wrap').addClass('open').siblings().removeClass('open');
      return false;
    });
  }
  /* search open JS End */

  /* Search-box-close-button js Start*/
  $('.search-closer').on('click', function() {
    var sidebar = $('.sidebar-navigation');
    var nav_icon = $('.navbar-toggle i');
    if(sidebar.hasClass('open')){
      //sidebar.removeClass('open');
    }else{
      sidebar.addClass('open');
      nav_icon.addClass('fa-search-close');
      nav_icon.removeClass('fa-search-bars');
    }

    $('.sidebar-search-wrap').removeClass('open');
    return false;
  });
  /* Search-box-close-button js End*/

  /* progress_bar JS Start */
  function progress() {
    var $meters = $(".barwrapper > span");
    var $section = $('#progress_bar');
    var $queue = $({});
    function loadDaBars() {
      $meters.each(function() {
        var $el = $(this);
        var origWidth = $el.width();
        $el.width(0);
        $queue.queue(function(next) {
            $el.animate({width: origWidth}, 1200, next);
        });
      });
    }
    return false;
  }
  /* progress_bar JS End */

  /* grid_list_view Tab JS Start */
  function grid_list_view() {
    $('.shorting .view').on('click', '.list-types', function() {
      var prod_list_cls =  '.product-listing';
      if($(this).hasClass("list")){
        $(this).addClass("active");
        $(".shorting .view .list-types.grid").removeClass("active");
        $(prod_list_cls).removeClass("grid-type").addClass("list-type");
        $(prod_list_cls + " .img-col").removeClass("col-12").addClass("col-3");
        $(prod_list_cls + " .detail-col").removeClass("col-12").addClass("col-9");
      }
      if($(this).hasClass("grid")){
        $(this).addClass("active");
        $(".shorting .view .list-types.list").removeClass("active");
        $(prod_list_cls).removeClass("list-type").addClass("grid-type");
        $(prod_list_cls + " .img-col").removeClass("col-3").addClass("col-12");
        $(prod_list_cls + " .detail-col").removeClass("col-9").addClass("col-12");
      }
    });
    return false;
  }
  /* grid_list_view Tab JS End */

  $(document).on("ready", function() {
    owlcarousel_slider(); 
    price_range (); 
    responsive_dropdown();
    product_detail_tab (); 
    scroll();
    custom_tab (); 
    scrolltop_arrow (); 
    popup_product();   
    option_drop(); 
    grid_list_view(); 
    search_open ();
    progress();
    work_zoom();
  });

});

/* click print Button js start */
function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
  return false;
}
/* click print Button js end */

/* Start isotope Portfolio Js */
function portfolio_isotope(){
  if($('.isotope').length > 0){
    // init Isotope
    var $container = $('.isotope').isotope({
      itemSelector: '.grid-item',
      getSortData: {
      }
    });
  }

  // bind filter click
  $('.portfolio-filter').on('click', 'li a', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    $(".portfolio-filter li a ").removeClass('active');
    $( this ).addClass('active');
    $container.isotope({
      filter: filterValue
    });
  });
  return false;
}
/* End isotope Portfolio Js */

$( window ).on( "load", function() {
  // Animate loader off screen 
  $(".se-pre-con").fadeOut("slow");
  portfolio_isotope();
});

  
