const recipes = [
  {
    name: "Quick Veggie Pasta",
    description: "A colorful, easy pasta dish with fresh vegetables and a light tomato sauce.",
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    servings: "2 servings",
    time: "25 minutes",
    tags: ["Vegetarian", "Easy", "Weeknight"],
    ingredients: [
      "200g pasta (penne or fusilli)",
      "1 tbsp olive oil",
      "1 small onion, diced",
      "2 garlic cloves, minced",
      "1 red bell pepper, sliced",
      "1 zucchini, chopped",
      "200g canned tomatoes",
      "50g baby spinach",
      "Salt and pepper to taste",
      "Fresh basil leaves for garnish"
    ],
    instructions: [
      "Cook the pasta according to package instructions until al dente, then drain and set aside.",
      "Heat olive oil in a large pan over medium heat. Add onion and cook until softened.",
      "Stir in garlic, bell pepper, and zucchini. Sauté for 5-6 minutes until the vegetables are tender.",
      "Add canned tomatoes, salt, and pepper. Simmer for 5 minutes until the sauce thickens slightly.",
      "Toss the cooked pasta and spinach into the sauce, stirring until the spinach wilts.",
      "Divide between plates and finish with fresh basil leaves."
    ]
  },
  {
    name: "Golden Chicken Stir-Fry",
    description: "A savory stir-fry with tender chicken, crisp vegetables, and a sesame soy glaze.",
    image: "https://www.themealdb.com/images/media/meals/rwvw8q1765660071.jpg",
    servings: "3 servings",
    time: "30 minutes",
    tags: ["Chicken", "Easy", "30-minutes"],
    ingredients: [
      "400g chicken breast, thinly sliced",
      "2 tbsp soy sauce",
      "1 tbsp honey",
      "1 tbsp rice vinegar",
      "1 tbsp sesame oil",
      "2 cups mixed stir-fry vegetables",
      "1 carrot, thinly sliced",
      "1 cup broccoli florets",
      "2 green onions, sliced",
      "Cooked rice to serve"
    ],
    instructions: [
      "Whisk soy sauce, honey, rice vinegar, and sesame oil in a small bowl.",
      "Heat a large skillet over high heat. Add chicken and cook until golden and cooked through.",
      "Remove the chicken and stir-fry the vegetables for 4-5 minutes until crisp-tender.",
      "Return the chicken to the pan and pour in the sauce. Stir until everything is coated and heated through.",
      "Serve over rice and sprinkle with green onions."
    ]
  },
  {
    name: "Warm Apple Cinnamon Oatmeal",
    description: "A comforting breakfast with tender apples, oats, and warming cinnamon notes.",
    image: "https://www.themealdb.com/images/media/meals/c400ok1764439058.jpg",
    servings: "2 servings",
    time: "15 minutes",
    tags: ["Breakfast", "Vegetarian", "Comfort"],
    ingredients: [
      "1 cup rolled oats",
      "2 cups milk or plant-based milk",
      "1 apple, peeled and diced",
      "1 tsp ground cinnamon",
      "2 tsp maple syrup",
      "Pinch of salt",
      "Chopped nuts or seeds for topping"
    ],
    instructions: [
      "Combine oats, milk, diced apple, cinnamon, and salt in a small saucepan.",
      "Bring to a gentle simmer over medium heat, stirring occasionally.",
      "Cook for 8-10 minutes until the oats are creamy and the apples are tender.",
      "Remove from heat and stir in maple syrup.",
      "Spoon into bowls and top with nuts or seeds if desired."
    ]
  },
  {
    name: "Creamy Mushroom Risotto",
    description: "A comforting risotto with tender mushrooms, Parmesan, and fresh herbs.",
    image: "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
    servings: "2 servings",
    time: "40 minutes",
    tags: ["Vegetarian", "Comfort", "Dinner"],
    ingredients: [
      "1 cup Arborio rice",
      "2 tbsp butter",
      "1 small onion, finely chopped",
      "2 garlic cloves, minced",
      "250g mixed mushrooms, sliced",
      "4 cups vegetable broth, warmed",
      "1/2 cup grated Parmesan",
      "2 tbsp chopped parsley",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Melt butter in a saucepan over medium heat. Add onion and cook until translucent.",
      "Stir in garlic and mushrooms, cooking until the mushrooms are tender.",
      "Add Arborio rice and toast for 1-2 minutes, stirring constantly.",
      "Gradually add warm broth, one ladle at a time, stirring until absorbed before adding more.",
      "Continue until the rice is creamy and al dente, about 25 minutes.",
      "Stir in Parmesan and parsley, then season with salt and pepper."
    ]
  },
  {
    name: "Berry Yogurt Parfait",
    description: "A layered breakfast parfait with creamy yogurt, fresh berries, and crunchy granola.",
    image: "https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg",
    servings: "1 serving",
    time: "10 minutes",
    tags: ["Breakfast", "Quick", "Healthy"],
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup mixed berries",
      "1/4 cup granola",
      "1 tbsp honey",
      "1 tsp chia seeds"
    ],
    instructions: [
      "Spoon half of the yogurt into a glass or bowl.",
      "Layer with half of the berries and granola.",
      "Add the remaining yogurt, top with berries, granola, honey, and chia seeds.",
      "Enjoy immediately while the granola is still crunchy."
    ]
  },
  {
    name: "Spiced Chickpea Stew",
    description: "A hearty vegetarian stew with chickpeas, tomatoes, and warming spices.",
    image: "https://www.themealdb.com/images/media/meals/7b862e1763194846.jpg",
    servings: "3 servings",
    time: "35 minutes",
    tags: ["Vegetarian", "Comfort", "Dinner"],
    ingredients: [
      "1 can chickpeas, drained and rinsed",
      "1 tbsp olive oil",
      "1 onion, diced",
      "2 garlic cloves, minced",
      "1 tsp ground cumin",
      "1 tsp smoked paprika",
      "1 can diced tomatoes",
      "1 cup vegetable broth",
      "Fresh cilantro to serve"
    ],
    instructions: [
      "Heat olive oil in a pot and sauté the onion until soft.",
      "Add garlic, cumin, and smoked paprika, cooking until fragrant.",
      "Stir in chickpeas, tomatoes, and vegetable broth.",
      "Simmer for 15-20 minutes until the stew thickens.",
      "Serve topped with fresh cilantro."
    ]
  },
  {
    name: "Citrus Avocado Salad",
    description: "A bright salad with mixed greens, avocado, citrus, and a honey-lime dressing.",
    image: "https://www.themealdb.com/images/media/meals/gr4lo51763791826.jpg",
    servings: "2 servings",
    time: "15 minutes",
    tags: ["Vegetarian", "Salad", "Quick"],
    ingredients: [
      "4 cups mixed salad greens",
      "1 ripe avocado, sliced",
      "1 orange, peeled and segmented",
      "1/2 cup sliced cucumber",
      "2 tbsp olive oil",
      "1 tbsp honey",
      "1 tbsp lime juice",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Whisk olive oil, honey, lime juice, salt, and pepper in a small bowl.",
      "Arrange salad greens, avocado, orange segments, and cucumber in a bowl.",
      "Drizzle the dressing over the salad and toss gently.",
      "Serve immediately."
    ]
  },
  {
    name: "Sunrise Breakfast Burrito",
    description: "A tasty breakfast burrito filled with scrambled eggs, beans, and cheese.",
    image: "https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg",
    servings: "2 servings",
    time: "20 minutes",
    tags: ["Breakfast", "Quick", "Savory"],
    ingredients: [
      "4 eggs",
      "1/4 cup milk",
      "1 cup black beans, warmed",
      "1/2 cup shredded cheddar cheese",
      "2 large flour tortillas",
      "1 small tomato, diced",
      "1/4 cup chopped cilantro",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Whisk eggs and milk together with salt and pepper.",
      "Cook the scrambled eggs in a nonstick pan until just set.",
      "Warm the tortillas and divide eggs, beans, cheese, tomatoes, and cilantro between them.",
      "Fold each tortilla into a burrito and serve warm."
    ]
  },
  {
    name: "Cinnamon Banana Toast",
    description: "A simple sweet toast topped with banana, cinnamon, and a drizzle of honey.",
    image: "https://www.themealdb.com/images/media/meals/as88dq1762772486.jpg",
    servings: "1 serving",
    time: "10 minutes",
    tags: ["Breakfast", "Quick", "Snack"],
    ingredients: [
      "1 slice whole grain bread",
      "1 ripe banana, sliced",
      "1 tsp butter",
      "1/2 tsp ground cinnamon",
      "1 tsp honey"
    ],
    instructions: [
      "Toast the bread until golden.",
      "Spread butter over the toast while still warm.",
      "Top with banana slices, sprinkle cinnamon, and drizzle with honey.",
      "Enjoy immediately."
    ]
  }
];

