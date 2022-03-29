import { firestoreDB } from './index' // 👈 importar archivo de configuración de firebase
import { collection, setDoc, doc, getDoc } from 'firebase/firestore/lite'


const PRODUCTS = [
    {
     "Price": 16522,
     "CompanyName": "Maserati Grand Cherokee",
     "model": "XC90",
     "color": "plum",
     "imagen": "http://placeimg.com/640/480/cats",
     "Cantidad": 2527,
     "Stock": 60,
     "id": "1"
    },
    {
     "Price": 81662,
     "CompanyName": "Bugatti 2",
     "model": "PT Cruiser",
     "color": "pink",
     "imagen": "http://placeimg.com/640/480/abstract",
     "Cantidad": 98848,
     "Stock": 4,
     "id": "2"
    },
    {
     "Price": 23279,
     "CompanyName": "Polestar Model 3",
     "model": "F-150",
     "color": "yellow",
     "imagen": "http://placeimg.com/640/480/sports",
     "Cantidad": 98523,
     "Stock": 19,
     "id": "3"
    },
    {
     "Price": 72362,
     "CompanyName": "Bentley ATS",
     "model": "Grand Caravan",
     "color": "tan",
     "imagen": "http://placeimg.com/640/480/nature",
     "Cantidad": 89357,
     "Stock": 25,
     "id": "4"
    },
    {
     "Price": 55449,
     "CompanyName": "Volkswagen Element",
     "model": "Focus",
     "color": "tan",
     "imagen": "http://placeimg.com/640/480/animals",
     "Cantidad": 49579,
     "Stock": 52,
     "id": "5"
    },
    {
     "Price": 36916,
     "CompanyName": "Maserati Altima",
     "model": "Mustang",
     "color": "orchid",
     "imagen": "http://placeimg.com/640/480/sports",
     "Cantidad": 43845,
     "Stock": 70,
     "id": "6"
    },
    {
     "Price": 65208,
     "CompanyName": "Chevrolet Spyder",
     "model": "Spyder",
     "color": "purple",
     "imagen": "http://placeimg.com/640/480/food",
     "Cantidad": 64920,
     "Stock": 75,
     "id": "7"
    },
    {
     "Price": 79236,
     "CompanyName": "Chrysler Beetle",
     "model": "Grand Cherokee",
     "color": "teal",
     "imagen": "http://placeimg.com/640/480/nature",
     "Cantidad": 7802,
     "Stock": 29,
     "id": "8"
    },
    {
     "Price": 43864,
     "CompanyName": "Land Rover Prius",
     "model": "El Camino",
     "color": "grey",
     "imagen": "http://placeimg.com/640/480/fashion",
     "Cantidad": 37428,
     "Stock": 18,
     "id": "9"
    },
    {
     "Price": 87042,
     "CompanyName": "Smart Expedition",
     "model": "Grand Cherokee",
     "color": "orchid",
     "imagen": "http://placeimg.com/640/480/business",
     "Cantidad": 27937,
     "Stock": 19,
     "id": "10"
    },
    {
     "Price": 66067,
     "CompanyName": "Dodge Expedition",
     "model": "Charger",
     "color": "sky blue",
     "imagen": "http://placeimg.com/640/480/animals",
     "Cantidad": 70682,
     "Stock": 49,
     "id": "11"
    },
    {
     "Price": 48925,
     "CompanyName": "Nissan Spyder",
     "model": "Camry",
     "color": "olive",
     "imagen": "http://placeimg.com/640/480/animals",
     "Cantidad": 93846,
     "Stock": 47,
     "id": "12"
    },
    {
     "Price": 68913,
     "CompanyName": "Mini Charger",
     "model": "Civic",
     "color": "yellow",
     "imagen": "http://placeimg.com/640/480/fashion",
     "Cantidad": 35030,
     "Stock": 94,
     "id": "13"
    },
    {
     "Price": 69996,
     "CompanyName": "Volkswagen A8",
     "model": "Malibu",
     "color": "orange",
     "imagen": "http://placeimg.com/640/480/fashion",
     "Cantidad": 77673,
     "Stock": 83,
     "id": "14"
    },
    {
     "Price": 16038,
     "CompanyName": "Land Rover Fiesta",
     "model": "2",
     "color": "orchid",
     "imagen": "http://placeimg.com/640/480/technics",
     "Cantidad": 17578,
     "Stock": 11,
     "id": "15"
    },
    {
     "Price": 21654,
     "CompanyName": "Mazda Roadster",
     "model": "XTS",
     "color": "white",
     "imagen": "http://placeimg.com/640/480/people",
     "Cantidad": 14228,
     "Stock": 39,
     "id": "16"
    },
    {
     "Price": 18428,
     "CompanyName": "Chevrolet Aventador",
     "model": "El Camino",
     "color": "magenta",
     "imagen": "http://placeimg.com/640/480/business",
     "Cantidad": 82233,
     "Stock": 52,
     "id": "17"
    },
    {
     "Price": 31478,
     "CompanyName": "Dodge V90",
     "model": "Focus",
     "color": "indigo",
     "imagen": "http://placeimg.com/640/480/sports",
     "Cantidad": 8508,
     "Stock": 4,
     "id": "18"
    },
    {
     "Price": 33449,
     "CompanyName": "Jaguar Wrangler",
     "model": "V90",
     "color": "pink",
     "imagen": "http://placeimg.com/640/480/animals",
     "Cantidad": 10180,
     "Stock": 34,
     "id": "19"
    },
    {
     "Price": 47436,
     "CompanyName": "Mini Corvette",
     "model": "Accord",
     "color": "turquoise",
     "imagen": "http://placeimg.com/640/480/transport",
     "Cantidad": 622,
     "Stock": 21,
     "id": "20"
    },
    {
     "Price": 62138,
     "CompanyName": "Audi Cruze",
     "model": "Alpine",
     "color": "sky blue",
     "imagen": "http://placeimg.com/640/480/abstract",
     "Cantidad": 21939,
     "Stock": 26,
     "id": "21"
    },
    {
     "Price": 39807,
     "CompanyName": "Land Rover Focus",
     "model": "Silverado",
     "color": "salmon",
     "imagen": "http://placeimg.com/640/480/abstract",
     "Cantidad": 90510,
     "Stock": 6,
     "id": "22"
    },
    {
     "Price": 63105,
     "CompanyName": "Ferrari Taurus",
     "model": "Model S",
     "color": "magenta",
     "imagen": "http://placeimg.com/640/480/transport",
     "Cantidad": 77235,
     "Stock": 82,
     "id": "23"
    },
    {
     "Price": 39919,
     "CompanyName": "Ford Wrangler",
     "model": "Focus",
     "color": "yellow",
     "imagen": "http://placeimg.com/640/480/nightlife",
     "Cantidad": 7881,
     "Stock": 82,
     "id": "24"
    },
    {
     "Price": 27282,
     "CompanyName": "Cadillac Charger",
     "model": "Golf",
     "color": "gold",
     "imagen": "http://placeimg.com/640/480/cats",
     "Cantidad": 53410,
     "Stock": 70,
     "id": "25"
    },
    {
     "Price": 15612,
     "CompanyName": "Jaguar Accord",
     "model": "Mercielago",
     "color": "indigo",
     "imagen": "http://placeimg.com/640/480/city",
     "Cantidad": 18930,
     "Stock": 63,
     "id": "26"
    },
    {
     "Price": 48736,
     "CompanyName": "Dodge Ranchero",
     "model": "Countach",
     "color": "magenta",
     "imagen": "http://placeimg.com/640/480/abstract",
     "Cantidad": 72365,
     "Stock": 61,
     "id": "27"
    },
    {
     "Price": 72417,
     "CompanyName": "Polestar XC90",
     "model": "LeBaron",
     "color": "lavender",
     "imagen": "http://placeimg.com/640/480/fashion",
     "Cantidad": 17417,
     "Stock": 70,
     "id": "28"
    },
    {
     "Price": 20534,
     "CompanyName": "Cadillac XC90",
     "model": "Impala",
     "color": "pink",
     "imagen": "http://placeimg.com/640/480/fashion",
     "Cantidad": 93587,
     "Stock": 85,
     "id": "29"
    },
    {
     "Price": 48030,
     "CompanyName": "Toyota Colorado",
     "model": "Model T",
     "color": "gold",
     "imagen": "http://placeimg.com/640/480/nature",
     "Cantidad": 30110,
     "Stock": 17,
     "id": "30"
    },
    {
     "Price": 2516,
     "CompanyName": "BMW Roadster",
     "model": "Beetle",
     "color": "sky blue",
     "imagen": "http://placeimg.com/640/480/people",
     "Cantidad": 49629,
     "Stock": 21,
     "id": "31"
    },
    {
     "Price": 32958,
     "CompanyName": "Bugatti Element",
     "model": "Corvette",
     "color": "ivory",
     "imagen": "http://placeimg.com/640/480/transport",
     "Cantidad": 49414,
     "Stock": 65,
     "id": "32"
    },
    {
     "Price": 74297,
     "CompanyName": "Nissan 911",
     "model": "El Camino",
     "color": "tan",
     "imagen": "http://placeimg.com/640/480/animals",
     "Cantidad": 9610,
     "Stock": 53,
     "id": "33"
    },
    {
     "Price": 50544,
     "CompanyName": "Tesla Spyder",
     "model": "Land Cruiser",
     "color": "grey",
     "imagen": "http://placeimg.com/640/480/business",
     "Cantidad": 34969,
     "Stock": 92,
     "id": "34"
    },
    {
     "Price": 60862,
     "CompanyName": "Lamborghini Colorado",
     "model": "Malibu",
     "color": "tan",
     "imagen": "http://placeimg.com/640/480/nature",
     "Cantidad": 6098,
     "Stock": 59,
     "id": "35"
    },
    {
     "Price": 51481,
     "CompanyName": "Ferrari A4",
     "model": "A4",
     "color": "fuchsia",
     "imagen": "http://placeimg.com/640/480/nature",
     "Cantidad": 89270,
     "Stock": 32,
     "id": "36"
    },
    {
     "Price": 98969,
     "CompanyName": "Honda Model T",
     "model": "Aventador",
     "color": "mint green",
     "imagen": "http://placeimg.com/640/480/fashion",
     "Cantidad": 82802,
     "Stock": 83,
     "id": "37"
    },
    {
     "Price": 92164,
     "CompanyName": "Jaguar Jetta",
     "model": "Model 3",
     "color": "red",
     "imagen": "http://placeimg.com/640/480/animals",
     "Cantidad": 6478,
     "Stock": 40,
     "id": "38"
    },
    {
     "Price": 76927,
     "CompanyName": "Audi Land Cruiser",
     "model": "911",
     "color": "fuchsia",
     "imagen": "http://placeimg.com/640/480/fashion",
     "Cantidad": 88375,
     "Stock": 94,
     "id": "39"
    },
    {
     "Price": 45304,
     "CompanyName": "Rolls Royce Model T",
     "model": "Aventador",
     "color": "pink",
     "imagen": "http://placeimg.com/640/480/food",
     "Cantidad": 39983,
     "Stock": 93,
     "id": "40"
    },
    {
     "Price": 58889,
     "CompanyName": "Honda Golf",
     "model": "Impala",
     "color": "mint green",
     "imagen": "http://placeimg.com/640/480/nightlife",
     "Cantidad": 68835,
     "Stock": 14,
     "id": "41"
    },
    {
     "Price": 51524,
     "CompanyName": "Land Rover 911",
     "model": "Malibu",
     "color": "grey",
     "imagen": "http://placeimg.com/640/480/technics",
     "Cantidad": 28156,
     "Stock": 65,
     "id": "42"
    },
    {
     "Price": 58151,
     "CompanyName": "Chrysler F-150",
     "model": "Volt",
     "color": "violet",
     "imagen": "http://placeimg.com/640/480/business",
     "Cantidad": 27379,
     "Stock": 46,
     "id": "43"
    },
    {
     "Price": 79188,
     "CompanyName": "Nissan Camry",
     "model": "Expedition",
     "color": "purple",
     "imagen": "http://placeimg.com/640/480/animals",
     "Cantidad": 64569,
     "Stock": 33,
     "id": "44"
    },
    {
     "Price": 99331,
     "CompanyName": "Tesla Model T",
     "model": "Grand Cherokee",
     "color": "indigo",
     "imagen": "http://placeimg.com/640/480/transport",
     "Cantidad": 16227,
     "Stock": 13,
     "id": "45"
    },
    {
     "Price": 42494,
     "CompanyName": "Honda Charger",
     "model": "Charger",
     "color": "violet",
     "imagen": "http://placeimg.com/640/480/technics",
     "Cantidad": 90450,
     "Stock": 3,
     "id": "46"
    },
    {
     "Price": 59765,
     "CompanyName": "Ferrari Model T",
     "model": "LeBaron",
     "color": "blue",
     "imagen": "http://placeimg.com/640/480/animals",
     "Cantidad": 71814,
     "Stock": 10,
     "id": "47"
    },
    {
     "Price": 74683,
     "CompanyName": "Bentley 2",
     "model": "XC90",
     "color": "white",
     "imagen": "http://placeimg.com/640/480/animals",
     "Cantidad": 29652,
     "Stock": 62,
     "id": "48"
    },
    {
     "Price": 95985,
     "CompanyName": "Bugatti Cruze",
     "model": "Cruze",
     "color": "red",
     "imagen": "http://placeimg.com/640/480/fashion",
     "Cantidad": 97867,
     "Stock": 40,
     "id": "49"
    },
    {
     "Price": 44604,
     "CompanyName": "Chevrolet Roadster",
     "model": "Golf",
     "color": "orchid",
     "imagen": "http://placeimg.com/640/480/food",
     "Cantidad": 5614,
     "Stock": 8,
     "id": "50"
    }
   ]
async function dataToFirebase() {
    PRODUCTS.forEach((item) => {     
        // remplazar por el nombre de la coleccion 👇
        const nombreDeColeccion = "cars"

       const newItem = doc(collection(firestoreDB, nombreDeColeccion ));

       setDoc(newItem, item).then(() => {
           console.log("Document written with idOLD: ", newItem.id)})
        .catch(err => {
            console.error("Error adding document: ", err);
        });
    });
}

export default dataToFirebase;

