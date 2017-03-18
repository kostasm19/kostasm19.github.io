<!DOCTYPE html>
<html lang="en">
	<head>
		<title>VergaView | Luxury Studios</title>
		<meta charset="utf-8">
		<meta name="theme-color" content="#000000">
	    <link rel="icon" sizes="192x192" href="images/icon.png">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

		<script src="js/jquery.mobile.custom.min.js"></script>
		<script src="js/jquery.parallax.js"></script>
		<link rel="stylesheet" href="css/style.css">
		<script src="js/script.js"></script>

		<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,400i,700&subset=greek" rel="stylesheet">


	</head>
	<body>

		<div class="mask"></div>

		<div id="side-nav">
			<ul class="menu">
				<li><a href="#top"><i class="material-icons">&#xE836;</i></a></li>
				<li><a href="#about"><i class="material-icons">&#xE836;</i></a></li>
				<li><a href="#gallery"><i class="material-icons">&#xE836;</i></a></li>
				<li><a href="#contact"><i class="material-icons">&#xE836;</i></a></li>
			</ul>
		</div>

		<div id="header">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 menu">
						<ul class="menu">
							<li><a href="#top">VergaView</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#gallery">Gallery</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div id="mobileHeader">
			<span class="menu-open">
				<i class="material-icons">&#xE5D2;</i>
			</span>
			<div class="logo-name">
				<a href="#top" title="Home" rel="home">
					VergaView
				</a>
			</div>
		</div>
		<div id="main">
			<div id="top" class="section">
				<div class="plx"></div>
				<div class="plx-mask"></div>
				<div class="container">
					<div class="row">
						<div class="col-xs-12">
							<h2>Welcome to</h2>
							<h1>VergaView | Luxury Studios</h1>
						</div>
					</div>
				</div>
			</div>

			<div id="about" class="section">
				<div class="container">
					<div class="row">
						<h1>VergaView | Luxury Studios</h1>
					</div>
					<div class="row">
						<div class="col-md-7 text">
							<p>
								Το VergaView αποτελείται από δύο studios. Βρίσκεται στη Βέργα Καλαμάτας.
								Πίσω του ο καταπράσινος Ταύγετος μπροστά του ο μαγευτικός μεσσηνιακός κόλπος.
								Απέχει μόλις 3km από την Καλαμάτα και 1km από την πιο κοντινή παραλία.
								Έτσι οι επισκέπτες μπορούν να επιλέξουν ανάμεσα στη μαγευτική θέα και την ηρεμία,
								όσο και στη ζωή που προσφέρει η μεσσηνιακή προτεύουσα.
								Να σημειωθεί πως τα μαγαζιά που μονοπολούν τη βραδυνή ζωή της πολής
								βρίσκονται σε απόσταση αναπνοής από τα studios.
							</p>
						</div>
						<div class="col-md-5 facilities">
							<h3>Τα σπίτια διαθέτουν τις παρακάτω ανέσεις:</h3>
							<ul>
								<li>Πλήρως εξοπλισμένη κουζίνα</li>
								<li>TV LCD 32'' </li>
								<li>WiFi - VDSL</li>
								<li>Δωρεάν Parking</li>
								<li>A/C</li>
							</ul>
						</div>
					</div>
					<div class="row">
						<div class="footnote">
							Ειδικό σήμα λειτουργίας - τουριστική επιπλωμένη κατοικία: 1249Κ91000406101
						</div>
					</div>
				</div>
			</div>
			<div id="gallery" class="section2">
				<?php
					include('images.php');
					$folder = "gallery/";
					$im = new Images($folder);
					echo '
						<div id="myCarousel" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner" role="listbox">';
								$im->getImages();
							echo '</div>

							<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
								<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
								<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
					';
				?>
			</div>
			<div id="contact" class="section2">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-6 contact-us">
							<h1>Contact Us</h1>
							<div class="item">
								<span class="icon"><i class="material-icons">&#xE7FD;</i></span>
								<span class="data">Σταύρος Μαστρογιαννόπουλος</span>
							</div>
							<div class="item">
								<span class="icon"><i class="material-icons">&#xE88A;</i></span>
								<span class="data">Βέργα, Καλαμάτα</span>
							</div>
							<div class="item">
								<span class="icon"><i class="material-icons">&#xE0CD;</i></span>
								<span class="data"><a href="tel:+306983591195" data-event="phone.profile">+30 698 359 1195</a></span>
							</div>
							<div class="item">
								<span class="icon"><i class="material-icons">&#xE0BE;</i></span>
								<span class="data"><a href="mailto:stauros_mas@hotmail.com" target="_top">stauros_mas@hotmail.com</a></span>
							</div>
							<div class="item">
								<span class="icon"><i class="material-icons">&#xE80D;</i></span>
								<span class="data">
									<a href="https://www.facebook.com/VergaView/" target="_blank" ><img src="images/facebook.png" /></a>
									<a href="https://www.tripadvisor.com/VacationRentalReview-g668020-d4243149-Verga_View-Kalamata_Messenia_Region_Peloponnese.html" target="_blank" ><img src="images/tripadvisor.jpeg" /></a>
								</span>
							</div>
						</div>
						<div class="col-md-6 map no-padding">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42874.26087606099!2d22.15097143359032!3d36.99432247961058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU5JzU0LjgiTiAyMsKwMDknNTMuMCJF!5e0!3m2!1sen!2sgr!4v1474564940879" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="footer">
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="col-sm-6">
							<div class="site-copyright">
								Vergaview &copy;
								<?php echo '2014'; if (date('Y') > '2014') echo ' - ' . date('Y'); ?>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="credits">
								Web Development
								<a href="http://www.kmountzouris.gr" target="_blank">kmountzouris</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</body>
</html>
