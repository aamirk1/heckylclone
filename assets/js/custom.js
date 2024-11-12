const baseUrl = "http://localhost/heckylclone/";


  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
//   document.getElementById("defaultOpen").click();
  // New function to switch between sections

//   fno tab data

window.onload = function() {
    // First Function: Content Change
    const contentDiv = document.getElementById("content");

    // Array of content (image names only)
    const contentArray = [
        { title: "PCROITime", image: "product/fno/PCROITIME.jpg" },
        { title: "Open Interest Build up", image: "product/fno/green1.jpg" },
        { title: "OI Change", image: "ocean.jpg" },
        { title: "FII Vs Index Trends", image: "desert.jpg" },
        { title: "Multi Strike OI", image: "desert.jpg" }
    ];

    // Base URL (for your image paths)

    // Set the initial content
    let currentContentIndex = 0;
    const imageUrl = baseUrl + "assets/images/" + contentArray[currentContentIndex].image;
    contentDiv.innerHTML = `<h2>${contentArray[currentContentIndex].title}</h2><img src="${imageUrl}" alt="${contentArray[currentContentIndex].title}">`;

    // Function to change content
    function changeContent() {
        // Fade out current content
        contentDiv.style.opacity = 0;

        // After the fade-out completes (1 second), change the content
        setTimeout(() => {
            currentContentIndex = (currentContentIndex + 1) % contentArray.length; // Loop through content array

            // Construct the image URL dynamically with PHP base URL and JS image name
            const imageUrl = baseUrl + "assets/images/" + contentArray[currentContentIndex].image;

            // Update content with the new title and image
            contentDiv.innerHTML = `<h2>${contentArray[currentContentIndex].title}</h2><img src="${imageUrl}" alt="${contentArray[currentContentIndex].title}">`;

            // Fade in new content
            contentDiv.style.opacity = 1;
        }, 1000); // Fade duration (1 second)
    }

    // Change content every 3 seconds (3000 ms)
    setInterval(changeContent, 3000);

    // Second Function: Radar Content Change
    const radarDiv = document.getElementById("radar");

    // Array of radar with HTML snippets instead of just image paths
    const radarArray = [
        {title: "", radar:"<h2>Trend Radar:</h2><br/><p>TREND RADAR - a newly launch feature got added in Heckyl Trading Platform.</p><p>RADAR is a 360 °- degree real time screener which scan pre-defined Bullish & Bearish events on live trading market and generates visual effects alerts for the users to understand the change in pattern on the movement of a stock trading in the exchange.</p><p>RADAR is visual representation of Screener events; this helps trader to understand visual occurrence of events when a stock price moves up or down. Visual occurrence helps trader to determine a pattern in movement of a security and in case similar patterns exist in future, it helps trader to take a decision to act on and build a position on a security.</p>"},
        { title: "", radar: "<div class='container mt-5'><h2>Key Tags:</h2><ul class='list-unstyled'><li>➢ Sector wise</li><li>➢ Symbol wise</li><li>➢ Indices wise</li><li>➢ Most Active Stocks view</li><li>➢ Bullish Events</li><li>➢ Bearish Events</li><li>➢ On Predefined Intervals</li></ul><h2 class='mt-4'>RADAR Scanner Indicators</h2><div class='row'><div class='col-md-6'><h3>Bullish Events:</h3><ul class='list-unstyled'><li>➢ 52 Week High</li><li>➢ Day’s High</li><li>➢ Breaking Resistance 1</li><li>➢ Breaking Resistance 2</li><li>➢ Breaking Resistance 3</li><li>➢ Vol > Prev Day’s Vol with Price Gain</li><li>➢ Filled Gap Down</li><li>➢ Break Prev Day’s High</li><li>➢ Gap Up</li></ul></div><div class='col-md-6'><h3>Bearish Events:</h3><ul class='list-unstyled'><li>➢ 52 Week High</li><li>➢ Day’s High</li><li>➢ Breaking Resistance 1</li><li>➢ Breaking Resistance 2</li><li>➢ Breaking Resistance 3</li><li>➢ Vol > Prev Day’s Vol with Price Gain</li><li>➢ Filled Gap Down</li><li>➢ Break Prev Day’s High</li><li>➢ Gap Up</li></ul></div></div></div>" },
        {title:"",radar:"<h2>FAQ’s</h2><p>➢ When market is in Bullish or Bearish trend, opening is very important, trader normally tries to understand how many stocks opened, up or below as compared to yesterday’s close price. RADAR helps trader to notice that how many stocks have Gap Up, Gap Down, Filled Gap Up, Filled Gap Down openings. In case of majority on either side, it is easy to gauge the trend continuity.</p><p>➢ As a next step after market opening, to understand the ongoing momentum it is very important to know how many stocks Breaking Resistance or Support Levels. Majority of Stocks Breaking Resistance Level 1 followed by Resistance Level 2 shows a bullish momentum and vice – versa. RADAR helps you understand this scenario at any point in the market, how many stocks are at which level Resistance/Support. This is very useful in momentum trading and when trader trades in sessions, when market is very volatile as in case most of the stocks is at Support 3, 60%-80% time we have a small bounce back or retrenchment Resistance case.</p><p>➢ How to know the morning trend is backed by some good technical? Suppose we have a great opening in Market where we have Gap Up Openings, followed by Securities breaking Resistance level, to understand will the trend continue the Vol > Prev Day’s Vol with Price Gain is a great indicator to verify the trend.</p><p>➢ Market Breadth: How many stocks are at 52Week High / Low</p>"},
        {title:"",radar: "<p>➢ RADAR helps you answer this question at any point and gives you supporting data like 52 Week along with Day’s High and Breaking Resistance that shows the ongoing momentum. Similar questions come up at security level (Individual stock level) and RADAR is ready to show them.</p>"},

    ];

    // Set the initial radar content
    let currentRadarIndex = 0;
    radarDiv.innerHTML = `<h2>${radarArray[currentRadarIndex].title}</h2>${radarArray[currentRadarIndex].radar}`;

    // Function to change radar content
    function changeRadar() {
        // Fade out current radar content
        radarDiv.style.opacity = 0;

        // After the fade-out completes (1 second), change the radar
        setTimeout(() => {
            currentRadarIndex = (currentRadarIndex + 1) % radarArray.length; // Loop through radar array

            // Update radar content
            radarDiv.innerHTML = `<h2>${radarArray[currentRadarIndex].title}</h2>${radarArray[currentRadarIndex].radar}`;

            // Fade in new radar content
            radarDiv.style.opacity = 1;
        }, 1000); // Fade duration (1 second)
    }

    // Change radar content every 3 seconds (3000 ms)
    setInterval(changeRadar, 4500);


     // first Function: find Content Change
      const findDiv = document.getElementById("find");

     // Array of find with HTML snippets instead of just image paths

     // Array of content (image names only)
     const findArray = [
         { title: "Overview", images: "product/fno/fno.jpeg" },
         { title: "Health Score", images: "city.jpg" },
         { title: "Peer comparison on health score", images: "ocean.jpg" },
         { title: "Balance sheet data for more than 10 years", images: "desert.jpg" },
         { title: "Cash flow", images: "desert.jpg" },
         { title: "Important Financial Ratios", images:"product/find/image.png" },
         { title: "P&L Snapshot", images:"product/find/image.png" },
         { title: "Various Technical parameters for a given period", images:"product/find/image.png" },
         { title: "Option Chain", images:"product/find/image.png" },
         { title: "Technical screeners", images:"product/find/image.png" },
         { title: "Other technical screeners", images:"product/find/image.png" },
     ];
 
     // Base URL (for your image paths)
 
     // Set the initial find
     let currentfindIndex = 0;
     const findImageUrls = baseUrl + "assets/images/" + findArray[currentfindIndex].images;
     findDiv.innerHTML = `<h2>${findArray[currentfindIndex].title}</h2><img src="${findImageUrls}" alt="${findArray[currentfindIndex].title}">`;
 
     // Function to change find
     function changefind() {
         // Fade out current find
         findDiv.style.opacity = 0;
 
         // After the fade-out completes (1 second), change the find
         setTimeout(() => {
             currentfindIndex = (currentfindIndex + 1) % findArray.length; // Loop through find array
 
             // Construct the image URL dynamically with PHP base URL and JS image name
             const findImageUrls = baseUrl + "assets/images/" + findArray[currentfindIndex].images;
 
             // Update find with the new title and image
             findDiv.innerHTML = `<h2>${findArray[currentfindIndex].title}</h2><img src="${findImageUrls}" alt="${findArray[currentfindIndex].title}">`;
 
             // Fade in new find
             findDiv.style.opacity = 1;
         }, 1000); // Fade duration (1 second)
     }
 
     // Change find every 3 seconds (3000 ms)
     setInterval(changefind, 3000);



     
     // Four Function: find Content Change
     const tfaDiv = document.getElementById("tfa");

     // Array of tfa with HTML snippets instead of just image paths

     // Array of content (image names only)
     const tfaArray = [
         { title: "Overview", images: "product/fno/fno.jpeg" },
         { title: "Health Score", images: "city.jpg" },
         { title: "Peer comparison on health score", images: "ocean.jpg" },
         { title: "Balance sheet data for more than 10 years", images: "desert.jpg" },
         { title: "Cash flow", images: "desert.jpg" },
         { title: "Important Financial Ratios", images:"product/tfa/image.png" },
         { title: "P&L Snapshot", images:"product/tfa/image.png" },
         { title: "Various Technical parameters for a given period", images:"product/tfa/image.png" },
         { title: "Option Chain", images:"product/tfa/image.png" },
         { title: "Technical screeners", images:"product/tfa/image.png" },
         { title: "Other technical screeners", images:"product/tfa/image.png" },
     ];
 
     // Base URL (for your image paths)
 
     // Set the initial tfa
     let currenttfaIndex = 0;
     const imageUrls = baseUrl + "assets/images/" + tfaArray[currenttfaIndex].images;
     tfaDiv.innerHTML = `<h2>${tfaArray[currenttfaIndex].title}</h2><img src="${imageUrls}" alt="${tfaArray[currenttfaIndex].title}">`;
 
     // Function to change tfa
     function changetfa() {
         // Fade out current tfa
         tfaDiv.style.opacity = 0;
 
         // After the fade-out completes (1 second), change the tfa
         setTimeout(() => {
             currenttfaIndex = (currenttfaIndex + 1) % tfaArray.length; // Loop through tfa array
 
             // Construct the image URL dynamically with PHP base URL and JS image name
             const imageUrls = baseUrl + "assets/images/" + tfaArray[currenttfaIndex].images;
 
             // Update tfa with the new title and image
             tfaDiv.innerHTML = `<h2>${tfaArray[currenttfaIndex].title}</h2><img src="${imageUrls}" alt="${tfaArray[currenttfaIndex].title}">`;
 
             // Fade in new tfa
             tfaDiv.style.opacity = 1;
         }, 1000); // Fade duration (1 second)
     }
 
     // Change tfa every 3 seconds (3000 ms)
     setInterval(changetfa, 3000);


// about us js code start

// our mantra

    // Single content object with title and image
const mantraDiv = document.getElementById("OurMantra");
const mantraContent = { title: '"Heckyl aims to be a global leader in the space of information analytics for worldwide financial markets. We strive to raise the bar with everything that we offer and shall continue to do so till hell freezes over."', image: "" };

// Base URL (for your image path)// replace with your actual base URL

// Set the initial content
// const imageUrls = baseUrl + "assets/images/" + tfaContent.image;
mantraDiv.innerHTML = `<h1 style="color: white;text-align: justify; letter-spacing: 2px;">${mantraContent.title}</h1>`;




// about us js code end






};
