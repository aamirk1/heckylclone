

<script>

function switchSection(evt, sectionName) {
    var i, sectionContent, tabLinks;
    sectionContent = document.getElementsByClassName("section-content");
    for (i = 0; i < sectionContent.length; i++) {
      sectionContent[i].style.display = "none"; // Hide all sections
    }
    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", ""); // Remove active class from all tabs
    }
    document.getElementById(sectionName).style.display = "block"; // Show selected section
    evt.currentTarget.className += " active"; // Mark clicked tab as active
  }
  
  // Automatically click the tab with id="defaultTab" when the page loads
  document.getElementById("defaultOpen").click();
  document.getElementById("defaultTab").click();
</script>


<script>
		(function (i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date(); a = s.createElement(o),
			m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
		})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

		ga('create', 'UA-45057857-1', 'heckyl.com');
		ga('send', 'pageview');

	</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </body>
</html>