console.log("----------\nswitch case statements\n----------");

let text;
let fruit = prompt("type your favorite fruit");
banana, lime, limon, orange, apple;

switch (fruit.toLowerCase()) {
  case "banana":
    text = "I like Banana!🍌";
    break;
  case "lime":
  case "lemon":
  case "orange":
    text = `I am not a fan of ${fruit}`;
    break;
  case "apple":
    text = `I like 🍎🍏`;
    break;

  default:
    text = "I don't know that fruit";
}

const day = prompt("enter a day: ").toLowerCase();

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
    console.log(`Inclass`);
    break;
  case "friday":
    console.log(`Teamwork`);
    break;
  case "saturday":
    console.log(`Inclass and workshop`);
    break;
  case "sunday":
    console.log(`Self study.`);
    break;
  default:
    console.log(`${day} is not a day.`);
}

//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

console.log("OYUN");

let devam;
do {
  let hak = 5;
  const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
  console.log(rasgeleSayi);

  do {
    const tahmin = Number(prompt("Lütfen 0-100 arasında bir sayi giriniz:"));
    hak -= 1;
    if (tahmin === rasgeleSayi) {
      console.log(`Tebrikler ${5 - hak}. denemede bildiniz.🥳`);
      break;
    } else {
      console.log(`Dikkat ${hak} hakkınız kaldı`);
      if (tahmin < rasgeleSayi) {
        console.log("ARTTIR ⬆️");
      } else {
        console.log("AZALT ⬇️");
      }
    }
  } while (hak > 0);

  if (hak === 0) {
    console.log("Üzgünüz oyunu kaybettiniz 😔");
  }

  devam = prompt("Yeniden oynamak ister misiniz e/h?");
} while (devam == "e" || devam == "E");

console.log("Yine bekleriz");

console.log("****** LOOPS *******");

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************
// Math.floor() =>aşağıya yuvarlar
// Math.ceil() =>sürekli yukarıya yuvarlar
// Math.round() => değerine göre yuvarlar.
// Math.trunc() => kesirli sayının tam kısmı alır.

// for (let i = 1; i <= 10; i++) {
//   const randomSayi = Math.floor(Math.random() * 100 + 1);
//   console.log(randomSayi);
// }

// console.log('Program bitti');

//? Ornek: 1 den n kadar sayıları toplayan kodu yazınız.

// const n = prompt('n sayisini girinz:');
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//   toplam += i;
// }

// console.log('Toplam:', toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

//******************** WHILE ******************

// let i = 1;
// while (i <= 5) {
//   console.log('Merhaba-', i);
//   i++;
// }

// console.log('Bitti');

// let not = prompt('Lütfen notunuzu giriniz (0-100):');

// while (not < 0 || not > 100) {
//   alert('Girdiğiniz not 0-100 arasında olmalıdır');
//   not = prompt('Lütfen notunuzu giriniz (0-100):');
// }
// console.log('Girdiğiniz not', not);

//* Ornek

//******************** DO-WHILE ******************
// let i = 1;

// do {
//   console.log('Merhaba-', i);
//   i++;
// } while (i <= 5);

let not;

do {
  not = prompt("Lütfen notunuzu giriniz (0-100):");
  if (not < 0 || not > 100) {
    alert("Girdiğiniz not 0-100 arasında olmalıdır");
  }
} while (not < 0 || not > 100);

console.log("Girdiğiniz not", not);

do {
  not = prompt("Lütfen notunuzu giriniz (0-100):");
  if (not < 0 || not > 100) {
    alert("Girdiğiniz not 0-100 arasında olmalıdır");
  }
} while (not < 0 || not > 100);

console.log("Girdiğiniz not", not);
