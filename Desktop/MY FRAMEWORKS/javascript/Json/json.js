//1. keys need to be wrapped in
//2. no function allowed aas values in the JSON


// {
//     "firstName"="Jason"
// }

//Json Path

var school ={
    "name" : " Learning U",
    "Classes" : [
        {
        "title" : "Cooking is  fun",
        "courses id" :"Mr. Jones",
        "credit" : 3
        },
        {
        "title" : "Salads for people who liked salad",
        "courses id" :"Mr Cha",
        "credit" : 4
            },
        {
        "title" : "Soup for your belly",
        "courses id" :"Adam Smith",
        "credit" : 1
        }
    ]
}
school
school.name
school.Classes
school.Classes[0].title





//Minified vs Pretty

//Pretty print
// {
//     "name" : " Learning U",
//     "Classes" : [
//         {
//         "title" : "Cooking is  fun",
//         "courses id" :"Mr. Jones",
//         "credit" : 3
//         },
//         {
//         "title" : "Salads for people who liked salad",
//         "courses id" :"Mr Cha",
//         "credit" : 4
//             },
//         {
//         "title" : "Soup for your belly",
//         "courses id" :"Adam Smith",
//         "credit" : 1
//         }
//     ]
// }

// Minified
var school={"name":" Learning U","Classes":[{"title":"Cooking is  fun","courses id":"Mr. Jones","credit":3},{"title":"Salads for people who liked salad","courses id":"Mr Cha","credit":4},{"title":"Soup for your belly","courses id":"Adam Smith","credit":1}]}


