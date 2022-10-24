// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  // ... Your code here
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        }, (err) => console.log(err));
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err));



// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;

    return obtainInstruction('steak', 1)
    .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

      return obtainInstruction('steak', 2)
      .then( (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;

        return obtainInstruction('steak', 3)
        .then( (step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;

          return obtainInstruction('steak', 4)
          .then( (step4) => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;

            return obtainInstruction('steak', 5)
            .then( (step5) => {
              document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;

              return obtainInstruction('steak', 6)
              .then( (step6) => {
                document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;

                return obtainInstruction('steak', 7)
                .then( (step7) => {
                  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
                  document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
                })
                .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  })



// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  // ... Your code here
  try {
    await obtainInstruction('broccoli', 0)
    .then( (step0) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    })

    await obtainInstruction('broccoli', 1)
    .then( (step1) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    })

    await obtainInstruction('broccoli', 2)
    .then( (step2) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    })

    await obtainInstruction('broccoli', 3)
    .then( (step3) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    })

    await obtainInstruction('broccoli', 4)
    .then( (step4) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    })

    await obtainInstruction('broccoli', 5)
    .then( (step5) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    })

    await obtainInstruction('broccoli', 6)
    .then( (step6) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    })


  } catch(err) {
    console.log(err);
  }
}

makeBroccoli();


// Bonus 1 - Images

document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
document.querySelector("#steakImg").removeAttribute("hidden");
document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
document.querySelector("#broccoliImg").removeAttribute("hidden");

// Bonus 2 - Promise all
// ...

const spt0 = obtainInstruction('brusselsSprouts', 0);
const spt1 = obtainInstruction('brusselsSprouts', 1);
const spt2 = obtainInstruction('brusselsSprouts', 2);
const spt3 = obtainInstruction('brusselsSprouts', 3);
const spt4 = obtainInstruction('brusselsSprouts', 4);
const spt5 = obtainInstruction('brusselsSprouts', 5);
const spt6 = obtainInstruction('brusselsSprouts', 6);
const spt7 = obtainInstruction('brusselsSprouts', 7);


Promise.all([spt0, spt1, spt2, spt3, spt4, spt5, spt6, spt7])
.then((steps) => {
  steps.forEach((step) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
  })
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
})





