

<body>
  <div class="container-xxl bg-white p-0">
      <!-- Spinner Start -->
      <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
          </div>
      </div>
      <!-- Spinner End -->


      <!-- Navbar & Hero Start -->
      <div class="container-xxl position-relative p-0">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
              <a href="/" class="navbar-brand p-0">
                  <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>Tappd</h1>
                  <!-- <img src="img/logo.png" alt="Logo"> -->
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span class="fa fa-bars"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                  <div class="navbar-nav ms-auto py-0 pe-4">
                      <a href="index.html" class="nav-item nav-link active">Test</a>
                      <a href="about.html" class="nav-item nav-link">About</a>
                      <a href="service.html" class="nav-item nav-link">Service</a>
                      <a href="menu.html" class="nav-item nav-link">Menu</a>
                      <div class="nav-item dropdown">
                          <a href="/" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                          <div class="dropdown-menu m-0">
                              <a href="booking.html" class="dropdown-item">Booking</a>
                              <a href="team.html" class="dropdown-item">Our Team</a>
                              <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                          </div>
                      </div>
                      <a href="contact.html" class="nav-item nav-link">Contact</a>
                  </div>
                  <a href="https://food.google.com/chooseprovider?restaurantId=/g/11df23mqm3&g2lbs=ANTchaNjYhJmlpkKql8nBuR100dnOSbUXUMDsli3bJZoTPa9XFi-6j05IX6wRA_gzdg4XKZpFG3ocvZ8yALRDqLEvI1_SnUEv354HaDhKIuzIQPMD548zBKnWX_bZJ_4q_24iZJ_Neof&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=bV1fZb3dJtqhur8P6umGOA&ei=bV1fZb3dJtqhur8P6umGOA&fo_s=OA&opi=89978449&sei=CYLlqnTaH-auEXReTDtkrqQc&utm_campaign&utm_source=search" class="btn btn-primary py-2 px-4">Online Ordering</a>
              </div>
          </nav>

          <div class="container-xxl py-5 bg-dark hero-header mb-5">
              <div class="container my-5 py-5">
                  <div class="row align-items-center g-5">
                      <div class="col-lg-6 text-center text-lg-start">
                          <h1 class="display-3 text-white animated slideInLeft">Local Hospitality<br>Incredible Food</h1>
                          <p class="text-white animated slideInLeft mb-4 pb-2">Bar Grill right in the heart of Dyersburg, Great Atmosphere, Better Wings, Coldest Beer</p>
                          <a href="https://food.google.com/chooseprovider?restaurantId=/g/11df23mqm3&g2lbs=ANTchaNjYhJmlpkKql8nBuR100dnOSbUXUMDsli3bJZoTPa9XFi-6j05IX6wRA_gzdg4XKZpFG3ocvZ8yALRDqLEvI1_SnUEv354HaDhKIuzIQPMD548zBKnWX_bZJ_4q_24iZJ_Neof&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=bV1fZb3dJtqhur8P6umGOA&ei=bV1fZb3dJtqhur8P6umGOA&fo_s=OA&opi=89978449&sei=CYLlqnTaH-auEXReTDtkrqQc&utm_campaign&utm_source=search" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Order Online</a>
                      </div>
                      <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                          <img class="img-fluid" src="img/hero.png" alt="">
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Navbar & Hero End -->


      <!--Body Start -->
      <slot /> <!-- Content slot-->
      

      <!-- Footer Start -->
      <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
          <div class="container py-5">
              <div class="row g-5">
                  <div class="col-lg-3 col-md-6">
                      <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                      <a class="btn btn-link" href="/">About Us</a>
                      <a class="btn btn-link" href="/">Contact Us</a>
                      <a class="btn btn-link" href="/">Reservation</a>
                      <a class="btn btn-link" href="/">Privacy Policy</a>
                      <a class="btn btn-link" href="/">Terms & Condition</a>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                      <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>2695 Lake Rd, Dyersburg, TN 38024</p>
                      <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>(731) 325-5469</p>
                      <p class="mb-2"><i class="fa fa-envelope me-3"></i></p>
                      <div class="d-flex pt-2">
                          <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-twitter"></i></a>
                          <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-facebook-f"></i></a>
                          <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-youtube"></i></a>
                          <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                      <h5 class="text-light fw-normal">Monday-Saturday</h5>
                      <p>11 - 11PM</p>
                      <h5 class="text-light fw-normal">Sunday</h5>
                      <p>10AM - 08PM</p>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                      <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                      <div class="position-relative mx-auto" style="max-width: 400px;">
                          <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                          <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="copyright">
                  <div class="row">
                      <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                          &copy; <a class="border-bottom" href="/">Tapp'd</a>, All Right Reserved. <br>
            
            <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
            Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br><br>
                          Distributed By <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                      </div>
                      <div class="col-md-6 text-center text-md-end">
                          <div class="footer-menu">
                              <a href="/">Home</a>                    
                              <a href="/">Help</a>                           
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Footer End -->


      <!-- Back to Top -->
      <a href="/" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
  </div>

  <!-- JavaScript Libraries -->
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/waypoints/waypoints.min.js"></script>
  <script src="lib/counterup/counterup.min.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="lib/tempusdominus/js/moment.min.js"></script>
  <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
  <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

  <!-- Template Javascript -->
  <script src="js/main.js"></script>
</body>