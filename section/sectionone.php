<div class="section s1" id="s1">

	<div class="container">
		<p class="text-dark fs-1 text-uppercase text-center m-4 ">
			find
		</p>
		<div class="tab">
			<button class="tablinks" onclick="openCity(event, 'find')" id="defaultOpen">FIND NEWS</button>
			<button class="tablinks" onclick="openCity(event, 'fno')">FNO ANALYTICS</button>
			<button class="tablinks" onclick="openCity(event, 'radar')">RADAR</button>
			<button class="tablinks" onclick="openCity(event, 'platform')">PLATFORM</button>
			<button class="tablinks" onclick="openCity(event, 'tfa')">TECHNICAL & FUNDAMENTAL ANALYTICS</button>
		</div>
		<!-- Tab content -->
		<div id="find" class="tabcontent mt-4">
			<div class="content-container">
				<div id="find" class="find">
					<!-- Initial content will be inserted here -->
				</div>
			</div>
		</div>

		<div id="fno" class="tabcontent mt-2">

			<div class="content-container">
				<div id="content" class="content">
					<!-- Initial content will be inserted here -->
				</div>
			</div>
		</div>

		<div id="radar" class="tabcontent mt-4">
			<div class="content-container">
				<div id="radar" class="radar">
					<!-- Initial content will be inserted here -->
				</div>
			</div>
		</div>
		<div id="platform" class="tabcontent mt-4">
			<div class="content-container">
				<div id="radar" class="radar">
					<h1>Awaited</h1>
				</div>
			</div>
		</div>
		<div id="tfa" class="tabcontent mt-4">
			<div class="content-container">
				<div id="content" class="content">
					<!-- Initial content will be inserted here -->
				</div>
			</div>
		</div>
	</div>

	<!-- <div class="inner">
		
		<div class="fna_carousel">

			<div id="prodsidebar" style="height:500px; width:130px; float:left;">
				<a href="#" id="divFNAMenu" class="circle1"><p><br>Find News Analytics</p></a>
				<br>
				<br>
				<a href="#" id="divFPAMenu" class="circle1 prodsel1"><p><br>Find Price Analytics</p></a>
				<br>
				<br>
				<a href="#" id="divFDSMenu" class="circle1"><p><br>Find Deep Search</p></a>
			</div>

			<div id="fnaprod" style="margin-left:130px; margin-top:20px;">

				<div id="findnewsanalyticsHead" style="display: none;">
					<div class="prodH1 prodH1margin">FIND News Analytics</div>
					<p class="proddesc prodH1margin">
						<br>
						Get Innovation streaming to your finger tips. At Heckyl we cover millions of news 
						sources for you from all over the planet – for over 35,000 companies and 3500+ non-listed 
						entities in 7 geographies.  And we don’t stop at that.  We keep you updated constantly on 
						Government moves, hedge funds or PE investments, VC deals, economic announcements and more.  
						Our revolutionary technology - with sentiment-tagging, news-clustering and discovery 
						engine - does all the heavy lifting for you and helps you make sense of millions of raw news data points.
					</p>
				</div>
				<div id="findnewsanalytics" style="display: none;">
					<div class="fnaslide1" style="">
						<div class="prodH2 prodH1margin">Real Time Trending News</div>
						<div>
							<div class="prodsubdesc prodH1margin">
								Real time trending news from the web, government wires, news wires, blogs and Twitter. 
								Get news sentiment and velocity to know the news points making an impact in the market.

							</div>
							<img src="<?php echo $base_url; ?>assets/images/product/P8.png" alt="" class="prodsubdescimg">
						</div>
					</div>
					<div class="fnaslide1">
						<div class="prodH2 prodH1margin">Sentiment HeatMap</div>
						<div>
							<div class="prodsubdesc prodH1margin">
								A fresh way of looking at stocks and the street sentiment. The Sentiment HeatMap allows 
								you to identify changing sentiment and thus helps you read the market in just a snapshot.

							</div>
							<img src="<?php echo $base_url; ?>assets/images/product/P1.png" alt="" class="prodsubdescimg" style="width:440px;height:350px;">
						</div>
					</div>
					<div class="fnaslide1">
						<div class="prodH2 prodH1margin">Ratings and Market Pulse</div>
						<div>
							<div class="prodsubdesc prodH1margin width20pc">
								Quickly scan what is getting the attention of Investors and Investment Houses. Receive rating alerts, 
								portfolio updates, big trades, analyst and brokerage updates; all in real time.

							</div>
							<img src="<?php echo $base_url; ?>assets/images/product/P3.png" alt="" class="prodsubdescimg">
						</div>
					</div>
				</div>
			</div>

			<div id="fpaprod" style="margin-left:130px; margin-top:20px;">
				<div id="findpriceanalyticsHead" style="display: block;">
					<div class="prodH1 prodH1margin">FIND Price Analytics</div>
					<p class="proddesc prodH1margin">
						<br>
						The il Supremo Price Analytics platform awaits you. Analyze and trade different
						asset classes with never-seen-before visuals that enable you to get first-hand insights
						to make the best trade decisions instantly and smartly. Provided with intelligent
						tools and trading touch points wherever it matters, you will no longer have to search
						for opportunities. 
					</p>
				</div>
				<div class="bx-wrapper" style="max-width: 100%;"><div class="bx-viewport" style="width: 100%; overflow: hidden; position: relative; height: 560px;"><div id="findpriceanalytics" style="display: block; width: auto; position: relative;">
					<div class="fnaslide1" style="float: none; list-style: none; position: absolute; width: 1007px; z-index: 50; display: block;">
						<div class="prodH2 prodH1margin">Price HeatMap</div>
						<div>
						<div class="prodsubdesc prodH1margin width20pc">
							One-click market snapshots of Long-Short Built-up, Volume, Volatility etc. will
							pack you with the smartest insights and intuitions of the market course and trend
							recognition.
						</div>
						<img src="<?php echo $base_url; ?>assets/images/product/P4.png" alt="" class="prodsubdescimg">
					</div>
					</div>
					<div class="fnaslide1" style="float: none; list-style: none; position: absolute; width: 1007px; z-index: 0; display: none;">
						<div class="prodH2 prodH1margin">Company Dashboard</div>
						<div>
							<div class="prodsubdesc prodH1margin width20pc">
								Get a whole new picture of the company activity on the Dashboard. Right from Company News, 
								algorithm-generated alerts, Option movement, unusual activity to Company Research Report – you 
								find all that there is worth knowing about the company on this screen.

							</div>
							<img src="<?php echo $base_url; ?>assets/images/product/P5.png" alt="" class="prodsubdescimg">
						</div>
					</div>
					<div class="fnaslide1" style="float: none; list-style: none; position: absolute; width: 1007px; z-index: 0; display: none;">
						<div class="prodH2 prodH1margin">Strategies Builder</div>
						<div>
							<div class="prodsubdesc prodH1margin width20pc">
								Complex Option Strategies now made easy. This incredible scanner allows you to specify
								target price, date and your risk preferences to bring out the best, optimum, low
								risk strategies for you along with easy-to-understand payoff statistics.
							</div>
							<img src="<?php echo $base_url; ?>assets/images/product/P6.png" alt="" class="prodsubdescimg">
						</div>
					</div>
				</div></div><div class="bx-controls bx-has-pager bx-has-controls-direction"><div class="bx-pager bx-default-pager"><div class="bx-pager-item"><a href="" data-slide-index="0" class="bx-pager-link active">1</a></div><div class="bx-pager-item"><a href="" data-slide-index="1" class="bx-pager-link">2</a></div><div class="bx-pager-item"><a href="" data-slide-index="2" class="bx-pager-link">3</a></div></div><div class="bx-controls-direction"><a class="bx-prev" href="">Prev</a><a class="bx-next" href="">Next</a></div></div></div>
			</div>

			<div id="fdsprod" style="margin-left:130px; margin-top:20px;">
				<div id="finddeepsearchHead" style="display: none;">
					<div class="prodH1 prodH1margin">FIND DeepSearch</div>
					<p class="proddesc prodH1margin">

						<br>

						Discovery is the key focus of Heckyl DeepSearch. Heckyl big data engine mines Public,
						Private and Proprietary data sources to help you analyse, connect and discover the
						next big opportunity.
					</p>
				</div>
				<div id="finddeepsearch" style="display: none;">
					<div class="fnaslide1">
						<div class="prodH2 prodH1margin">Discover</div>
						<div>
							<div class="prodsubdesc prodH1margin width20pc">
								Research and ask questions to this amazingly intelligent application. It will answer
								all your queries and suggest you the most relevant content for your research. It’s
								a whole new galaxy of actionable information now at your fingertips.
							</div>
							<img src="<?php echo $base_url; ?>assets/images/product/P9.png" alt="" class="prodsubdescimg">
						</div>
					</div>
				</div>
			</div>

		</div>

		<div style="clear:both;"></div>

	</div> -->
</div>