const listElement = document.getElementById("recipe-list");
const featuredRecipeElement = document.getElementById("featured-recipe");
const searchInput = document.getElementById("recipe-search");
const clearButton = document.getElementById("clear-search");
const favoriteCountElement = document.getElementById("favorite-count");
const ratingStars = document.querySelectorAll(".star");
const ratingAverageElement = document.getElementById("rating-average");
const ratingCountElement = document.getElementById("rating-count");
const lastRatingElement = document.getElementById("last-rating");
const themeToggleButton = document.getElementById("theme-toggle");
const tagFiltersContainer = document.getElementById("tag-filters");
const countrySelect = document.getElementById("country-select");
const countryDishesContainer = document.getElementById("country-dishes");
const commentInput = document.getElementById("comment-input");
const submitCommentButton = document.getElementById("submit-comment");
const commentListElement = document.getElementById("comment-list");
const modal = document.getElementById("recipe-modal");
const modalClose = document.getElementById("modal-close");
const modalPrint = document.getElementById("modal-print");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalMeta = document.getElementById("modal-meta");
const modalIngredients = document.getElementById("modal-ingredients");
const modalInstructions = document.getElementById("modal-instructions");
const favoriteRecipes = new Set();
const favoriteKey = "recipeWebsiteFavorites";
const ratingKey = "recipeWebsiteRating";
const commentsKey = "recipeWebsiteComments";
const themeKey = "recipeWebsiteTheme";
const ratingState = { total: 0, count: 0, last: 0 };
let activeTagFilter = "All";
let currentTheme = "light";
let commentsData = [];

