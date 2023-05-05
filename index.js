const petsData = [
    {
      namn: "Yasurio",
      födelseår: "temp",
      info: "jkasldö asldk jaölsdkf",
      birthYear: 2017,
      photo: href="Images/Yasuria.JPG"
    },
    {
      namn: "Tori",
      födelseår: "temp",
      birthYear: 2008,
      photo: "images/Tori2.jpg"
    },
    {
      namn: "Zebrina",
      födelseår: "temp",
      info: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "images/Zebrina.jpg"
    },
    {
        namn: "Oscarii",
        födelseår: "temp",
        info: ["tuna", "catnip", "celery"],
        birthYear: 2012,
        photo: "images/Oscarii.jpg"
      },
     
  ];
  
  function age(birthYear) {
    let calculatedAge = new Date().getFullYear() - birthYear;
    if(calculatedAge == 1) {
      return '1 year old'
    } else if (calculatedAge == 0) {
      return 'Baby'
    } else {
      return `${calculatedAge} years old`
    }
  }
  
  function foods(foods) {
    return `
      <h4> Favorite Foods </h4>
      <ul class="foods-list">
        ${foods.map(food => `<li>${food}</li>`).join('')}
      </ul>
    `
  }
  
  function petTemplate(pet) {
    return `
    <div class="animal"> 
     <img class="pet-photo" src="${pet.photo}"> 
     <h2 class="pet-namn">${pet.namn} 
     <span class="födelseår">(${pet.födelseår})</span></h2>
     <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
     ${pet.info}
    </div>
    `
  }
  
  document.getElementById("app").innerHTML = `
  <h1 class="app-title">Mina katter</h1>
  ${petsData.map(petTemplate).join("")}
  <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates</p>
  `;