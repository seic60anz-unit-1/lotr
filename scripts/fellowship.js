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
    const middleEarth = document.createElement('section');
    middleEarth.id = 'middle-earth';
    // 2. append the section to the body of the DOM.
    document.querySelector('body').appendChild(middleEarth);
    // 3. use a for loop to iterate over the lands array that does the following:
    //   3a. creates an article tag (there should be one for each land when the loop is done)
          for (let i of lands) {
            let artLand = document.createElement('article');
            document.querySelector('body').appendChild(artLand);
          }
    //   3b. gives each land article an `id` tag of the corresponding land name
          const listArts = document.querySelectorAll('article');
          for (let i = 0; i < lands.length; i++) {
            listArts[i].id = lands[i]
          }
    //   3c. creates an h1 with the name of the land as text content
          for (let i = 0; i < lands.length; i++) {
            let h1Land = document.createElement('h1');
            let textLand = document.createTextNode(lands[i]);
            h1Land.appendChild(textLand);
    //   3d. appends the h1 to the article just created
            document.querySelector('#'+lands[i]).appendChild(h1Land);
          }
    //   3e. appends each land to the middle-earth section
          for (let i = 0; i < lands.length; i++) {
            console.log(listArts[i])
            document.querySelector('#middle-earth').appendChild(listArts[i])
          }
  }
  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 1 complete - Made Middle Earth".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // makeMiddleEarth()
  // ===================================================================

  // ============
  // Chapter 2
  // ============
  const makeHobbits = function () {

    // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

    // 1. create a 'ul'
    // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a loop
    // 3. also, give each hobbit (`li`) a class of "hobbit"
    // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 2 complete - Made the Hobbits".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // makeHobbits()
  // ===================================================================

  // ============
  // Chapter 3
  // ============
  const keepItSecretKeepItSafe = function () {

    // 1. create an empty div with an id of 'the-ring'
    // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // keepItSecretKeepItSafe()
  // ===================================================================

  // ============
  // Chapter 4
  // ============
  const makeBaddies = function () {

    // 1. display an unordered list of baddies in Mordor
    // 2. give each of the baddies a class of "baddy"
    // 3. remember to append the ul to Mordor

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 4 complete - Made the Baddies"..

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // makeBaddies()
  // ===================================================================

  // ============
  // Chapter 5
  // ============
  const makeBuddies = function () {

    // 1. create an aside tag and append it to middle-earth below mordor
    // 2. display an unordered list of buddies in the aside
    // 3. give each of the buddies a class of "buddy"
    // 4. don't forget to append them to the aside

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 5 complete - Made the Buddies".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // makeBuddies()
  // ===================================================================

  // ============
  // Chapter 6
  // ============

  const leaveTheShire = function () {
    // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
    // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 6 complete - Left the Shire"

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // leaveTheShire()
  // ===================================================================

  // ============
  // Chapter 7
  // ============
  const beautifulStranger = function () {

    // 1. change the buddy 'Strider' text to "Aragorn"

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // beautifulStranger()
  // ===================================================================

  // ============
  // Chapter 8
  // ============
  const forgeTheFellowShip = function () {

    // 1. create a new div with an id 'the-fellowship'
    // 2. add an h1 with the text 'The Fellowship' to this new div
    // 3. append the fellowship to middle-earth
    // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 8 complete - The Fellowship is created"

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // forgeTheFellowShip()
  // ===================================================================

  // ============
  // Chapter 9
  // ============
  const theBalrog = function () {

    // 1. change the 'Gandalf' text to 'Gandalf the White'
    // 2. add a class "the-white" to this element
    // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 9 complete - Updated Gandalf"

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // theBalrog()
  // ===================================================================

  // ============
  // Chapter 10
  // ============
  const hornOfGondor = function () {

    // 1. create a pop-up alert that the horn of gondor has been blown
    // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
    // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

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
    // 2. add a div with an id of 'mount-doom' to Mordor

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // itsDangerousToGoAlone()
  // ===================================================================

  // ============
  // Chapter 12
  // ============
  const weWantsIt = function () {

    // 1. Create a div with an id of 'gollum' and add it to Mordor
    // 2. Move the ring from Frodo and give it to Gollum
    // 3. Move Gollum into Mount Doom

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // weWantsIt()
  // ===================================================================

  // ============
  // Chapter 13
  // ============
  const thereAndBackAgain = function () {

    // 1. remove Gollum and the Ring from the DOM
    // 2. remove all the baddies from the DOM
    // 3. Move all the hobbits back to the shire

  }

  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

  // ===================================================================
  // If you're tired of having to click the button each time to run your
  // function, uncomment the function call line below.
  // thereAndBackAgain()
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
