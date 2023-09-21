console.log("Veikia")
let cities = [
    { name: "Vilnius",
        population : 544386 , 
        location : {
            continent: "Europe",
            country : "Lietuva"
        },
        touristAttractions : ["Gedimino pl.", "Katedra"],
        isCapital : true ,

    },
    { name: "Kaunas",
        population : 295269 , 
        location : {
            continent: "Europe",
            country : "Lietuva"
        },
        touristAttractions : ["Kaunas castle", "Art deco museum"],
        isCapital : false ,

    },
    { name: "Paris",
        population : 2161000 , 
        location : {
            continent: "Europe",
            country : "France"
        },
        touristAttractions : ["Eiffel Tower", "Museum d'Orsay", "Arc de Triomphe", "Les Catacombes"],
        isCapital : true ,

    },
    { name: "London",
        population : 8982000 , 
        location : {
            continent: "Europe",
            country : "UK"
        },
        touristAttractions : ["Tower of London", "London Eye"],
        isCapital : true ,

    },
    { name: "Oslo",
    population : 634293 , 
    location : {
        continent: "Europe",
        country : "Norway"
    },
    touristAttractions : ["Fram museum"],
    isCapital : true ,

    },
    { name: "Sidney",
    population : 5312000 , 
    location : {
        continent: "Australia",
        country : "Australia"
    },
    touristAttractions : ["Sydney Opera House",  "Sydney Harbour Bridge",  "Bondi Beach"],
    isCapital : false ,

    },
    { name: "New York",
    population : 8468000 , 
    location : {
        continent: "North America",
        country : "USA"
    },
    touristAttractions : ["Central park"],
    isCapital : false ,

    },
    { name: "Dubai",
    population : 3331000 , 
    location : {
        continent: "Asia",
        country : "UAE"
    },
    touristAttractions : ["Burj Khalifa", "Dubai Mall"],
    isCapital : false ,

    },
    { name: "Lisbon",
    population : 504718 , 
    location : {
        continent: "Europe",
        country : "Portugal"
    },
    touristAttractions : [" Aqueduto das Águas Livres", "Convento do Carmo"],
    isCapital : true ,

    },
    { name: "Hamburg",
    population : 1841000 , 
    location : {
        continent: "Europe",
        country : "Germany"
    },
    touristAttractions : [],
    isCapital : false ,

    }
    
    ]
   
    for(let i = 0; i<cities.length; i++){
        console.log(cities[i].name)

        console.log(cities[i].population)

        console.log(cities[i].location.continent)

        console.log(cities[i].location.country)

        let divElement = document.createElement('div')
        divElement.classList.add("cities")
        let allElement = document.querySelector('.all-page')
        let cityName = document.createElement('h2')
        let textElement = document.createElement('p')
        let attractionsText = document.createElement('h3')
        let ulElement = document.createElement('ul')
        

        allElement.append(divElement)
        
        divElement.append(cityName, textElement, attractionsText, ulElement)

        if(cities[i].isCapital){
            console.log(`${cities[i].name} is capital`)
            cityName.textContent = `${cities[i].name} (capital)`
            textElement.textContent = `${cities[i].name} city is located in ${cities[i].location.continent}, ${cities[i].location.country} and has population of ${cities[i].population} people. ${cities[i].name} is the capital of ${cities[i].location.country}`
            divElement.classList.add("capital")
        }else {
        console.log(`${cities[i].name} is't capital`)
        console.log(`${cities[i].name} tourist attractions :${cities[i].touristAttractions}`)
        cityName.textContent = cities[i].name
            
        textElement.textContent = `${cities[i].name} city is located in ${cities[i].location.continent}, ${cities[i].location.country} and has population of ${cities[i].population} people. `
        }
        
        for(let a = 0; a < cities[i].touristAttractions.length; a++){
            let liElement = document.createElement('li')
            liElement.textContent = cities[i].touristAttractions[a]
            ulElement.append(liElement)
            if(a==0){
                liElement.style.color = 'green'
            }else if (a >= 2 && a ===cities[i].touristAttractions.length-1){
                liElement.style.color = 'red'
            }
        }
        if (cities[i].touristAttractions.length === 1){        
            attractionsText.textContent = `Main Tourist attraction of ${cities[i].name} are :`
             }
            else if (cities[i].touristAttractions.length > 1){attractionsText.textContent = `Main Tourist attractions of ${cities[i].name} are :`
            }
            else {
                attractionsText.remove()
                ulElement.remove()
                
            }
            
       
        if(i % 2 === 0){
                
                divElement.classList.add('pair')
                
        }
        
        cityName.style.boxSizing = 'border-box'
        divElement.style.width = 'calc((100% - 20px)/2)'
        allElement.style.display = 'flex'
        allElement.style.flexWrap = 'wrap'
        allElement.style.gap = '20px'
        let greyElements = document.querySelectorAll('.pair')
        greyElements.forEach(greyElement =>{
            greyElement.style.backgroundColor = 'lightgrey'
        })
        let capitals = document.querySelectorAll('.capital h2')
        capitals.forEach(capital =>{
            capital.style.color = 'green'
        })
    }
    
    
        
    
  
    
        
      

    

       
       
        
        
      
    
          
        
       

    
    

