/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

const reqOptions = {
  method: 'GET'
}


  fetch("/products", {
    method: 'POST',
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery", 
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });

/* ============================== Phase 2 ============================== */

fetch("/products", {
  method: 'POST',
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery", 
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}).then((res) => {
    console.log(res.status);
    console.log(res.ok);
    console.log(res.url); 
})

// [[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
// 200
// true


/* ============================== Phase 3 ============================== */

let params = new URLSearchParams({
  name: "Caribbean Delight Coffee",
  description: "Made by Manatee Coffee",
  price: 11.99,
  categories: "grocery"
});



fetch("/products", {
  method: 'POST',
  body: params, 
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}).then((res) => {
    console.log(res.status);
    console.log(res.ok);
    console.log(res.url); 
    console.log(res.text()); 
})



// Your code here