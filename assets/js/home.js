const data = {
    "currentDate": "2022-01-01",
    "events": [
      {
        _id: 1,
        "image":"https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        "name":"Collectivities Party",
        "date":"2021-12-12",
        "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
      },
      {
        _id: 2,
        "image":"https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        "name":"Korean style",
        "date":"2022-08-12",
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":10
      },
      {
        _id: 3,
        "image":"https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        "name":"Jurassic Park",
        "date":"2021-11-02",
        "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category":"Museum",
        "place":"Field",
        "capacity":82000,
        "assistance":65892,
        "price":15
      },
      {
        _id: 4,
        "image":"https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        "name":"Parisian Museum",
        "date":"2022-11-02",
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
      },
      {
        _id: 5,
        "image":"https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        "name":"Comicon",
        "date":"2021-02-12",
        "description":"For comic lovers, all your favourite characters gathered in one place.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":120000,
        "assistance":110000,
        "price":54
      },
      {
        _id: 6,
        "image":"https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        "name":"Halloween Night",
        "date":"2022-02-12",
        "description":"Come with your scariest costume and win incredible prizes.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":12000,
        "estimate":9000,
        "price":12
      },
      {
        _id: 7,
        "image":"https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        "name":"Metallica in concert",
        "date":"2022-01-22",
        "description":"The only concert of the most emblematic band in the world.",
        "category":"Music Concert",
        "place":"Room A"
        ,"capacity":138000,
        "estimate":138000,
        "price":150
      },
      {
        _id: 8,
        "image":"https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        "name":"Electronic Fest",
        "date":"2021-01-22",
        "description":"The best national and international DJs gathered in one place.",
        "category":"Music Concert",
        "place":"Room A",
        "capacity":138000,
        "assistance":110300,
        "price":250
        },
      {
        _id: 9,
        "image":"https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
        "name":"10K for life",
        "date":"2021-03-01",
        "description":"Come and exercise, improve your health and lifestyle.",
        "category":"Race",
        "place":"Soccer field",
        "capacity":30000,
        "assistance":25698,
        "price":3
      },
      {
        _id: 10,
        "image":"https://i.postimg.cc/zv67r65z/15kny.jpg",
        "name":"15K NY",
        "date":"2022-03-01",
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "assistance":2569800,
        "price":3
        },
      {
        _id: 11,
        "image":"https://i.postimg.cc/Sst763n6/book1.jpg",
        "name":"School's book fair",
        "date":"2022-10-15",
        "description":"Bring your unused school book and take the one you need.",
        "category":"Book Exchange",
        "place":"Room D1",
        "capacity":150000,
        "estimate":123286,
        "price":1
      },
      {
        _id: 12,
        "image":"https://i.postimg.cc/05FhxHVK/book4.jpg",
        "name":"Just for your kitchen",
        "date":"2021-11-09",
        "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category":"Book Exchange",
        "place":"Room D6",
        "capacity":130000,
        "assistance":90000,
        "price":100
      },
      {
        _id: 13,
        "image":"https://i.postimg.cc/vH52y81C/cinema4.jpg",
        "name":"Batman",
        "date":"2021-3-11",
        "description":"Come see Batman fight crime in Gotham City.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":11000,
        "assistance":9300,
        "price":225
      },
      {
        _id: 14,
        "image":"https://i.postimg.cc/T3C92KTN/scale.jpg",
        "name":"Avengers",
        "date":"2022-10-15",
        "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":9000,
        "estimate":9000,
        "price":250
      }
    ]
  }


