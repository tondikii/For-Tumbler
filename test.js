const mood = {
    bahagia: [
        "tersenyum",
        "senang",
        "tertawa",
        "berbunga",
    ],
    
    sedih: [
        "menangis",
        "murung",
        "kangen"
    ],
    galau: [
          "putus",
          "kangen",
          "galau",
    ],
    
    semangat: [
          "berkobar",
          "nasionalis",
          "berapi-api"
    ]
     
  }

  function moodKu(customer,database){
    let output = ""
    bahagia = 0
    sedih = 0
    semangat = 0
    galau = 0
    for (let i = 0; i < customer.ciri.length; i++) {
        for (let j = 0; j < database.bahagia.length; j++) {
           if(database.bahagia[j] === customer.ciri[i]){
               bahagia++
           }
            
        }
        for (let j = 0; j < database.sedih.length; j++) {
            if(database.sedih[j] === customer.ciri[i]){
                sedih++
            }
             
        }
        for (let j = 0; j < database.galau.length; j++) {
            if(database.galau[j] === customer.ciri[i]){
                galau++
            }
             
        }
        for (let j = 0; j < database.semangat.length; j++) {
            if(database.semangat[j] === customer.ciri[i]){
                semangat++
            }
             
        }
    }
    if (bahagia > sedih && bahagia > galau && bahagia > semangat ) {
        return 'bahagia'
    } else if (sedih > bahagia && sedih > galau && sedih > semangat) {
        return 'sedih'
    } else if (galau> bahagia && galau > sedih && galau > semangat) {
        return 'galau'
    } else if (semangat> bahagia && semangat > sedih && semangat > galau) {
        return 'semangat'
    }

  }
  console.log(
    moodKu(
      {
        nama: "thanos",
        ciri: ["putus"],
      },
      mood
    )
  );