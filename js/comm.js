var Marke = {
	//初始化执行一次
	init: function() {
		//初始化swiper
			var g_Swiper = new Swiper('.g-swiper-container', {
				direction: 'vertical',
				initialSlide :0,
							onSlideChangeStart: function(swiper) {
				$(".nav-list li").eq(swiper.activeIndex).addClass("on").siblings().removeClass("on");
//				$(".m-container").removeClass("animaiton");
//				$(".m-container").eq(swiper.activeIndex).addClass("animaiton");
			}
			});
			var startScroll, touchStart, touchCurrent;
			g_Swiper.slides.on('touchstart', function(e) {
				startScroll = this.scrollTop;
				touchStart = e.targetTouches[0].pageY;
				
			}, true);
			g_Swiper.slides.on('touchmove', function(e) {
				touchCurrent = e.targetTouches[0].pageY;
				var touchesDiff = touchCurrent - touchStart;
				var slide = this;
				var onlyScrolling =
					(slide.scrollHeight > slide.offsetHeight) &&
					(
						(touchesDiff < 0 && startScroll === 0) ||
						(touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight)) ||
						(startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight))
					);
				if(onlyScrolling) {

					e.stopPropagation();
				}

			}, true);
			
		//组织架构
		var organization_Swiper = new Swiper('.organization-swiper', {
			mode: 'horizontal',
			paginationClickable: true,
			slidesPerView: 1,
			pagination : '.swiper-pagination',
			loop:true

		})	
		//项目
		var paroject_Swiper = new Swiper('.paroject-swiper', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 10,
        
   		 });
   		 		//合伙人
		var partners_Swiper = new Swiper('.partners-swiper', {
			mode: 'horizontal',
			paginationClickable: true,
			slidesPerView: "auto",
			loop:true

		})
				//新闻
		var news_Swiper = new Swiper('.news-swiper', {
			mode: 'horizontal',
			slidesPerView: "auto",

			
			loop: true

		})
   		//项目信息
		var projects_info = [{
				name: '魔笛',
				img_src: 'ossweb-img/logo_modi.png',
				title: '全球首款区块链移动MI-FI',
				content: '魔笛是解决传统矿机存在的耗电大、无法移动、收益不明确、无法随时随地联接网络等问题的综合解决方案服务商。魔笛开发一系列带宽类矿机，体验「购买不等于消费，拥有等于赚钱」的消费方式。同时通过引入广告植入、商城购物等机制为持有者创造多重收益。'
			},
			{
				name: '链恋',
				img_src: 'ossweb-img/logo_onlylove.png',
				title: '全球首款爱情上链应用',
				content: '链恋是一个存储爱的链上应用，一个不为物质，只为情怀而生的区块链网络应用。通过区块链特性中“不可篡改”及“可追溯”及“智能合约”的特性，让恋人双方通过自主意愿将爱的存证在区块链公链上运用智能合约进行登记，也相对为自己提供一份爱的保障。'
			},
			{
				name: '神链',
				img_src: 'ossweb-img/logo_ilampchain.png',
				title: '区块链分布式数字资产发布系统',
				content: '神链（ILAB）致力于开发基于区块链的运用于各应用程序上等值兑换的数字资产协议，通过价值传输协议来 实现点对点的价值转移，同时依据此协议的交互对接，构建一个支持多应用之间共识的去中心化的合约生态协议层，并产生其平台权益价值数字资产ILC。'
			},
			{
				name: '链上书',
				img_src: 'ossweb-img/logo_linkword.png',
				title: '全球首款EOS DAPP',
				content: 'Linkword是一款基于EOS主链研发的文章集体创作轻应用,是基于区块链Token经济的内容创作平台，让内容创作者继续自己家热爱的事情，通过粉丝直接获取收益，并通过投资者实现超高收益的快速变现平台。'
			},
			{
				name: '链报',
				img_src: 'ossweb-img/logo_chainchoi.png',
				title: '致力为区块链行业正能量发声的业内专业媒体',
				content: '为宣导区块链先行者发声，报道区块链行业热闻，以客观事实角度对待每一位为区块链贡献力量的人物及项目。公平公正公开是链报的核心竞争力及价值观。'
			},
			{
				name: 'iApp Store',
				img_src: 'ossweb-img/logo_iappstore.png',
				title: '成为全球最大的去中心化应用聚合商店是iappstore团队的信念',
				content: '去中心化的软体应用将是未来用户最向往及使用的软体之一，其体现了公平公正及分权的机制。聚合全球所有的去中心化应用商店，将为区块链行业推动起到积极的作用，也为全球海量用户提供了便捷的下载及评估渠道。'
			},
			{
				name: '币领数字资产交易所',
				img_src: 'ossweb-img/logo_tecx.png',
				title: '南半球最大流量及交易的合规化兑换中心',
				content: '全球创新型数字资产交易中心，总部位于澳大利亚悉尼，获得澳洲合规牌照授权。通过基金会社区共治化及新型交易模式，将集中的权益分化给社区每一位参与者的方式获得数百万用户拥趸。不同于现有的其他交易平台，其理念是分权、共治。'
			},
			{
				name: '土豆饭',
				img_src: 'ossweb-img/logo_todofan.png',
				title: '为每个人提供价值IPO的途径',
				content: 'TODOFAN是基于区块链特性的一套以经济激励个体展示的机制。通过区块链特性及加密算法实现的合理经济激励生态体系能刺激和合理的促进个体价值化平台的生长。每个个体独立社区里，所有的小生态管理与决策中，只有持有其社区权益证明者有权利进行投票。合理的生态模型，每个社区成员将被鼓励长期持有独立的TOKEN，将使其TOKEN长期价值最大化。'
			},
			{
				name: '链社团',
				img_src: 'ossweb-img/logo_league.png',
				title: '为千万级区块链爱好者服务的社团',
				content: '在区块链国家联合社区BlockChainUnited的帮助下，链社团将为国际及国内区块链进行合理的普及及宣导。致力打造千万级受众的社群运营，提供从教育、服务、项目支持等正能量的帮助，杜绝传销、空气币的蔓延，帮助区块链行业的良性发展。'
			},
		]
		//项目信息点击切换信息
		$(".projects-list a").click(function() {
			var index = $(this).parent().index();
			$(".projects-list a").removeClass("on");
			$(this).addClass("on");
			$(".project-name").html(projects_info[index].name);
			$(".pro-img").attr("src", projects_info[index].img_src);
			$(".p-pro-title").html(projects_info[index].title);
			$(".p-pro-content").html(projects_info[index].content);
		})
		//左右箭头功能
		$(".p-btn-r").click(function() {
			partners_Swiper.slideNext();
		})
		$(".n-btn-r").click(function() {
		news_Swiper.slideNext();
		})
		$(".nav-open").click(function(){
			$(this).hide().siblings(".nav-close").show();		
			$(".nav-list").fadeIn();
			$("body").addClass("n-scroll");
		})
		$(".nav-close").click(function(){
			$(this).hide().siblings(".nav-open").css("display","inline");		
			$(".nav-list").fadeOut();
			$("body").removeClass("n-scroll");
		})
		$(".nav-list li").click(function(){
			$(".nav-close").hide().siblings(".nav-open").css("display","inline");					
			$(".nav-list").fadeOut();
			$("body").removeClass("n-scroll");
		})
		Marke.swiperTo(".nav-list li", g_Swiper);		
		Marke.swiperTo(".logo", g_Swiper);
	},
	swiperTo: function(class_name, swiper_name) {
		$(class_name).click(function() {
			var index = $(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			swiper_name.slideTo(index)
			$(".m-container").removeClass("animaiton");
			$(".m-container").eq(index).addClass("animaiton");
			if(class_name==".logo"){
				$(".nav-list li").eq(0).addClass("on").siblings().removeClass("on");
			}
		})
	}

};

Marke.init();