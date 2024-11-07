

$(document).ready(function () {

	/*****************Company Section*******************************/

	function HideAllCompanyMnu() {
		$("#ourmantra").hide();
		$("#team").hide();
		$("#accolades").hide();
		$("#jointeam").hide();
	}

	HideAllCompanyMnu();

	function RemoveSelCompanyMnu() {
		$("#mnuourmantra").removeClass('prodsel1');
		$("#mnuteam").removeClass('prodsel1');
		$("#mnuaccolades").removeClass('prodsel1');
		$("#mnujointeam").removeClass('prodsel1');
	}

	$("#mnuourmantra").on("click", function (e) {

		e.preventDefault();
		$("#divCompany").addClass('companyMantra');
		RemoveSelCompanyMnu();
		HideAllCompanyMnu();
		$("#mnuourmantra").addClass('prodsel1');
		$("#ourmantra").show();
		$("#mnuteam").css({ 'color': '#ffffff' });
		$("#mnuaccolades").css({ 'color': '#ffffff' });
		$("#mnuourmantra").css({ 'color': '#ffffff' });
		$("#mnujointeam").css({ 'color': '#ffffff' });
	});

	$("#mnuteam").on("click", function (e) {

		e.preventDefault();
		RemoveSelCompanyMnu();
		$("#divCompany").removeClass('companyMantra');
		HideAllCompanyMnu();
		$("#mnuteam").addClass('prodsel1');
		$("#team").show();
		$("#mnuteam").css({ 'color': '#ffffff' });
		$("#mnuaccolades").css({ 'color': '#383838' });
		$("#mnuourmantra").css({ 'color': '#383838' });
		$("#mnujointeam").css({ 'color': '#383838' });
	});

	$("#mnuaccolades").on("click", function (e) {

		e.preventDefault();
		RemoveSelCompanyMnu();
		$("#divCompany").removeClass('companyMantra');
		HideAllCompanyMnu();
		$("#mnuaccolades").addClass('prodsel1');
		$("#accolades").show();
		$("#mnuteam").css({ 'color': '#383838' });
		$("#mnuaccolades").css({ 'color': '#ffffff' });
		$("#mnuourmantra").css({ 'color': '#383838' });
		$("#mnujointeam").css({ 'color': '#383838' });
	});

	$("#mnujointeam").on("click", function (e) {
		e.preventDefault();
		RemoveSelCompanyMnu();
		$("#divCompany").removeClass('companyMantra');
		HideAllCompanyMnu();
		$("#mnujointeam").addClass('prodsel1');
		$("#jointeam").show();
		$("#mnuteam").css({ 'color': '#383838' });
		$("#mnuaccolades").css({ 'color': '#383838' });
		$("#mnuourmantra").css({ 'color': '#383838' });
		$("#mnujointeam").css({ 'color': '#ffffff' });
	});

	$("#mnuourmantra").trigger("click");

	$("#hiring").on("click", function () {
		$("#s3").trigger("click");
		$("#mnujointeam").trigger("click");
	});

	$("#s3").on('click', function () {
		$("#mnuourmantra").trigger("click");
	});

	/*****************Product Section*******************************/

	function HideAllProductMnu() {
		$("#findnewsanalyticsHead").hide();
		$("#findnewsanalytics").hide();

		$("#findpriceanalyticsHead").hide();
		$("#findpriceanalytics").hide();

		$("#finddeepsearchHead").hide();
		$("#finddeepsearch").hide();
	}

	HideAllProductMnu();

	function RemoveSel() {
		$("#divFNAMenu").removeClass('prodsel1');
		$("#divFPAMenu").removeClass('prodsel1');
		$("#divFDSMenu").removeClass('prodsel1');
	}

	var fnaslider = null;
	var fpaslider = null;
	var fdsslider = null;

	$("#divFNAMenu").on("click", function (e) {
		e.preventDefault();

		RemoveSel();
		HideAllProductMnu();

		if (fnaslider != null)
			fnaslider.destroySlider();

		if (fpaslider != null)
			fpaslider.destroySlider();

		if (fdsslider != null)
			fdsslider.destroySlider();

		fnaslider = $('#findnewsanalytics').bxSlider({
			auto: true,
			autoControls: false,
			mode: 'fade',
			easing: 'easeOutElastic',
			speed: 500
		});

		$("#divFNAMenu").addClass('prodsel1');
		$("#findnewsanalyticsHead").show();
		$("#findnewsanalytics").show();
	});

	$("#divFPAMenu").on("click", function (e) {
		e.preventDefault();

		RemoveSel();
		HideAllProductMnu();

		if (fnaslider != null)
			fnaslider.destroySlider();

		if (fpaslider != null)
			fpaslider.destroySlider();

		if (fdsslider != null)
			fdsslider.destroySlider();

		fpaslider = $("#findpriceanalytics").bxSlider({
			auto: true,
			autoControls: false,
			mode: 'fade',
			easing: 'easeOutElastic',
			speed: 500
		});

		$("#divFPAMenu").addClass('prodsel1');
		$("#findpriceanalyticsHead").show();
		$("#findpriceanalytics").show();
	});

	$("#divFDSMenu").on("click", function (e) {
		e.preventDefault();

		RemoveSel();
		HideAllProductMnu();

		if (fnaslider != null)
			fnaslider.destroySlider();

		if (fpaslider != null)
			fpaslider.destroySlider();

		if (fdsslider != null)
			fdsslider.destroySlider();

		fdsslider = $("#finddeepsearch").bxSlider({
			auto: false,
			autoControls: false,
			mode: 'fade',
			easing: 'easeOutElastic',
			speed: 500,
			pager: false
		});

		$("#divFDSMenu").addClass('prodsel1');
		$("#finddeepsearchHead").show();
		$("#finddeepsearch").show();
	});

	$("#divFNAMenu").trigger("click");

	/*****************Client Section*******************************/

	$("#clientLogos").carouFredSel({
		scroll: {
			duration: 2000,
			timeoutDuration: 3500
		}
	});

	$("#testimonials1").mouseout(function () {
		$("#testimonials1more").show();
		$(this).animate({ height: 55 }, 500);
	}).mouseover(function () {
		$("#testimonials1more").hide();
		$(this).animate({ height: 260 }, 500);
	});

	$("#testimonials1more").mouseover(function () {

		$("#testimonials1").animate({ height: 260 }, 500);
	});

	$("#testimonials3").mouseout(function () {
		$("#testimonials3more").show();
		$(this).animate({ height: 55 }, 500);
	}).mouseover(function () {
		$("#testimonials3more").hide();
		$(this).animate({ height: 260 }, 500);
	});

	$("#testimonials3more").mouseover(function () {
		$("#testimonials3").animate({ height: 260 }, 500);
	});


	/*******************************************************************/

	/**************************News Room Start*****************************************/

	function hideAllNewsRoomMnu() {
		$("#inthenews").hide();
		$("#pressreleases").hide();
		$("#eventsandaction").hide();
	}

	hideAllNewsRoomMnu();

	function removeSelNewsRoomMnu() {
		$("#mnuinthenews").removeClass('prodsel1');
		$("#mnupressrel").removeClass('prodsel1');
		$("#mnuevents").removeClass('prodsel1');
	}

	$("#mnuinthenews").on('click', function (e) {
		e.preventDefault();
		removeSelNewsRoomMnu();
		hideAllNewsRoomMnu();
		$(this).addClass('prodsel1').css({ 'color': '#ffffff' });
		$("#inthenews").show();
		$("#mnupressrel").css({ 'color': '#383838' });
		$("#mnuevents").css({ 'color': '#383838' });
	});

	$("#mnupressrel").on('click', function (e) {
		e.preventDefault();
		removeSelNewsRoomMnu();
		hideAllNewsRoomMnu();
		$(this).addClass('prodsel1').css({ 'color': '#ffffff' });
		$("#pressreleases").show();
		$("#mnuinthenews").css({ 'color': '#383838' });
		$("#mnuevents").css({ 'color': '#383838' });
	});

	$("#mnuevents").on('click', function (e) {
		e.preventDefault();
		removeSelNewsRoomMnu();
		hideAllNewsRoomMnu();
		$(this).addClass('prodsel1').css({ 'color': '#ffffff' });
		$("#eventsandaction").show();
		$("#mnuinthenews").css({ 'color': '#383838' });
		$("#mnupressrel").css({ 'color': '#383838' });
	});

	$("#mnuinthenews").trigger('click');

	function getNewItem(d, id, isLocalResource) {
		
		var lnk = $.trim(d[4]).length > 0 ? '<a href="' + $.trim(d[4]) + '" target="_blank">' : '<a href="#" onclick="return false;">';
		var logo = $.trim(d[0]).length > 0 ? '<img src="' + rootPath + 'Content/images/NewsRoom/' + $.trim(d[0]) + '" width="100px"		/>' : '&nbsp;';
		var title = d[1];
		var newsdt = new Date();
		newsdt.setTime(d[2] * 1000);
		var summary = $.trim(d[3]);

		var str = '';
		str += '<li onClick="openNewsLink(\'' + $.trim(d[4]) + '\','+ isLocalResource +')" class="newswrapper">';
		str += '<div class="news-item">';
		str += '<div class="logo">';
		str += logo;
		str += '</div><div class ="right-part">';
		str += '<div class="news-title">' + title + '</div>';
		str += '<div class="news-date">' + newsdt.format('dd mmm yyyy') + '</div>';
		str += '<div class="news-lines">';
		str += summary + '... <span class="read">' + lnk + 'Read</span></a><img src="' + rootPath + 'Content/images/NewsRoom/arrow-more.png" />';

		if (d[5] !== undefined && d[5].length > 0) {
			var arr = d[5].split(',');
			var caption = d[6].split('|');
			
			var container = $('<div id="img_' + id + '" style="display:none;" />');
			var str1 = '';
			
			for (var i = 0; i < arr.length; i++) {
				var title = '';
				
				if (caption.length > 0 && typeof caption[i] !== 'undefined') {
					title = caption[i];
				}
				
				str1 += '<a href="' + rootPath + 'Content/images/NewsRoom/' + $.trim(arr[i]) + '" rel="lightbox" title="' + title + '" ><img src="' + rootPath + 'Content/images/NewsRoom/' + $.trim(arr[i]) + '" width="60" height="60" /></a>';
			}

			container.html(str1);
			$("body").append(container);
			
			str += '&nbsp;&nbsp;&nbsp;<span  class="read"><a href="#" data-container="img_' + id + '" onclick="loadGallary(this); return false;">View Gallery</a></span>';
		}
		
		
		str += '</div></div>';
		str += '</div>';
		str += '</li>';

		return str;
	}
	
	function loadNews(path, container,isLocalResource) {
		$.getJSON(path).done(function(jarr) {
			var html = [];
			$.each(jarr.reverse(), function (k, v) { html.push(getNewItem(v, k, isLocalResource)); });
			$(container).html(html.join(''));
		});
	}

	loadNews(rootPath + 'Content/data/news.json', '#inthenews ul', false);
	loadNews(rootPath + 'Content/data/pressrelease.json', '#pressreleases ul',true);
	loadNews(rootPath + 'Content/data/events.json', '#eventsandaction ul',true);
	 
	$("#recentBlogposts").rss("http://blog.heckyl.com/feed/", {
		limit: 1,
		entryTemplate: '<div class="blog-wrapper"><div class="blog-title"><a href="{url}" target="_blank">{title}</a></div><span class="blog-lines">{shortBodyPlain}</span><a href="{url}" target="_blank"><span class="read">Read</span><img src="' + rootPath + 'Content/images/NewsRoom/arrow-more.png" /></a></div>'
	}).show();




	/**************************News Room End*****************************************/



	$('#hbs1').show();
	$('#hbs2').hide();
	$('#hbs3').hide();

	setInterval(function () { homeheadheadingdisplay(); }, 10000);

	var nextPos = 2;
	function homeheadheadingdisplay() {

		var prev = ((nextPos - 1) == 0 ? 3 : (nextPos - 1));
		var next = nextPos; // ((nextPos + 1) > 4 ? 1 : nextPos);

		//console.log(prev);
		//console.log(next);


		var prevHomeHead = $('#hbs' + prev);
		var nextHomeHead = $('#hbs' + next);

		prevHomeHead.fadeOut(function () { nextHomeHead.fadeIn(); });

		if ((nextPos) == 3) nextPos = 1;
		else
			nextPos++;

	}

	/*****************Vertical Scroll Init*******************************/
	

	$('.subMenu').smint({
		'scrollSpeed': 1000
	});

	////debugger;
	//$("#inthenews1").mCustomScrollbar({
	//	scrollButtons: { enable: false },
	//	theme: "light-thick"
	//});


	
});


function loadGallary(obj) {
	
	var container = $(obj).data('container');

	var arr = [];
	$.each($("#" + container + " a[rel^='lightbox']"), function() {
		arr.push([$(this).attr('href'), $(this).attr('title')]);
	});
	$.slimbox(arr, 0, {initialWidth:100, initialHeight:100});

	return false;
}

function openNewsLink(link, isLocalResource) {
    if (link) {
        debugger;
        if (link.indexOf('http') > -1) {
            window.open(link, '_blank');
        }
        else {
            window.open(rootPath + link, '_blank');
        }
    }
}