const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="assets/shreklogo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="dropdown">
                  <img class="dropbtn" src="assets/user.png">
                  <div class="dropdown-content">
                    <a href="signup.html">Sign Up</a>
                    <a href="authmain.php">Login</a>
                  </div>
                </div>
                <a href="shoppingcart.php"><img src="assets/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.php" class="link">home</a></li>
            <li class="link-item"><a href="products_men.php" class="link">Men</a></li>
            <li class="link-item"><a href="products_women.php" class="link">Women</a></li>
        </ul>
    `;
}

createNav();
