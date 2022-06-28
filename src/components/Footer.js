import React from "react";
export default function Footer() {
  return (
   <footer class="footer-distributed">
	<div class="footer-left">
		<h3>Data<span>Gami</span></h3>
		<div class="footer-info">
		<ul>	
			<li><a href="#">HOME</a></li>
			<li><a href="#">SERVICES</a></li>
			<li><a href="#">PRIVACY POLICY</a></li>
			<li><a href="#">TERMS & CONDITIONS</a></li>
		</ul>
	  	</div>
	</div>
	  
	<div class="footer-center">
		<div>
			<i class="fa fa-map-marker"></i>
			<p><span>6th Floor, “A” wing, HDIL Kaledonia Business Park</span> Sahar Road, Andheri (East), Mumbai 400069.</p>
		</div>
		<div>
			<i class="fa fa-phone"></i>
			<p>+91 22 6848 8300</p>
		</div>
		<div>
			<i class="fa fa-envelope"></i>
			<p><a href="mailto:support@company.com">sales@gatagami.com</a></p>
		</div>
	</div>

	<div class="footer-right">
		<p class="footer-company-about">
			<span>About the company</span>
			Datagami is a new age digital technology, consulting and effective business process management service company. Whelp our customers to align their business with new age digital technologies such as artificial intelligencemachine learning, deep learning, Big data analytics, cyber security, robotics process automation, and blockchain.
		</p>
		<div class="footer-icons">
	  		<a href="#"><i class="fa fa-instagram"></i></a>
			<a href="#"><i class="fa fa-facebook"></i></a>
			<a href="#"><i class="fa fa-twitter"></i></a>
			<a href="#"><i class="fa fa-linkedin"></i></a>
			<a href="#"><i class="fa fa-github"></i></a>
		</div>
	</div>
	<section>© 2022 Copyright: DataGami <span>All rights reserved</span> </section>
	</footer>
  );
}