const countries = [
  {
    name: "Italy",
    dishes: [
      { name: "Margherita Pizza", description: "Classic Neapolitan pizza with tomato, mozzarella, and basil.", image: "https://www.themealdb.com/images/media/meals/lrfdwz1764438393.jpg", ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil", "Olive oil", "Salt"], instructions: ["Preheat oven to 475°F", "Roll out pizza dough", "Spread tomato sauce evenly", "Add mozzarella cheese and basil leaves", "Bake for 12-15 minutes until golden"] },
      { name: "Spaghetti Carbonara", description: "Creamy pasta with eggs, pecorino, pancetta, and black pepper.", image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg", ingredients: ["Spaghetti", "Eggs", "Pecorino Romano cheese", "Pancetta", "Black pepper", "Salt"], instructions: ["Cook spaghetti in salted water", "Fry pancetta until crispy", "Beat eggs with grated cheese and pepper", "Toss hot pasta with pancetta fat", "Add egg mixture and toss quickly to create creamy sauce"] },
      { name: "Lasagna Bolognese", description: "Layered pasta baked with rich meat sauce and béchamel.", image: "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg", ingredients: ["Lasagna noodles", "Ground beef", "Tomato sauce", "Béchamel sauce", "Parmesan cheese", "Butter"], instructions: ["Cook lasagna noodles until al dente", "Prepare meat sauce and simmer for 30 minutes", "Make béchamel sauce with butter, flour, and milk", "Layer noodles, meat sauce, béchamel, and cheese", "Bake at 375°F for 45 minutes until golden"] },
      { name: "Caprese Salad", description: "Fresh tomatoes, mozzarella, basil, and olive oil.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Caprese-1_%28tigher_crop%29.jpg/1280px-Caprese-1_%28tigher_crop%29.jpg", ingredients: ["Fresh tomatoes", "Fresh mozzarella", "Fresh basil leaves", "Olive oil", "Balsamic vinegar", "Salt and pepper"], instructions: ["Slice tomatoes and mozzarella evenly", "Arrange tomato and cheese slices alternately on plate", "Insert fresh basil leaves between slices", "Drizzle generously with olive oil and balsamic vinegar", "Season with salt and pepper to taste"] },
      { name: "Tiramisu", description: "Coffee-soaked ladyfingers layered with mascarpone cream.", image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Tiramisu_-_Raffaele_Diomede.jpg", ingredients: ["Ladyfinger cookies", "Mascarpone cheese", "Eggs", "Sugar", "Strong espresso", "Cocoa powder"], instructions: ["Brew strong espresso and let cool", "Dip ladyfingers quickly in espresso", "Beat mascarpone with egg yolks and sugar until creamy", "Layer dipped cookies and mascarpone mixture in dish", "Refrigerate overnight and dust with cocoa powder before serving"] },
      { name: "Risotto alla Milanese", description: "Creamy saffron rice cooked with broth and Parmesan.", image: "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg", ingredients: ["Arborio rice", "Saffron threads", "Vegetable broth", "White wine", "Butter", "Parmesan cheese"], instructions: ["Heat broth and keep warm throughout cooking", "Toast rice in butter for 1-2 minutes", "Add white wine and cook until absorbed", "Gradually add warm broth, one ladle at a time, stirring constantly", "Stir in saffron and Parmesan cheese at the end"] },
      { name: "Panna Cotta", description: "Silky cream dessert topped with berry sauce.", image: "https://www.recipetineats.com/tachyon/2025/09/Panna-cotta_8-close-up.jpg?resize=500%2C500", ingredients: ["Heavy cream", "Whole milk", "Sugar", "Gelatin", "Vanilla extract"], instructions: ["Heat cream and milk with sugar until warm", "Dissolve gelatin in warm mixture", "Add vanilla extract to taste", "Pour into ramekins or serving glasses", "Refrigerate for 4-6 hours until set"] },
      { name: "Bruschetta", description: "Toasted bread rubbed with garlic and topped with tomatoes.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg/1280px-2014_Bruschetta_The_Larder_Chiang_Mai.jpg", ingredients: ["Italian bread", "Garlic cloves", "Fresh tomatoes", "Fresh basil", "Olive oil", "Balsamic vinegar"], instructions: ["Slice bread and toast until golden", "Rub each slice with cut garlic clove", "Dice tomatoes and combine with fresh basil", "Top toasted bread with tomato mixture", "Drizzle with olive oil and balsamic vinegar"] }
    ]
  },
  {
    name: "Japan",
    dishes: [
      { name: "Sushi Platter", description: "Assorted nigiri and rolls made with fresh fish and seasoned rice.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1280px-Sushi_platter.jpg", ingredients: ["Sushi rice", "Nori (seaweed)", "Fresh fish", "Cucumber", "Avocado", "Soy sauce", "Wasabi"], instructions: ["Cook sushi rice and season with vinegar, sugar, salt", "Lay nori on bamboo mat", "Spread rice on nori", "Add fillings in center", "Roll tightly and cut into pieces", "Serve with soy sauce and wasabi"] },
      { name: "Ramen", description: "Savory noodle soup with rich broth, toppings, and tender pork.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg/1280px-Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg", ingredients: ["Ramen noodles", "Chicken or pork broth", "Soy sauce", "Pork belly", "Eggs", "Green onions", "Bamboo shoots"], instructions: ["Prepare rich broth by simmering for hours", "Cook noodles separately according to package", "Slice pork belly and cook until tender", "Boil eggs to soft-boiled consistency", "Assemble in bowls with noodles and toppings"] },
      { name: "Tempura", description: "Lightly battered and fried shrimp and vegetables.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tempura_01.jpg/960px-Tempura_01.jpg", ingredients: ["Shrimp", "Vegetables", "Tempura flour", "Egg", "Ice water", "Oil for frying"], instructions: ["Mix tempura batter with ice water", "Pat shrimp and vegetables dry", "Dip in batter and immediately fry in hot oil", "Fry until light golden, about 2-3 minutes", "Serve immediately with dipping sauce"] },
      { name: "Okonomiyaki", description: "Savory cabbage pancake topped with sauce and bonito flakes.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/1280px-Okonomiyaki_001.jpg", ingredients: ["Cabbage", "Flour", "Eggs", "Dashi broth", "Okonomiyaki sauce", "Bonito flakes", "Oil"], instructions: ["Mix flour, eggs, and dashi into batter", "Fold in shredded cabbage", "Cook on griddle until golden on both sides", "Top with okonomiyaki sauce and mayo", "Sprinkle bonito flakes while hot"] },
      { name: "Miso Soup", description: "Comforting broth with tofu, seaweed, and miso paste.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Miso_Soup_001.jpg/1280px-Miso_Soup_001.jpg", ingredients: ["Dashi broth", "Miso paste", "Tofu", "Wakame seaweed", "Green onions", "Bonito flakes"], instructions: ["Heat dashi broth to near boiling", "Dissolve miso paste in small bowl with warm broth", "Add dissolved miso to pot", "Add cubed tofu and wakame", "Simmer gently without boiling, top with green onions"] },
      { name: "Takoyaki", description: "Octopus-filled batter balls served with sauce and mayo.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Takoyaki.jpg/1280px-Takoyaki.jpg", ingredients: ["Takoyaki flour mix", "Octopus", "Green onions", "Ginger", "Takoyaki sauce", "Oil for frying"], instructions: ["Prepare takoyaki batter according to package", "Heat takoyaki pan and oil", "Fill holes with batter and add octopus pieces", "Rotate with picks to form spheres", "Fry until golden and serve with sauce"] },
      { name: "Udon Noodles", description: "Thick wheat noodles in a warming broth with vegetables.", image: "https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg", ingredients: ["Udon noodles", "Dashi broth", "Soy sauce", "Mirin", "Vegetables", "Green onions"], instructions: ["Bring dashi broth to boil", "Add soy sauce and mirin", "Cook udon noodles separately", "Place noodles in bowls", "Pour hot broth over and top with vegetables"] },
      { name: "Gyudon", description: "Thinly sliced beef simmered with onion over rice.", image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Kakeudon.jpg", ingredients: ["Beef sirloin", "Onions", "Soy sauce", "Mirin", "Sugar", "Dashi", "Rice"], instructions: ["Cook rice and place in bowl", "Slice beef thinly", "Sauté onions until soft", "Add beef and simmer with soy sauce, mirin, and sugar", "Pour over rice with cooking liquid"] }
    ]
  },
  {
    name: "Mexico",
    dishes: [
      { name: "Tacos al Pastor", description: "Spiced pork tacos served with pineapple, onion, and cilantro.", image: "https://www.orchidsandsweettea.com/wp-content/uploads/2024/08/Tacos-Al-Pastor-with-Ground-Turkey.jpg", ingredients: ["Pork shoulder", "Dried chiles", "Spices", "Pineapple", "Corn tortillas", "White onion", "Cilantro"], instructions: ["Marinate pork in chile-spice mixture overnight", "Cook pork on vertical spit until caramelized", "Shave meat thinly from spit", "Heat tortillas and add meat", "Top with pineapple, onion, and cilantro"] },
      { name: "Enchiladas Verdes", description: "Corn tortillas filled and topped with green tomatillo sauce.", image: "https://www.panningtheglobe.com/wp-content/uploads/2014/08/Enchiladas-Verdes-2-web.jpg", ingredients: ["Corn tortillas", "Chicken", "Tomatillo sauce", "Sour cream", "Cheese", "Onion"], instructions: ["Prepare tomatillo sauce by blending and cooking tomatillos", "Dip tortillas in sauce", "Fill with cooked shredded chicken", "Roll and place in baking dish", "Cover with remaining sauce and bake at 350°F"] },
      { name: "Chiles Rellenos", description: "Poblano peppers stuffed with cheese, battered, and fried.", image: "https://www.chilipeppermadness.com/wp-content/uploads/2024/09/Chiles-Rellenos-Recipe-SQ.jpg", ingredients: ["Poblano peppers", "Oaxaca cheese", "Eggs", "Flour", "Tomato sauce", "Oil"], instructions: ["Roast poblano peppers and peel", "Make slit and remove seeds carefully", "Stuff with cheese", "Prepare egg batter", "Dip in batter and fry until golden", "Serve with tomato sauce"] },
      { name: "Pozole", description: "Hearty hominy soup simmered with chiles and tender meat.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Green_pozole%2C_dressed_%2829161841908%29_%28cropped%29.jpg/1280px-Green_pozole%2C_dressed_%2829161841908%29_%28cropped%29.jpg", ingredients: ["Hominy", "Pork shoulder", "Dried chiles", "Onion", "Garlic", "Cilantro", "Radishes"], instructions: ["Cook pork until tender", "Add cooked or canned hominy", "Prepare chile broth separately", "Combine broth with hominy and pork", "Simmer until flavors blend", "Serve with garnishes"] },
      { name: "Guacamole", description: "Creamy avocado dip with lime, onion, tomato, and cilantro.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Guacamole_IMGP1271.jpg/1280px-Guacamole_IMGP1271.jpg", ingredients: ["Ripe avocados", "Lime juice", "White onion", "Fresh tomatoes", "Cilantro", "Salt", "Jalapeño"], instructions: ["Cut avocados in half and remove pit", "Scoop into bowl and mash with fork", "Add lime juice to prevent browning", "Fold in diced onion, tomato, cilantro", "Season with salt and jalapeño to taste"] },
      { name: "Carnitas", description: "Slow-cooked pork with crisp edges and warm tortillas.", image: "https://www.themealdb.com/images/media/meals/1549542877.jpg", ingredients: ["Pork shoulder", "Lard or oil", "Garlic", "Onion", "Oranges", "Spices", "Tortillas"], instructions: ["Cut pork into chunks", "Cook slowly in fat with spices at low temperature", "Cook for 3-4 hours until tender and shredding easily", "Increase heat to crisp edges", "Serve with warm tortillas and toppings"] },
      { name: "Elote", description: "Grilled corn coated in mayo, cheese, lime, and chili powder.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/CookedCornOnTheCob.JPG/1280px-CookedCornOnTheCob.JPG", ingredients: ["Corn on the cob", "Mayonnaise", "Cotija cheese", "Chili powder", "Lime", "Cilantro"], instructions: ["Grill corn until lightly charred", "Brush generously with mayonnaise", "Roll in grated cotija cheese", "Sprinkle with chili powder", "Squeeze lime juice and garnish with cilantro"] },
      { name: "Churros", description: "Crispy fried dough rolled in cinnamon sugar.", image: "https://www.themealdb.com/images/media/meals/nxnny61763250596.jpg", ingredients: ["Flour", "Water", "Oil", "Salt", "Cinnamon", "Sugar"], instructions: ["Heat oil to 375°F", "Prepare dough with flour, water, and salt", "Pipe long strips into hot oil", "Fry until golden on both sides", "Remove and immediately roll in cinnamon-sugar mixture"] }
    ]
  },
  {
    name: "India",
    dishes: [
      { name: "Butter Chicken", description: "Tender chicken in a creamy tomato and buttery sauce.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/960px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg", ingredients: ["Chicken", "Yogurt", "Tomato sauce", "Butter", "Cream", "Spices", "Ginger-garlic paste"], instructions: ["Marinate chicken in yogurt and spices", "Cook chicken until done", "Prepare tomato sauce with butter and spices", "Add cooked chicken to sauce", "Stir in cream and simmer until rich"] },
      { name: "Palak Paneer", description: "Spinach curry cooked with cubes of paneer cheese.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Palakpaneer_Rayagada_Odisha_0009.jpg/1280px-Palakpaneer_Rayagada_Odisha_0009.jpg", ingredients: ["Spinach", "Paneer cheese", "Onion", "Ginger-garlic paste", "Spices", "Cream", "Butter"], instructions: ["Blanch spinach and blend into paste", "Sauté onions and ginger-garlic paste", "Add spinach paste and cook", "Cut paneer into cubes and add", "Finish with cream and butter"] },
      { name: "Biryani", description: "Aromatic rice dish layered with spices, meat, and herbs.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/1280px-%22Hyderabadi_Dum_Biryani%22.jpg", ingredients: ["Basmati rice", "Meat", "Yogurt", "Ghee", "Spices", "Mint", "Fried onions"], instructions: ["Cook rice until 70% done", "Cook meat in yogurt and spices", "Layer rice and meat in pot", "Pour ghee over layers", "Cover tightly and cook on high heat then low"] },
      { name: "Masala Dosa", description: "Crispy rice crepe filled with spiced potato.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rameshwaram_Cafe_Dosa.jpg/1280px-Rameshwaram_Cafe_Dosa.jpg", ingredients: ["Rice", "Lentils", "Potatoes", "Mustard seeds", "Curry leaves", "Spices"], instructions: ["Prepare dosa batter from rice and lentils", "Cook spiced potato filling", "Heat griddle and spread dosa batter thinly", "Cook until crispy on edges", "Fill with potato and roll or fold"] },
      { name: "Chana Masala", description: "Chickpeas simmered in a tangy tomato and spice sauce.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Chana_masala.jpg/1280px-Chana_masala.jpg", ingredients: ["Chickpeas", "Tomatoes", "Onion", "Ginger-garlic paste", "Spices", "Cilantro"], instructions: ["Cook onions until golden", "Add ginger-garlic paste and spices", "Add tomatoes and cook until soft", "Add cooked chickpeas", "Simmer until flavors blend", "Garnish with cilantro"] },
      { name: "Tandoori Chicken", description: "Spiced chicken roasted in a clay oven with smoky flavor.", image: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg", ingredients: ["Chicken", "Yogurt", "Tandoori spice mix", "Ginger-garlic paste", "Lemon juice", "Oil"], instructions: ["Marinate chicken in yogurt and spices for hours", "Place on tandoor skewers", "Cook in tandoor until charred and cooked through", "Serve with lemon and cilantro"] },
      { name: "Naan Bread", description: "Soft, pillowy flatbread brushed with butter.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Annapurna_Naan.jpg/1280px-Annapurna_Naan.jpg", ingredients: ["Flour", "Yogurt", "Water", "Salt", "Butter", "Yeast"], instructions: ["Mix dough with flour, yogurt, water, salt", "Let rise for 2-3 hours", "Divide into balls and flatten", "Cook in tandoor or on hot cast iron", "Brush with melted butter"] },
      { name: "Gulab Jamun", description: "Fried milk dumplings soaked in sweet cardamom syrup.", image: "https://pipingpotcurry.com/wp-content/uploads/2023/12/Gulab-Jamun-Recipe-Piping-Pot-Curry-500x500.jpg", ingredients: ["Milk powder", "Flour", "Ghee", "Sugar", "Cardamom", "Rose water"], instructions: ["Mix milk powder and flour into dough", "Roll into small balls", "Deep fry until golden brown", "Prepare sugar syrup with cardamom", "Soak hot gulab jamun in cooled syrup"] }
    ]
  },
  {
    name: "Greece",
    dishes: [
      { name: "Moussaka", description: "Baked eggplant and meat casserole topped with béchamel.", image: "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg", ingredients: ["Eggplant", "Ground lamb", "Tomato sauce", "Onion", "Béchamel sauce", "Cheese"], instructions: ["Slice and fry eggplant", "Cook ground lamb with tomatoes", "Layer eggplant and meat sauce", "Top with béchamel sauce", "Bake at 375°F for 45 minutes"] },
      { name: "Souvlaki", description: "Grilled skewers of seasoned meat served with pita.", image: "https://www.themealdb.com/images/media/meals/rjhf741585564676.jpg", ingredients: ["Pork or chicken", "Olive oil", "Lemon juice", "Oregano", "Pita bread", "Tzatziki"], instructions: ["Marinate meat in olive oil, lemon, oregano", "Thread onto skewers", "Grill over charcoal until cooked", "Serve with warm pita bread", "Top with tzatziki and vegetables"] },
      { name: "Greek Salad", description: "Crisp cucumber, tomato, olives, and feta with olive oil.", image: "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg", ingredients: ["Tomatoes", "Cucumber", "Red onion", "Kalamata olives", "Feta cheese", "Olive oil", "Oregano"], instructions: ["Dice tomatoes and cucumber", "Slice red onion thinly", "Combine vegetables with olives", "Crumble feta cheese over top", "Drizzle with olive oil and sprinkle oregano"] },
      { name: "Spanakopita", description: "Spinach and feta wrapped in flaky phyllo pastry.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRccFbeecgKBZmAmnHjhfUMHLYfWjGpZgnPU_C1zZ23Mo4zEOkiYglZXM&s=10", ingredients: ["Spinach", "Feta cheese", "Phyllo dough", "Butter", "Onion", "Eggs"], instructions: ["Sauté spinach with onion", "Mix with crumbled feta and egg", "Layer phyllo with butter", "Spread spinach filling", "Fold and bake at 375°F until golden"] },
      { name: "Baklava", description: "Sweet layered pastry with nuts and honey syrup.", image: "https://www.themealdb.com/images/media/meals/ytme8t1764111401.jpg", ingredients: ["Phyllo dough", "Walnuts", "Butter", "Honey", "Cinnamon", "Sugar"], instructions: ["Chop walnuts fine", "Layer phyllo with melted butter", "Sprinkle walnut-cinnamon mixture between layers", "Bake at 350°F until golden", "Pour honey syrup while still warm"] },
      { name: "Dolmades", description: "Grape leaves stuffed with rice, herbs, and lemon.", image: "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/07/vegan-stuffed-grape-leaves-portion-800x1200.jpg", ingredients: ["Grape leaves", "Rice", "Onion", "Herbs", "Lemon", "Olive oil"], instructions: ["Blanch grape leaves", "Prepare rice filling with herbs", "Place filling on leaf and roll", "Pack rolls tightly in pot", "Simmer with lemon juice"] },
      { name: "Saganaki", description: "Pan-fried cheese with a crispy golden crust.", image: "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg", ingredients: ["Saganaki cheese", "Flour", "Egg", "Olive oil", "Lemon"], instructions: ["Cut cheese into thick slices", "Coat in flour, dip in beaten egg", "Fry in hot olive oil until golden", "Serve immediately with lemon squeeze"] },
      { name: "Lemon Roasted Chicken", description: "Juicy chicken roasted with lemon, oregano, and olives.", image: "https://www.saltandlavender.com/wp-content/uploads/2018/11/lemon-butter-chicken-1.jpg", ingredients: ["Whole chicken", "Lemons", "Oregano", "Garlic", "Olives", "Olive oil"], instructions: ["Prepare chicken cavity with lemon and herbs", "Rub exterior with oregano and garlic", "Roast at 425°F for 1.5 hours", "Baste regularly with pan juices", "Rest before serving with olive garnish"] }
    ]
  },
  {
    name: "Albania",
    dishes: [
      { name: "Tavë Kosi", description: "Baked lamb and rice with tangy yogurt and egg custard.", image: "https://www.themealdb.com/images/media/meals/a1mi7t1779643816.jpg", ingredients: ["Lamb", "Rice", "Yogurt", "Eggs", "Butter", "Flour"], instructions: ["Cook lamb until tender", "Layer with cooked rice in baking dish", "Prepare yogurt custard with eggs", "Pour over lamb and rice", "Bake at 350°F until golden"] },
      { name: "Byrek", description: "Flaky pastry filled with cheese, spinach, or meat.", image: "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg", ingredients: ["Phyllo dough", "Cheese or spinach filling", "Eggs", "Butter", "Salt"], instructions: ["Prepare filling with cheese and herbs", "Layer phyllo sheets with melted butter", "Spread filling evenly", "Roll or fold and brush with egg wash", "Bake at 375°F until crispy and golden"] },
      { name: "Fërgesë", description: "Bell peppers and tomatoes cooked with cottage cheese.", image: "https://akt.gov.al/wp-content/uploads/2025/09/Fergese-lezhjane.jpg", ingredients: ["Bell peppers", "Tomatoes", "Cottage cheese", "Onion", "Olive oil"], instructions: ["Sauté onions and peppers", "Add diced tomatoes", "Simmer until soft", "Top with cottage cheese crumbles", "Heat gently until cheese softens"] },
      { name: "Speca me Gjize", description: "Roasted peppers stuffed with creamy white cheese.", image: "https://i.ytimg.com/vi/NxSwo0fwaUs/maxresdefault.jpg", ingredients: ["Red peppers", "White cheese", "Egg", "Flour", "Butter", "Parsley"], instructions: ["Roast peppers until skin chars", "Peel carefully while hot", "Make slit and remove seeds", "Stuff with cheese mixture", "Bake at 350°F until heated through"] },
      { name: "Trilece", description: "Moist sponge cake soaked with three kinds of milk and sweet caramel.", image: "https://res.cloudinary.com/dxocatyhb/image/upload/ar_16:9,c_fit,w_2000/v1731158822/trilece.webp", ingredients: ["Flour", "Eggs", "Sugar", "Milk", "Condensed milk", "Caramel"], instructions: ["Bake sponge cake", "Pierce cake all over", "Pour three milk mixture over warm cake", "Let soak for hours", "Top with caramel syrup before serving"] },
      { name: "Pite", description: "Layered bread filled with savory cheese and greens.", image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg", ingredients: ["Dough", "Cheese", "Spinach", "Eggs", "Butter", "Salt"], instructions: ["Prepare dough and divide into layers", "Roll out thin sheets", "Brush with butter between layers", "Add cheese and spinach filling", "Bake at 375°F until golden"] },
      { name: "Qebapa", description: "Grilled spiced meat skewers served with bread and onions.", image: "https://www.themealdb.com/images/media/meals/vc08jn1628769553.jpg", ingredients: ["Ground lamb", "Onion", "Garlic", "Paprika", "Black pepper"], instructions: ["Mix ground meat with spices and onion", "Shape onto flat skewers", "Grill over charcoal until cooked", "Serve with warm bread", "Accompany with raw onion and parsley"] },
      { name: "Kadaif", description: "Shredded pastry dessert soaked in sweet syrup.", image: "https://www.themealdb.com/images/media/meals/ytme8t1764111401.jpg", ingredients: ["Kadaif dough", "Walnuts", "Butter", "Sugar", "Water", "Cinnamon"], instructions: ["Shred kadaif dough", "Toss with melted butter and walnuts", "Layer in pan", "Bake at 350°F until golden", "Pour hot sugar syrup over warm kadaif"] }
    ]
  }
];

function renderCountryOptions() {
  if (!countrySelect) return;
  countrySelect.innerHTML = countries
    .map((country) => `<option value="${country.name}">${country.name}</option>`)
    .join("");
}

function renderCountryDishes(selectedCountry) {
  if (!countryDishesContainer) return;
  const country = countries.find((item) => item.name === selectedCountry) || countries[0];
  if (!country) {
    countryDishesContainer.innerHTML = "<p>No country selected.</p>";
    return;
  }

  countryDishesContainer.innerHTML = `
    <div class="country-dish-grid">
      ${country.dishes
        .map(
          (dish) => `
            <article class="country-dish-card">
              <div class="country-dish-image-wrap">
                <img class="country-dish-image" src="${dish.image}" alt="${dish.name}" loading="lazy" />
                <span class="country-dish-label">${dish.name}</span>
              </div>
              <div class="country-dish-copy">
                <p>${dish.description}</p>
                <button class="country-detail-btn" type="button" data-country="${country.name}" data-dish="${dish.name}">View details</button>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  countryDishesContainer.querySelectorAll(".country-detail-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCountry = button.dataset.country;
      const selectedDish = button.dataset.dish;
      openDishModal(selectedCountry, selectedDish);
    });
  });
}

function openDishModal(countryName, dishName) {
  if (!modal) return;
  const country = countries.find((item) => item.name === countryName);
  const dish = country?.dishes.find((item) => item.name === dishName);
  if (!dish) return;

  modalTitle.textContent = dish.name;
  modalDescription.innerHTML = `<div class="modal-image-wrap"><img src="${dish.image}" alt="${dish.name}" loading="lazy"/><p>${dish.description}</p></div>`;
  modalMeta.innerHTML = `<span class="tag">Country: ${countryName}</span><span class="tag">Traditional dish</span>`;
  modalIngredients.innerHTML = dish.ingredients?.map((ingredient) => `<li>${ingredient}</li>`).join("") || `<li>${dish.description}</li>`;
  modalInstructions.innerHTML = dish.instructions?.map((step) => `<li>${step}</li>`).join("") || `<li>Enjoy this dish as a classic taste of ${countryName} cuisine.</li>`;
  modal.classList.remove("hidden");
}

function initCountrySelector() {
  renderCountryOptions();
  const initialCountry = countrySelect?.value || countries[0]?.name;
  renderCountryDishes(initialCountry);
}

function loadFavoriteState() {
  const saved = localStorage.getItem(favoriteKey);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) {
      parsed.forEach((name) => {
        if (typeof name === "string") {
          favoriteRecipes.add(name);
        }
      });
    }
  } catch (error) {
    console.warn("Could not restore favorite recipes", error);
  }
}

function saveFavoriteState() {
  localStorage.setItem(favoriteKey, JSON.stringify([...favoriteRecipes]));
}

function loadComments() {
  const saved = localStorage.getItem(commentsKey);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) {
      commentsData = parsed.filter((comment) => typeof comment === "string");
    }
  } catch (error) {
    console.warn("Could not restore comments", error);
  }
}