/*funcion para crear las cards desde el array que le mande*/
  let fragmento = document.createDocumentFragment();
  function cards(array, containerCard){
    containerCard.innerHTML=''
    array.forEach((evento)=>{
      let div = document.createElement("div");
      div.className = "tarjeta"
      div.id = `${evento._id}`
      div.innerHTML += `<div class="img_tarjeta ad" style="background-image: url(${evento.image})" >
                          </div>
                          <div class="cuerpo_tarjeta">
                            <h3>${evento.name}</h3>
                            <p>${evento.description}</p>
                            <div class="precio_tarjeta">
                              <p>Price: ${evento.price}U$D</p>
                              <div class="boton_tarjeta">
                                <a class="btn btn-primary" href="./pages/details.html?id=${evento._id}">More</a>
                              </div>
                            </div>                    
                          </div>
                        </div>`
        fragmento.appendChild(div);
    })
    containerCard.appendChild(fragmento);
  }

  /*funcion para crear las categorias de los checkboxes desde el Json*/
function createCategories(array){
  items = [];
  array.events.forEach((categoria)=>{
    if(!items.includes(categoria.category)){
      items.push(categoria.category);
    }   
  })
  return items;
}

/*funcion para crear los checkboxes desde las categorias recien obtenidas*/
let fragmento1 = document.createDocumentFragment();
function crearCheckBoxes(array, containerCheckBoxes){
  let i = 0;
  array.forEach((categoria)=>{
    let div = document.createElement("div");
    div.className = "form-check"
    div.innerHTML += `<input class="form-check-input" type="checkbox" name ="category" value="${categoria}" id="flexCheckDefault${i}">
                      <label class="form-check-label" for="flexCheckDefault${i}">${categoria}</label>`
    fragmento1.appendChild(div);
    i++;
  })
  containerCheckBoxes.appendChild(fragmento1);
}

let fragmento2 = document.createDocumentFragment();
function mensaje(containerCard){
  let div = document.createElement("div");
  div.className = "no_hay_un_porongo"
  div.innerHTML += `<h1>Nada que ver lo que estas buscando</h1>`
  fragmento2.appendChild(div);
  containerCard.appendChild(fragmento2);
}


/*agregar un eventListener a la busqueda asi se filtra por categoria*/
let buscador = document.querySelector('input[placeholder="Search"]')
buscador.addEventListener('keyup',()=>{
  let checkBoxes = document.querySelectorAll('input[name="category"]')
  checkBoxes.forEach((checkbox)=>{
    checkbox.checked = false;
  })
  datafiltrada = [];
  data.events.forEach(element => {    
    if(element.category.toLowerCase().includes(buscador.value.toLowerCase())){
      datafiltrada.push(element);
    }
  })
  if(datafiltrada.length==0){
    /*Mostrar tarjeta o mensaje que no hay un carajo*/
    cards([],containerCard);
    mensaje(containerCard)
  }else{
    cards([],containerCard);
    cards(datafiltrada,containerCard);
  }
  
});


/*Inicio los checkboxes*/
let datos = createCategories(data)
crearCheckBoxes(datos, containerCheckBoxes);

/*Cargo por primera vez las cards con todos los datos*/
cards(data.events,containerCard);

/*Creo una funcion que filtra la data segun los checkboxes activos*/
function filtroArray(array, filtro){
  let dataFinal=[];
  array.forEach((evento)=>{
    filtro.forEach((categoria)=>{      
      if(evento.category==categoria){
        dataFinal.push(evento)
      }
    })
  })
  return dataFinal;
}

/*Inicializo el filtroArray con todas las categorias*/
filtroArray(data.events, datos)

/*agregar un eventListener a cada checkbox desde el elemento padre y obtengo su estado*/
let checkBoxes = document.querySelectorAll('input[name="category"]')
checkBoxes.forEach((checkbox)=>{
  checkbox.addEventListener('change',()=>{
    buscador.value='';
    let elementos=[]
    let listaChecked = document.querySelectorAll('input[name="category"]:checked')
    listaChecked.forEach((item)=>{
      elementos.push(item.defaultValue)
    })
    if(elementos.length==0){
      console.log('paso por aca');
      cards([],containerCard);
      cards(data.events,containerCard);
    }
    else{
      console.log('paso por allá');
      cards([],containerCard);      
      cards(filtroArray(data.events, elementos), containerCard)
    }
  })
})

/*hasta aca esta ok*/