// --------------- DO NOT TOUCH ---------------
const daySelect = document.querySelector("#day-select");
const choreContainer = document.querySelector("#chores");

function populateDaySelect(days) {
  for (const day of days) {
    const newOption = document.createElement("option");
    newOption.value = day.id;
    newOption.textContent = day.dayOfWeek;
    newOption.dataset.dayJson = JSON.stringify(day);
    daySelect.append(newOption);
  }
}

function populateChores(chores) {
  choreContainer.innerHTML = "";
  for (const chore of chores) {
    choreContainer.insertAdjacentHTML(
        "beforeend",
        `
      <article>
        <h2>${chore.chore}</h2>
      </article>
      `);
  }
}

function getCurrentlySelectedDay() {
  const selectedOption = daySelect.selectedOptions[0];
  return JSON.parse(selectedOption.dataset.dayJson);
}

// --------------- DO NOT CHANGE ANYTHING ABOVE HERE - ADD YOUR SOLUTION BELOW ---------------

// =====================
// Fetch
// Getting a promise

// then(function(Response) {})


// console.log(fetch('fake-api/days.json'))
// console.log(fetch('fake-api/days.json').then(function(response) {return response.json()}))
// console.log(fetch('fake-api/days.json').then(function(response) {return response.json()}).then(function(rawArray ) {return rawArray}))


// fetch('fake-api/days.json')
//   .then(function(response) {
//     return response.json()
//   })
//     .then(function(rawData) {
//         console.log(rawData)
//         populateDaySelect(rawData)
//     })


// daySelect.addEventListener('change', function() {
//   fetch(`fake-api/chores/${getCurrentlySelectedDay().dayOfWeek}/chores.json`)
//     .then(function(response) {
//       return response.json()
//     })
//       .then(function(rawData) {
//         populateChores(rawData)
//       })
// })







// Fetching Days Json Promise

// fetch('/fake-api/days.json')
//     .then(res => res.json())
//         .then(rawData => {
//              populateDaySelect(rawData)
//              return fetch(`/fake-api/chores/${getCurrentlySelectedDay().dayOfWeek.toLowerCase()}/chores.json`)
//         })
//             .then(res => res.json())
//                 .then(rawData => populateChores(rawData))

// daySelect.addEventListener('change', function() {fetch(`/fake-api/chores/${getCurrentlySelectedDay().dayOfWeek.toLowerCase()}/chores.json`)
//             .then(res => res.json())
//                 .then(rawData => populateChores(rawData))})

// REWRITE

// fetch('/fake-api/days.json')
//   .then(res => res.json())
//     .then(rawData => {
//       populateDaySelect(rawData)
//       // fetch(`/fake-api/chores/${getCurrentlySelectedDay().dayOfWeek}/chores.json`)
//       //   .then(res => res.json())
//       //     .then(rawData => populateChores(rawData))
//     }) 


// daySelect.addEventListener('input', function() {
//   fetch(`/fake-api/chores/${getCurrentlySelectedDay().dayOfWeek}/chores.json`)
//     .then(res => res.json())
//       .then(rawData => populateChores(rawData))
// })

// REWRITE 2

