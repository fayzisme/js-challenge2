# Asynchronus JS

### ES6 / EcmaScript 2015
> ES6 adalah sebuah singkatan dari ECMAScript versi 6. ES6 release pada tahun 2015, jadi ES6 sama ES 2015 sama.ECMAScript adalah sebuah standarisasi scripting language (Javascript) yang dibuat oleh European Computer Manufacturers Association (ECMA). Bahasa gampangnya ECMAScript itu standarnya, Javascript itu implementasinya.[ sumber](https://medium.com/@renopp/kenalan-dengan-es6-javascript-introduction-variable-arrow-function-part1-6bd5c148473b)


### Function
Function digunakan untuk melakukan serangkaian komputasi/prosedur yang dapat digunakan berulang kali.
1. Normal function
```sh
function hallo(param){
    return `Hallo ${param}`;
};
hallo()
```

2. Function expression
```sh
const hallo = function (param) {
    return `Hallo ${param}`;
};
hallo()
```

3. Arrow Function
```sh
const hallo = (param) => {
    return `Hallo ${param}`;
};
hallo()
```

### Array

Array adalah sekumpulan variabel yang memiliki tipe data yang sama dan dinyatakan dengan nama yang sama. Array merupakan konsep yang penting dalam pemrograman, karna array memungkinkan untuk menyimpan data maupun referensi objek dalam jumlah banyak dan terindeks.
```sh
const arr = [1,2,3,4]
```
##### Methods Array
- map
- forEach
- reduce
- splice
- join
dll.
```sh
arr.map((element, index) => {
    return element
})
```

### Object
Di JavaScript, objek adalah entitas yang mandiri dengan properti dan tipe. Bandingkan dengan cangkir, misalnya. Sebuah cangkir adalah objek dengan banyak properti. Cangkir punya warna, desain, berat, materi bahan, dll. Dengan cara sama, objek JavaScript juga punya banyak properti yang menjelaskan karakteristiknya.

```sh
const obj = {
    name : 'Jeneng',
    alamat : 'Kota Indonesia',
    metode : function () {
        return this.nama = 'Jeneng Dowo'
    }
}
```
##### Methods Array
- assign
- entries
- fromEntries
- freeze

Contoh :
```sh
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```
untuk lebih lengkapnya [ klik di sini](https://developer.mozilla.org/id/docs/Web/JavaScript/Panduan/Working_with_Objects)

### Asynchronous

Proses eksekusi kode pada program yang berjalan tidak berurutan tanpa harus menunggu perintah kode sebelumnya selesai.
```sh
console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");
// expected output: 
// Hi!
// Welcome to loupe.
// Click the button!
```
### Callback
Sebuah function yang meminta sebuah parameter berupa function kemudian akan menjalankan function tersebut.
```sh
function main(param1,param2,callBack){ 
  console.log(param1, param2) 
  callBack()  
}

function myCallback(){ 
  console.log ('hello callback')
}

main(1,2,myCallback)

/* ===================
Output :
 1 2
 hello callback
 */
```

#### Promises
Sebuah object yang mempresentasikan sebuah penyelesaian perintah (atau bahkan sebuah error pada proses asynchronous) dan me-return value-nya.
```sh
const janji = new Promise((resolve, reject) => {
    fs.readdir('/', (err, result) => {
        if (err) {
          reject(new Error(err.message))
        }
        resolve(result)
      })
});

janji
    .then(response => { console.log(response) })
    .catch(response => { console.log(response) })
```
Beberapa static method yang bisa dipakai didalam Promise.
- Promise.all([promise1, promise2])
- Promise.race([promise1, promise2])
- Promise.resolve(value)
- Promise.reject(value)

Beberapa method property yang ada di Promise.
- then()
- catch()
- finally()

#### Async - await
Async function merupakan function yang mengandung ekspresi `await` untuk menunggu hasil dari sebuah promise diselesaikan terlebih dahulu (synchronous).
```sh
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}

asyncCall();
```