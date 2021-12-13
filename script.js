let ciparuSkaits;
let variantuSkaits;
let papildusVards;
let tabulasRindas = document.querySelector('.rindas');

const vardi1 = ['spavlains', 'milzīgs', 'jautrs', 'jocīgs', 'interesants'];
const vardi2 = ['gurķis', 'spainis', 'akmens', 'helikopters', 'sviestmaize'];
const vardi3 = ['skrien', 'peld', 'dejo', 'lido', 'smejas'];


function rand(maxCipars)
{
  random1 = Math.floor( Math.random() * maxCipars );
  return random1;
}


function veidotParoli(papildusVards,ciparuSkaits)
{
 let random1 = rand(vardi1.length);
 let random2 = rand(vardi2.length);
 let random3 = rand(vardi2.length);


  let paroleVards1 = tekstuSarezgit( vardi1[random1] );
  paroleVards1 = paroleVards1.replace('a','@');
 
  let paroleVards2;


  if( papildusVards != '' )
  {
    paroleVards2 = tekstuSarezgit( papildusVards );
  }
  else
  {
   paroleVards2 = tekstuSarezgit( vardi2[random2] );
  }


  let paroleVards3 = tekstuSarezgit( vardi3[random3] );


  let cipari = cipariParolei(ciparuSkaits);


  let parole = paroleVards1+paroleVards2+paroleVards3+cipari;
  
  return parole;
}






function cipariParolei(ciparuSkaits)
{
   let cipars = String();


   for (let i = 0; i < ciparuSkaits; i++) 
   {
     cipars += rand(9);
   }
   return cipars;
}
function tekstuSarezgit(teksts)
{
  if(rand(10) > 5)
  {
  teksts = teksts.replace('i','1');
 teksts = teksts.replace('a','@');
 }
  teksts = lieloPirmoBurtu(teksts);


  return teksts;
}
function lieloPirmoBurtu(vards)
{
  let pirmaisBurts = vards.substr(0, 1);
  pirmaisBurts = pirmaisBurts.toUpperCase();
  let parejaisVards = vards.substr(1);


 return pirmaisBurts+parejaisVards;
}






function generetParoles()
{
  ciparuSkaits = document.querySelector('#ciparuSkaits').value;
  variantuSkaits = document.querySelector('#variantuSkaits').value;
  papildusVards = document.querySelector('#papildusVards').value;
  tabulasRindas.innerHTML = '';
  
  for (let i = 0; i < variantuSkaits; i++) 
  {
    
    
    let parole = veidotParoli(papildusVards,ciparuSkaits);
    
    tabulasRindas.innerHTML += `
    <tr>
    <td>${i+1}</td>
    <td>${parole}</td>
    </tr>`;


  }//cikla beigas


}//generetParoles() beigas















//////////////////////////////////////////////////////////////////////////Vecais//////////////////////////////////////////////////////////////////////////////////////

// function randFunc(maxCipars) {
//     let random1 = Math.floor(Math.random() * maxCipars); // math.floor noapaļo uz leju
//     return random1
// }

// // function generet(papildusVards, ciparuSkaits) {

// //     tabulasRindas.innerHTML =``;

// function veidotParoli(papildusVards,ciparuSkaits){

//  let random1 = rand(vardi1.length);
//  let random2 = rand(vardi2.length);
//  let random3 = rand(vardi2.length);


//   let paroleVards1 = tekstuSarezgit( vardi1[random1] );

//   paroleVards1 = paroleVards1.replace('a','@');
 
//   let paroleVards2;


//   if( papildusVards != '' )
//   {
//     paroleVards2 = tekstuSarezgit( papildusVards );
//   }
//   else
//   {
//    paroleVards2 = tekstuSarezgit( vardi2[random2] );
//   }


//   let paroleVards3 = tekstuSarezgit( vardi3[random3] );


//   let cipari = cipariParolei(ciparuSkaits);


//   let parole = paroleVards1+paroleVards2+paroleVards3+cipari;
  
