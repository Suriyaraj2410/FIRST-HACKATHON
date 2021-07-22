var navbar=document.createElement("header")
navbar.className="Navbar"
navbar.innerHTML=`  <header>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
  <div class="container">
    <a href="" class="navbar-brand"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXeH9VCKwW1Cp7jk4H76Fu1VmVKiFg0eSRQ&usqp=CAU" width="50" height="50" style=" margin:10px;">Makeup Products</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#suriya" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="suriya">
      <ul class="navbar-nav ml-auto ">
        <li class="nav-item active">
          <a href="./index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="about.html" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="menu.html" class="nav-link">Menu </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>`
var ImageSlider=document.createElement("div")
ImageSlider.innerHTML=`    <div id="carouselExampleSlidesOnly" class="carousel slide"  data-ride="carousel">
<div class="carousel-inner" >
  <div class="carousel-item active">
      <img src="https://c0.wallpaperflare.com/preview/739/804/942/flatlay-makeup-beauty-cosmetics.jpg" class="d-block"style="width:100%; height: 600px;" alt="...">
  </div>
  <div class="carousel-item">
    <img src="img/12345.jpg" class="d-block ;" style="width:100%; height: 600px;" alt="...">
  </div>
  <div class="carousel-item">
    <img src="https://c1.wallpaperflare.com/preview/936/713/66/beauty-parlor-spa-cosmetics-biological.jpg" class="d-block"style="width:100%; height: 600px;" alt="...">
  </div>
</div>`

const productData=document.createElement("div")
productData.className="productData bg-dark"


async function fetchMakeupProducts(){
   const res=await fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
   const products=await res.json();
   products.splice(52,921)
   products.forEach(product => {
       const productCard=document.createElement("div")
       productCard.className="productCard container-sm bg-light"
       productCard.innerHTML=`<div class="card" style="width: 18rem;">
       <img src="${product.image_link}" onerror="this.src='https://c4.wallpaperflare.com/wallpaper/950/28/885/lipstick-cosmetics-white-background-wallpaper-preview.jpg'"" class="card-img-top" alt="...">
       <div class="card-body flex-container">
         <h5 class="card-title">${product.name}</h5>
         <p class="card-text">${product.description}</p>
         <a href="${product.product_link}" class="btn btn-primary button">Add to tag</a>
       </div>
       
     </div>`
     productData.appendChild(productCard)
     });
   
   
}
fetchMakeupProducts()


ImageSlider.appendChild(productData)
navbar.appendChild(ImageSlider)
document.body.appendChild(navbar)