function saveComments() {
  localStorage.setItem(commentsKey, JSON.stringify(commentsData));
}

function loadTheme() {
  const saved = localStorage.getItem(themeKey);
  if (saved === "dark" || saved === "light") {
    currentTheme = saved;
  }
}

function saveTheme() {
  localStorage.setItem(themeKey, currentTheme);
}

function applyTheme() {
  document.documentElement.dataset.theme = currentTheme;
  themeToggleButton.textContent = currentTheme === "dark" ? "☀️" : "🌙";
}

function loadRatingState() {
  const saved = localStorage.getItem(ratingKey);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    if (typeof parsed.total === "number" && typeof parsed.count === "number") {
      ratingState.total = parsed.total;
      ratingState.count = parsed.count;
    }
  } catch (error) {
    console.warn("Could not restore rating state", error);
  }
}

function saveRatingState() {
  localStorage.setItem(ratingKey, JSON.stringify(ratingState));
}

function getAllTags() {
  return [...new Set(recipes.flatMap((recipe) => recipe.tags))].sort();
}

function renderTagFilters() {
  if (!tagFiltersContainer) return;
  const tags = ["All", ...getAllTags()];
  tagFiltersContainer.innerHTML = tags
    .map(
      (tag) => `<button class="filter-btn ${tag === activeTagFilter ? "active" : ""}" type="button" data-tag="${tag}">${tag}</button>`
    )
    .join("");

  tagFiltersContainer.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      activeTagFilter = button.dataset.tag || "All";
      renderTagFilters();
      updatePage(searchInput.value);
    });
  });
}

