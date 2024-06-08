// //create products and store it on the local storage 

// let wrapper = document.querySelector("[recent]")
// let products = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : localStorage.setItem("products", JSON.stringify(
//     [
//      {
//         id:1,

//     productName: "Vip Ticket",
//     Category: "Tickets",
//     Description: "Buy a Vip ticket to get access to exclusive benefits that only you the holder can benefit from.",
//     Amount: 4000.00,
//     img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"
//   },
//   {
//     id:2,

//     productName: "Backstage Pass",
//     Category: "Tickets",
//     Description: "Buy a backstage pass to get exclusive access to the backstage area, meet the bands and DJs and make some new friends.",
//     Amount: 2000.00,
//     img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"
//   },
//   {
//     id:3,

//     productName: "Midnight Ticket",
//     Category: "Tickets",
//     Description: "This will allow you access to the club's main floor, bar and dance floor",
//     Amount: 1000.00,
// img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"
//   },
  
//   {
//     id:4,

//     productName: "Vistor's Pass",
//     Category: "Tickets",
//     Description: "Gift this pass to a friend (only available if you're in our vip subscriber program) and they'll be able to join you in the vip area for a night.",
//     Amount: 800.00,
//     img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"
//   },
//   {
//     id:5,

//     productName: "Midnight Subscription",
//     Category: "Subscription",
//     Description: "Become a Midnight Animal with this subscription. A monthly fee will be needed allows access to main floor, dance floor and bar with no need to buy tickets every night.",
//     Amount: 1200.00,
//     img_url: "https://richtershotline.github.io/Pimages/Images/ticket.webp"




//   }




    
//  ]) )
//  //function calls itself
//  function recentproducts() {
//     let arrSize = products.length
// let latestProducts = products.reverse().slice(0, arrSize >> 1)
// latestProducts.forEach(product => {

// wrapper.innerHTML += `
// <div class="card mx-auto" style="width: 18rem;">
//   <img src="${product.img_url}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${product.productName}</h5>
//     <p class="card-text">${product.Description}</p>
//   </div>
// </div>



// `

// })
//  }
// recentproducts()
