document.addEventListener('DOMContentLoaded', () => {
  console.log("LINKED")

  // Dramatis Personae
  const hobbits = [
    'Frodo Baggins',
    'Samwise "Sam" Gamgee',
    'Meriadoc "Merry" Brandybuck',
    'Peregrin "Pippin" Took'
  ]

  const buddies = [
    'Gandalf the Grey',
    'Legolas',
    'Gimli',
    'Strider',
    'Boromir'
  ]

  const baddies = [
    'Sauron',
    'Saruman',
    'The Uruk-hai',
    'Orcs'
  ]


  // Our Setting
  const lands = ['The-Shire', 'Rivendell', 'Mordor']

  // ====================================
  //           Chapters
  // ====================================


  // ============
  // Chapter 1
  // ============
  const makeMiddleEarth = function () {

    // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
    console.log('making Middle Earth');
    // console.log("Trying to make middle earth.");

    // 1. create a section tag with an id of middle-earth
    const newSection = document.createElement('section')
    newSection.setAttribute('id', 'middle-earth')
    // 2. append the section to the body of the DOM.
    document.querySelector('body').append(newSection)
    // 3. use a for loop to iterate over the lands array that does the following:
    //   3a. creates an article tag (there should be one for each land when the loop is done)
    //   3b. gives each land article an `id` tag of the corresponding land name
    //   3c. creates an h1 with the name of the land as text content
    //   3d. appends the h1 to the article just created
    //   3e. appends each land to the middle-earth section
    for (let land of lands) {
      const newArticle = document.createElement('article')
      newArticle.setAttribute('id', land)
      const newH1 = document.createElement('h1')
      newH1.textContent = land
      newArticle.append(newH1)
      newSection.append(newArticle)
    }

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 1 complete - Made Middle Earth".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  makeMiddleEarth()
  // ===================================================================

  // ============
  // Chapter 2
  // ============
  const makeHobbits = function () {

    // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

    // 1. create a 'ul'
    const newUl = document.createElement('ul')
    // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a loop
    // 3. also, give each hobbit (`li`) a class of "hobbit"
    for (let hobbit of hobbits) {
      const newLi = document.createElement('li')
      newLi.textContent = hobbit
      newUl.append(newLi)
      newLi.classList.add('hobbit')
    }
    // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id
    const theShire = document.querySelector('#The-Shire')
    theShire.append(newUl)
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 2 complete - Made the Hobbits".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  makeHobbits()
  // ===================================================================

  // ============
  // Chapter 3
  // ============
  const keepItSecretKeepItSafe = function () {

    // 1. create an empty div with an id of 'the-ring'
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'the-ring')
    // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
    const frodo = document.querySelector('#The-Shire ul li')
    frodo.append(newDiv)
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  keepItSecretKeepItSafe()
  // ===================================================================

  // ============
  // Chapter 4
  // ============
  const makeBaddies = function () {

    // 1. display an unordered list of baddies in Mordor
    const newUl = document.createElement('ul')
    // 2. give each of the baddies a class of "baddy"
    for (let baddy of baddies) {
      const newLi = document.createElement('li')
      newLi.textContent = baddy
      newLi.classList.add('baddy')
      newUl.append(newLi)
    }
    // 3. remember to append the ul to Mordor
    const mordor = document.querySelector('#Mordor')
    mordor.append(newUl)
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 4 complete - Made the Baddies"..

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  makeBaddies()
  // ===================================================================

  // ============
  // Chapter 5
  // ============
  const makeBuddies = function () {

    // 1. create an aside tag and append it to middle-earth below mordor
    const newAside = document.createElement('aside')
    const middleEarth = document.querySelector('#middle-earth')
    middleEarth.append(newAside)
    // 2. display an unordered list of buddies in the aside
    const newUl = document.createElement('ul')
    // 3. give each of the buddies a class of "buddy"
    for (let buddy of buddies) {
      const newLi = document.createElement('li')
      newLi.textContent = buddy
      newLi.classList.add('buddy')
      newUl.append(newLi)
    }
    // 4. don't forget to append them to the aside
    newAside.append(newUl)
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 5 complete - Made the Buddies".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  makeBuddies()
  // ===================================================================

  // ============
  // Chapter 6
  // ============

  const leaveTheShire = function () {
    // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
    // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
    const hobbits = document.querySelector('#The-Shire ul')
    const rivendell = document.querySelector('#Rivendell')
    rivendell.append(hobbits)
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 6 complete - Left the Shire"

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  leaveTheShire()
  // ===================================================================

  // ============
  // Chapter 7
  // ============
  const beautifulStranger = function () {

    // 1. change the buddy 'Strider' text to "Aragorn"
    const strider = document.querySelector('#middle-earth aside ul li:nth-child(4)')
    strider.textContent = "Aragorn"
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  beautifulStranger()
  // ===================================================================

  // ============
  // Chapter 8
  // ============
  const forgeTheFellowShip = function () {

    // 1. create a new div with an id 'the-fellowship'
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'the-fellowship')
    // 2. add an h1 with the text 'The Fellowship' to this new div
    const newH1 = document.createElement('h1')
    newH1.textContent = "The Fellowship"
    newDiv.append(newH1)
    // 3. append the fellowship to middle-earth
    const middleEarth = document.querySelector('#middle-earth')
    middleEarth.append(newDiv)
    // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
    const hobbits = document.querySelector('#Rivendell ul')
    const buddies = document.querySelector('#middle-earth aside ul')
    newDiv.append(hobbits, buddies)
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 8 complete - The Fellowship is created"

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  forgeTheFellowShip()
  // ===================================================================

  // ============
  // Chapter 9
  // ============
  const theBalrog = function () {

    // 1. change the 'Gandalf' text to 'Gandalf the White'
    const gandalf = document.querySelector('#middle-earth #the-fellowship ul:last-child li')
    gandalf.textContent = "Gandalf the White"
    // 2. add a class "the-white" to this element
    gandalf.classList.add('the-white')
    // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border  
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 9 complete - Updated Gandalf"

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  theBalrog()
  // ===================================================================

  // ============
  // Chapter 10
  // ============
  const hornOfGondor = function () {

    // 1. create a pop-up alert that the horn of gondor has been blown
    alert("Horn of Gondor has been blown!")
    // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
    const boromir = document.querySelector('#middle-earth #the-fellowship ul:last-child li:last-child')
    boromir.style.textDecoration = "line-through"
    // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
    const urukHai = document.querySelector('#Mordor ul li:nth-child(3)')
    urukHai.remove()
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // hornOfGondor()
  // ===================================================================

  // ============
  // Chapter 11
  // ============
  const itsDangerousToGoAlone = function () {

    // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
    const frodo = document.querySelector('#middle-earth #the-fellowship ul li')
    const sam = document.querySelector('#middle-earth #the-fellowship ul li:nth-child(2)')

    const mordor = document.querySelector('#Mordor')
    mordor.append(frodo, sam)
    
    // 2. add a div with an id of 'mount-doom' to Mordor
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'mount-doom')
    mordor.append(newDiv)
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  itsDangerousToGoAlone()
  // ===================================================================

  // ============
  // Chapter 12
  // ============
  const weWantsIt = function () {

    // 1. Create a div with an id of 'gollum' and add it to Mordor
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'gollum')
    const mordor = document.querySelector('#Mordor')
    mordor.append(newDiv)
    
    // 2. Move the ring from Frodo and give it to Gollum
    const ring = document.querySelector('#the-ring')
    newDiv.append(ring)
    
    // 3. Move Gollum into Mount Doom
    const mountDoom = document.querySelector('#mount-doom')
    mountDoom.append(newDiv)
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  weWantsIt()
  // ===================================================================

  // ============
  // Chapter 13
  // ============
  const thereAndBackAgain = function () {

    // 1. remove Gollum and the Ring from the DOM
    const gollum = document.querySelector('#gollum')
    gollum.remove()
    
    // 2. remove all the baddies from the DOM
    const baddies = document.querySelector('#Mordor ul')
    baddies.remove()
    // 3. Move all the hobbits back to the shire
    const newUl = document.createElement('ul')
    const hobbits = document.querySelectorAll('.hobbit')
    for (let hobbit of hobbits) {
      newUl.append(hobbit)
    }
    const theShire = document.querySelector('#The-Shire')
    theShire.append(newUl)

    const theFellowshipUl = document.querySelector('#the-fellowship ul')
    theFellowshipUl.remove()
  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  thereAndBackAgain()
  // ===================================================================


  // =====================================
  // Don't change anything below this line
  // =====================================
  // =====================================
  // This code is loading all of the event listeners for the buttons in your application.
  // =====================================

  document.querySelector('#b1').addEventListener('click', makeMiddleEarth)
  document.querySelector('#b2').addEventListener('click', makeHobbits)
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe)
  document.querySelector('#b4').addEventListener('click', makeBaddies)
  document.querySelector('#b5').addEventListener('click', makeBuddies)
  document.querySelector('#b6').addEventListener('click', leaveTheShire)
  document.querySelector('#b7').addEventListener('click', beautifulStranger)
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip)
  document.querySelector('#b9').addEventListener('click', theBalrog)
  document.querySelector('#b10').addEventListener('click', hornOfGondor)
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone)
  document.querySelector('#b12').addEventListener('click', weWantsIt)
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain)
})