function renderComments() {
  if (!commentListElement) return;
  if (commentsData.length === 0) {
    commentListElement.innerHTML = `<div class="comment-item"><p>Be the first to leave a comment.</p></div>`;
    return;
  }

  commentListElement.innerHTML = commentsData
    .map((comment) => `<div class="comment-item"><p>${comment}</p></div>`)
    .join("");
}

function openRecipeModal(recipe) {
  if (!modal) return;
  modalTitle.textContent = recipe.name;
  modalDescription.innerHTML = `<div class="modal-image-wrap"><img src="${recipe.image}" alt="${recipe.name}" loading="lazy"/><p>${recipe.description}</p></div>`;
  modalMeta.innerHTML = `<span class="tag">${recipe.servings}</span><span class="tag">${recipe.time}</span>${recipe.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("")}`;
  modalIngredients.innerHTML = recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
  modalInstructions.innerHTML = recipe.instructions.map((step) => `<li>${step}</li>`).join("");
  modal.classList.remove("hidden");
}

function closeRecipeModal() {
  if (!modal) return;
  modal.classList.add("hidden");
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme();
  saveTheme();
}

function addComment() {
  if (!commentInput) return;
  const value = commentInput.value.trim();
  if (!value) return;
  commentsData.unshift(value);
  commentInput.value = "";
  saveComments();
  renderComments();
}

