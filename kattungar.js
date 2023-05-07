const petsData = [
    {
      namn: "Cionella",
      födelseår: "temp",
      info: "jkasldö asldk jaölsdkf",
      birthYear: 2017,
      photo: "Images/Cionella1.jpg"
    },
    {
      namn: "Bizonia",
      födelseår: "temp",
      birthYear: 2008,
      photo: "Images/Bizonia.jpg"
    },
    {
      namn: "Asini",
      födelseår: "temp",
      info: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "Images/Asini.jpg"
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
  <h1 class="app-title">Mina Nuvarande kattungar</h1>
  ${petsData.map(petTemplate).join("")}
  <p class="footer">Denna listan kommer uppdateras varje gång jag får en ny kull med kattungar.</p>
  `;