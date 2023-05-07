const petsData = [
    {
      namn: "Yasurio",
      födelseår: "22 februari 2021",
      info: "Yassi (Carpe Feline's Yasuria) En svart-vit liten dam som är tänkt att bli min avelshona om hon är ok på sitt kommande hjärtultraljud.",
      photo: "Images/Yasuria.jpg"
    },
    {
      namn: "Tori",
      födelseår: "Maj 2020",
      info: "Tori (Dagdrivarn Lias Vittoria) är en fd avelshona som fick en tarminvagination när hennes kull var knappt fem veckor gammal. Hon är svartsmoke och vit. Hon har blivit kastrerad pga att jag inte vill utsätta henne för en kull ungar till.",
      photo: "Images/Tori2.jpg"
    },
    {
      namn: "Zebrina",
      födelseår: "22 februari 2022",
      info: "Piplisa (Carpe Feline's Zebrina), Piplisa är svartsilvertabby och kullsyster till Yassi och har blivit kvar från den kullen. Piplisa är numera kastrerad och kommer att flytta till eget hem. Hon pratar alltid, därav sitt smeknamn. ",
      photo: "Images/Zebrina.jpg"
    },
    {
        namn: "Oscarii",
        födelseår: "10 juli 2021",
        info: "Oreo (Carpe Feline's Oscarii) är en svart herre med lite vitt. Han bor i foderhem och blir bortskämd. Han har träffat två honor hittills och ska få träffa några till, sedan blir det pension för honom. ",
        photo: "Images/Oscarii.jpg"
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
        <p class="info">${pet.info}</p>
    </div>
    `
  }
  
  document.getElementById("app").innerHTML = `
  <h1 class="app-title">Mina katter</h1>
  ${petsData.map(petTemplate).join("")}
  <p class="footer">Denna listan kanske inte är helt uppdaterad, isåfall uppdateras den snarast.</p>
  `;