function filterByTag(recipe) {
  return activeTagFilter === "All" || recipe.tags.includes(activeTagFilter);
}

function toggleFavorite(recipeName) {
  if (favoriteRecipes.has(recipeName)) {
    favoriteRecipes.delete(recipeName);
  } else {
    favoriteRecipes.add(recipeName);
  }
  saveFavoriteState();
}

function renderFeaturedRecipe(recipe) {
  if (!featuredRecipeElement) return;

  if (!recipe) {
    featuredRecipeElement.innerHTML = `
      <p class="eyebrow">Featured recipe</p>
      <h2>No featured recipe</h2>
      <p>Try another search term or clear the filter to see the featured recipe.</p>
    `;
    return;
  }

  const favoriteText = isRecipeFavorite(recipe.name) ? "Saved" : "Favorite";
  const favoriteClass = isRecipeFavorite(recipe.name) ? "active" : "";

  featuredRecipeElement.innerHTML = `
    <p class="eyebrow">Featured recipe</p>
    <div class="featured-image-wrap">
      <img class="featured-image" src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
    </div>
    <h2>${recipe.name}</h2>
    <p>${recipe.description}</p>
    <div class="featured-meta">
      <span class="tag">${recipe.servings}</span>
      <span class="tag">${recipe.time}</span>
      ${recipe.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <button class="favorite-btn ${favoriteClass}" data-recipe="${recipe.name}">${favoriteText}</button>
  `;

  const featuredButton = featuredRecipeElement.querySelector(".favorite-btn");
  featuredButton?.addEventListener("click", () => {
    toggleFavorite(recipe.name);
    updatePage(searchInput.value);
  });

  const detailButton = featuredRecipeElement.querySelector(".detail-btn");
  detailButton?.addEventListener("click", () => openRecipeModal(recipe));
}