//   return parole;
// }






// function cipariParolei(ciparuSkaits)
// {
//    let cipars = String();


//    for (let i = 0; i < ciparuSkaits; i++) 
//    {
//      cipars += rand(9);
//    }
//    return cipars;
// }
// function tekstuSarezgit(teksts)
// {
//   if(rand(10) > 5)
//   {
//   teksts = teksts.replace('i','1');
//  teksts = teksts.replace('a','@');
//  }
//   teksts = lieloPirmoBurtu(teksts);


//   return teksts;
// }
// function lieloPirmoBurtu(vards)
// {
//   let pirmaisBurts = vards.substr(0, 1);
//   pirmaisBurts = pirmaisBurts.toUpperCase();
//   let parejaisVards = vards.substr(1);


//  return pirmaisBurts+parejaisVards;
// }

// function generetParoles()
// {
//   ciparuSkaits = document.querySelector('#ciparuSkaits').value;
//   variantuSkaits = document.querySelector('#variantuSkaits').value;
//   papildusVards = document.querySelector('#papildusVards').value;
//   tabulasRindas.innerHTML = '';


// for (let i = 0; i < variantuSkaits; i++) {
//     // ciklā ieliek paroles veidošanu un izdruku
//     // let parole = vardi1[0]+vardi2[0]+vardi3[0];
//     // console.log(parole);

//     // let random1 = randFunc(vardi1.length);
//     // let random2 = randFunc(vardi2.length);
//     // let random3 = randFunc(vardi3.length);

//     // let parole1 = vardi1[rand1];
//     // let parole2 = vardi2[rand2];
//     // let parole3 = vardi3[rand3];

//     // let random= Math.ceil(Math.random()*10);
//     // parole=parole1+parole2+parole3+random; /////////////////////////////////////////////////////////////////////////////////////

//     let parole = veidotParoli(papildusVards,ciparuSkaits);

//     paroleVards1 = paroleVards1.replace('a','@');
 
//     let paroleVards2;
  
  
//     if( papildusVards != '' )
//     {
//       paroleVards2 = tekstuSarezgit( papildusVards );
//     }
//     else
//     {
//      paroleVards2 = tekstuSarezgit( vardi2[random2] );
//     }
  
  
//     let paroleVards3 = tekstuSarezgit( vardi3[random3] );
  
  
//     let cipari = cipariParolei(ciparuSkaits);
  
  
//     let parole = paroleVards1+paroleVards2+paroleVards3+cipari;
    
//     return parole;
//   }
  
  
//   function cipariParolei(ciparuSkaits){

//      let cipars = String();
  
  
//      for (let i = 0; i < ciparuSkaits; i++) {

//        cipars += rand(9);
//     }
//      return cipars;
//   }
//   function tekstuSarezgit(teksts){
//     if(rand(10) > 5){

//     teksts = teksts.replace('i','1');
//    teksts = teksts.replace('a','@');
//    }

//    teksts = lieloPirmoBurtu(teksts);
  
  
//     return teksts;
//   }

//   function lieloPirmoBurtu(vards){

//     let pirmaisBurts = vards.substr(0, 1);
//     pirmaisBurts = pirmaisBurts.toUpperCase();
//     let parejaisVards = vards.substr(1);
  
  
//    return pirmaisBurts+parejaisVards;
//   }
  
  
  
//   function generetParoles() {

//     ciparuSkaits = document.querySelector('#ciparuSkaits').value;
//     variantuSkaits = document.querySelector('#variantuSkaits').value;
//     papildusVards = document.querySelector('#papildusVards').value;
//     tabulasRindas.innerHTML = '';
    
//     for (let i = 0; i < variantuSkaits; i++) {
      
      
//     let parole = veidotParoli(papildusVards,ciparuSkaits);
  

//      tabulasRindas.innerHTML += `
//      <tr>
//         <td>${i + 1}</td>
//          <td>${parole}</td>
//      </tr>` // pievieno +  
    
//         }
//     }
// }
