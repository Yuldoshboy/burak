/*
TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda
*/

function longWord(str: string): string {
  const words = str.split(" ");
  console.log("The words in the sentence are as follows:", words);
  const lengths = words.map(word => word.length);
  console.log("Length of the words in the sentence are as follows:", lengths);
  let longestWord = '';
  words.forEach(word => {
      if (word.length >= longestWord.length) {
          longestWord = word;
      }
  });
  return longestWord;
}

const result = longWord("Max is from Uzbekistan and he is very talanted programmer!");
console.log("The longest word in the sentence is:", result);

/*
TASK-I
TASK I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.
*/

// function list(array: number[]): number {

//   let qiymat = array[0];
//   let soni = 0;

//   for (let ele of array) {
//     const count = array.filter(x => x === ele).length;
//     if (count > soni) {
//       soni = count;
//       qiymat = ele; 
//     }
//   }

//   return qiymat;
// }

// // Test
// const result = list([1, 2, 3, 4, 3, 5, 3, 6, 3, 7, 3]);
// console.log("Result:", result);

/*
H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"
*/

// function number(word: any) {
//   let arr = word.split("").filter((ele: any) => ele >= 0 ).join("");
//     return arr;
//   }
  
//   const result = number("asrgard67000n57");
//   console.log("Result:", result);
//   console.log(typeof result);

/*
H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"
*/


// function musbatTopish(array:number[]):string {
//   const musbat = array.filter((num) => num > 0);
//   return musbat.join(''); 
// }

// console.log(musbatTopish([5, -3, 22, -8, 55]));



/*
TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.
*/

// function findIndex(array: any) {
//     let x = Math.max(...array);
//     let index = array.indexOf(x);
//     console.log(`Max Value is: ${x}, and it index is: ${index}`);
//   }
  
//   findIndex([21, 54, 25, 11, 88]);

// TASK F
// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.
// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

// function doubleCharacter(word) {
//     let list = [];
//     for (let char of word.toLowerCase()) {
//         if (list.includes(char)) {
//             return true;
//         }
//         list.push(char);
//     }
//     return false;
//   }
  
//   const result = doubleCharacter("nimadir");
  
  // E-TASK: 
  
  // Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
  // MASALAN: getReverse("hello") return qilsin "olleh"
  
  
  // function teskari(word) {
  //   let word1 = word.split("");
  //   let word2 = word1.reverse(); 
  //   let reversedWord = word2.join(""); 
  
  //   return reversedWord;
  // }
  
  // const result = teskari("albattakelajakbuyuk");
  // >>>>>>> refs/remotes/origin/master
  // console.log("Result:", result);
  
  
  // D-TASK: 
  
  // Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
  // MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
  
  // function findString(word1, word2) {
  //   let arr = word1.split("").sort();
  //   let arr1 = word2.split("").sort();
    
  //   console.log(arr);
  //   console.log(arr1);
    
  //   const result = arr.length === arr1.length && arr1.every((index, ele) => index === arr[ele]);
  //   console.log(`Are the letters of "${word1}" and "${word2}" are the same?`, result);
  // }
  
  // findString("uzbekistan", "tanuzbkise"); 
  
  // findString("mitgroup", "gropumi");
  
  
  
  // MITASK-C
  
  // Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
  // MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
  
  // @MITASK
  
  // class Shop {
  //   //state
  //   bread;
  //   wheat;
  //   cola;
  //   time;
  
  //   //constructor
  //   constructor(bread, wheat, cola, time) {
  //     this.bread = bread;
  //     this.wheat = wheat;
  //     this.cola = cola;
  //     this.time == time;
  //   }
  
  //   shop_qoldiq() {
  //     const now = new Date();
  //     console.log(
  //       `Available products in the store at ${now.toLocaleString()}: Bread-${this.bread
  //       } loave(s); Wheat-${this.wheat} bag(s); cola-${this.cola} bottle(s)`
  //     );
  //   }
  
  //   shop_sotish(amount) {
  //     this.bread -= amount;
  //   }
  
  //   shop_qabul(qabul) {
  //     this.cola += qabul;
  //   }
  // }
  
  // const result = new Shop(4, 5, 5);
  // result.shop_qoldiq();
  // console.log("=========================");
  // result.shop_sotish(3);
  // result.shop_qoldiq();
  // console.log("=========================");
  // result.shop_qabul(4);
  // result.shop_qoldiq();
  
  //   // B-TASK:
  
  // // Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
  // // MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
  
  // function task_b(string) {
  //     let m = 0;
  //     const a = string.split("");
  //     a.forEach(element => {
  //         if (!isNaN(element) && Number(element) >= 0) {
  //             m++;
  //         }
  //     });
  //     return m;
  // }
  
  // console.log(task_b("dfdfhhsdyhsd4h65gdf4615v56z4v8947zsd1g874dzsd1vg"));