function renderRecipes(filteredRecipes) {
  listElement.innerHTML = "";

  if (filteredRecipes.length === 0) {
    listElement.innerHTML = `<div class="recipe-card"><div class="recipe-body"><p>No recipes matched your search. Try another keyword.</p></div></div>`;
    return;
  }

  filteredRecipes.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "recipe-card";

    card.innerHTML = `
      <header>
        <div class="recipe-image-wrap">
          <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
        </div>
        <h2>${recipe.name}</h2>
        <p>${recipe.description}</p>
        <div class="recipe-meta">
          <span class="tag">${recipe.servings}</span>
          <span class="tag">${recipe.time}</span>
          ${recipe.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="recipe-actions">
          <button class="detail-btn" data-recipe="${recipe.name}" type="button">View details</button>
          <button class="favorite-btn ${isRecipeFavorite(recipe.name) ? "active" : ""}" data-recipe="${recipe.name}" type="button">${isRecipeFavorite(recipe.name) ? "Saved" : "Favorite"}</button>
        </div>
      </header>
      <div class="recipe-body">
        <section>
          <h3>Ingredients</h3>
          <ul>${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}</ul>
        </section>
        <section>
          <h3>Instructions</h3>
          <ol>${recipe.instructions.map((step) => `<li>${step}</li>`).join("")}</ol>
        </section>
      </div>
    `;

    const detailButton = card.querySelector(".detail-btn");
    detailButton?.addEventListener("click", () => openRecipeModal(recipe));

    const favoriteButton = card.querySelector(".favorite-btn");
    favoriteButton?.addEventListener("click", () => {
      toggleFavorite(recipe.name);
      updatePage(searchInput.value);
    });

    listElement.appendChild(card);
  });
}

function filterRecipes(query) {
  const normalized = query.trim().toLowerCase();

  return recipes.filter((recipe) => {
    const matchesTag = filterByTag(recipe);
    const matchesName = recipe.name.toLowerCase().includes(normalized);
    const matchesDescription = recipe.description.toLowerCase().includes(normalized);
    const matchesIngredient = recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(normalized));

    if (!normalized) {
      return matchesTag;
    }

    return matchesTag && (matchesName || matchesDescription || matchesIngredient);
  });
}

function updateFavoriteCount() {
  if (!favoriteCountElement) return;
  const count = favoriteRecipes.size;
  if (count === 0) {
    favoriteCountElement.textContent = "0 favorites";
  } else if (count === 1) {
    favoriteCountElement.textContent = "1 favorite";
  } else {
    favoriteCountElement.textContent = `${count} favorites`;
  }
}

function updateRatingDisplay() {
  if (!ratingAverageElement || !ratingCountElement || !lastRatingElement) return;
  const average = ratingState.count ? ratingState.total / ratingState.count : 0;
  ratingAverageElement.textContent = average.toFixed(1);
  ratingCountElement.textContent = ratingState.count === 1 ? "1 vote" : `${ratingState.count} votes`;
  lastRatingElement.textContent = ratingState.last ? `Your last rating: ${ratingState.last} stars` : "";
  ratingStars.forEach((star) => {
    const value = Number(star.dataset.value);
    star.classList.toggle("active", value <= Math.round(average));
  });
}

ratingStars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = Number(star.dataset.value);
    ratingState.count += 1;
    ratingState.total += value;
    ratingState.last = value;
    saveRatingState();
    updateRatingDisplay();
  });
});

themeToggleButton?.addEventListener("click", toggleTheme);
submitCommentButton?.addEventListener("click", addComment);
modalClose?.addEventListener("click", closeRecipeModal);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeRecipeModal();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeRecipeModal();
  }
});
modalPrint?.addEventListener("click", () => window.print());

function updatePage(query) {
  const filteredRecipes = filterRecipes(query);
  renderFeaturedRecipe(filteredRecipes[0] || null);
  renderRecipes(filteredRecipes);
  updateFavoriteCount();
}

searchInput.addEventListener("input", (event) => {
  updatePage(event.target.value);
});

clearButton?.addEventListener("click", () => {
  if (!searchInput) return;
  searchInput.value = "";
  updatePage("");
});

countrySelect?.addEventListener("change", () => {
  renderCountryDishes(countrySelect.value);
});

loadFavoriteState();
loadComments();
loadTheme();
loadRatingState();
applyTheme();
renderComments();
renderTagFilters();
initCountrySelector();
updateRatingDisplay();
renderFeaturedRecipe(recipes[0]);
renderRecipes(recipes);
