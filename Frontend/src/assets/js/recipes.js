const recipes = [
  {
    id: '1',
    title: 'Sicilian Roasted Chicken',
    description: 'Chicken pieces seasoned with paprika, garlic powder, and oregano are roasted until juicy and tender in this simple Sicilian-inspired recipe.',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/560x315/3922864.jpg',
    ingredients: ['1 whole chicken', '1 teaspoon salt', '1 teaspoon ground black pepper', '1 teaspoon ground paprika', '1 teaspoon garlic powder', '1 teaspoon dried oregano'],
    instructions: 'Preheat oven to 425 degrees F (220 degrees C). Grease a 9x13-inch pan with cooking spray. Arrange chicken pieces in the baking pan. Sprinkle salt, pepper, paprika, garlic powder, and oregano over both sides. Roast in the preheated oven until chicken is browned and the juices run clear, about 1 hour. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C).',
    categoryId: '-L4N7j92qDMvS8BbgE5u',
    likes: 0
  },
  {
    id: '2',
    title: 'Tequila-Lime Pork Tenderloin',
    description: 'A wonderful overnight marinade gives your pork tenderloin a wonderful lime-grilled flavor. You can also grill one tenderloin and freeze the other for future use.',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/880924.jpg',
    ingredients: ['1 cup fresh lime juice', '1/2 cup tequila', '1/2 cup orange juice', '1/4 cup chopped fresh cilantro', '2 tablespoons chopped green chiles', '1 1/2 tablespoons chili powder', '1 teaspoon minced garlic', '1 tablespoon honey', '1 teaspoon salt', '3/4 teaspoon ground black pepper', '2 pork tenderloins'],
    instructions: 'Whisk together the lime juice, tequila, orange juice, cilantro, chiles, chili powder, garlic, honey, salt, and pepper in a large bowl; pour into a gallon-sized resealable bag; add the pork tenderloins; seal and store in refrigerator overnight. Preheat an outdoor grill for high heat and lightly oil grate. Cook the pork on the preheated grill, turning occasionally, until meat has reached an internal temperature of 145 degrees F (63 degrees C), about 20 minutes.',
    categoryId: '-L4N7j92qDMvS8BbgE5u',
    likes: 0
  },
  {
    id: '3',
    title: 'Chicken Parmesan',
    description: 'A classic Italian dish prepared with tomato sauce and mozzarella, with a few additions by Chef John. Sure to impress your friends and family!',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/1036363.jpg',
    ingredients: ['4 skinless, boneless chicken breast halves', 'salt and freshly ground black pepper to taste', '2 eggs', '1 cup panko bread crumbs, or more as needed', '1/2 cup grated Parmesan cheese', '2 tablespoons all-purpose flour, or more if needed', '1 cup olive oil for frying', '1/2 cup prepared tomato sauce', '1/4 cup fresh mozzarella, cut into small cubes', '1/4 cup chopped fresh basil', '1/2 cup grated provolone cheese', '1/4 cup grated Parmesan cheese', '1 tablespoon olive oil'],
    instructions: `Preheat an oven to 450 degrees F (230 degrees C).
    Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper.
    Beat eggs in a shallow bowl and set aside.
    Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside.
    Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides.
    Dip flour coated chicken breast in beaten eggs. Transfer breast to breadcrumb mixture, pressing the crumbs into both sides. Repeat for each breast. Set aside breaded chicken breasts for about 15 minutes.
    Heat 1 cup olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken until golden, about 2 minutes on each side. The chicken will finish cooking in the oven.
    Place chicken in a baking dish and top each breast with about 1/3 cup of tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle 1 to 2 tablespoons of Parmesan cheese on top and drizzle with 1 tablespoon olive oil.
    Bake in the preheated oven until cheese is browned and bubbly, and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).`,
    categoryId: '-L4N7j92qDMvS8BbgE5u',
    likes: 0
  },
  {
    id: '4',
    title: 'Incredibly Delicious Italian Cream Cake',
    description: 'This tender coconut cake is made with buttermilk, topped with a cream cheese coconut frosting and chopped nuts.',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/2556678.jpg',
    ingredients: ['1 cup buttermilk', '1 teaspoon baking soda', '1/2 cup butter', '1/2 cup shortening', '2 cups white sugar', '5 eggs', '1 teaspoon vanilla extract', '1 cup flaked coconut', '1 teaspoon baking powder', '2 cups all-purpose flour', '8 ounces cream cheese', '1/2 cup butter', '1 teaspoon vanilla extract', '4 cups confectioners sugar', '2 tablespoons light cream', '1/2 cup chopped walnuts', '1 cup sweetened flaked coconut'],
    instructions: `Preheat oven to 350 degrees F (175 degrees C). Grease three 9 inch round cake pans. In a small bowl, dissolve the baking soda in the buttermilk; set aside.
    In a large bowl, cream together 1/2 cup butter, shortening and white sugar until light and fluffy. Mix in the eggs, buttermilk mixture, 1 teaspoon vanilla, 1 cup coconut, baking powder and flour. Stir until just combined. Pour batter into the prepared pans.
    Bake in the preheated oven for 30 to 35 minutes, or until a toothpick inserted into the center of the cake comes out clean. Allow to cool.
    To Make Frosting: In a medium bowl, combine cream cheese, 1/2 cup butter, 1 teaspoon vanilla and confectioners\' sugar. Beat until light and fluffy. Mix in a small amount of cream to attain the desired consistency. Stir in chopped nuts and remaining flaked coconut. Spread between layers and on top and sides of cooled cake.`,
    categoryId: '-L4N7j93c7MH0bR7rEH5',
    likes: 0
  },
  {
    id: '5',
    title: 'Smoky Black Bean Burgers',
    description: 'Black beans, flax meal, and liquid smoke make these veggie burgers a flavorful substitute for hamburgers on the grill. Serve on buns with your favorite condiments.',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/4025318.jpg',
    ingredients: ['1 tablespoon ground flax seed', '3 tablespoons water', '1 (15 ounce) can black beans - drained, rinsed, and mashed', '1/4 cup panko bread crumbs', '1 clove garlic, minced', '1/2 teaspoon salt', '1/2 tablespoon Worcestershire sauce', '1/8 teaspoon liquid smoke flavoring', 'cooking spray'],
    instructions: `Mix ground flax seed and water together in a small bowl. Let sit to thicken, about 5 minutes.
    Mix flax mixture, black beans, panko bread crumbs, garlic, salt, Worcestershire sauce, and liquid smoke together in a bowl until combined. Form batter into 4 patties; arrange on a plate. Chill in refrigerator until set, about 30 minutes.
    Spray a skillet with cooking spray; place patties in skillet over medium heat. Cook until browned, about 5 minutes per side.`,
    categoryId: '-L4N7j8yE8Thcztca1S_',
    likes: 0
  },
  {
    id: '6',
    title: 'Texas Boiled Beer Shrimp',
    description: 'Quick and easy recipe for shrimp cooked in crab boil-seasoned light beer.',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/1068356.jpg',
    ingredients: ['2 (12 fluid ounce) cans or bottles light beer', '2 tablespoons dry crab boil', '2 pounds large shrimp'],
    instructions: 'Bring beer with dry crab boil to a boil in a large pot. Add shrimp to boiling beer and place a cover on the pot. Bring the beer again to a boil, reduce heat to medium-low, and cook at a simmer for 5 minutes. Remove pot from heat and leave shrimp steeping in the beer another 2 to 3 minutes; drain. Serve immediately.',
    categoryId: '-L4N7j8yE8Thcztca1S_',
    likes: 0
  },
  {
    id: '7',
    title: 'Slow Cooker Chicken Taco Soup',
    description: 'A hearty combination of beans, corn, tomatoes, and taco seasonings, slow cooked with shredded chicken. Top each bowl with Cheddar cheese, sour cream, and crushed tortilla chips. Made mostly of canned ingredients, this tasty soup lets the slow cooker do the work so you do not have to!',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/3706561.jpg',
    ingredients: ['1 onion, chopped', '1 (16 ounce) can chili beans', '1 (15 ounce) can black beans', '1 (15 ounce) can whole kernel corn, drained', '1 (8 ounce) can tomato sauce', '1 (12 fluid ounce) can or bottle beer', '2 (10 ounce) cans diced tomatoes with green chilies, undrained', '1 (1.25 ounce) package taco seasoning', '3 whole skinless, boneless chicken breasts', '1 (8 ounce) package shredded Cheddar cheese (optional)', 'sour cream (optional)', 'crushed tortilla chips (optional)'],
    instructions: `Place the onion, chili beans, black beans, corn, tomato sauce, beer, and diced tomatoes in a slow cooker. Add taco seasoning, and stir to blend. Lay chicken breasts on top of the mixture, pressing down slightly until just covered by the other ingredients. Set slow cooker for low heat, cover, and cook for 5 hours.
    Remove chicken breasts from the soup, and allow to cool long enough to be handled. Stir the shredded chicken back into the soup, and continue cooking for 2 hours. Serve topped with shredded Cheddar cheese, a dollop of sour cream, and crushed tortilla chips, if desired.`,
    categoryId: '-L4N7j92qDMvS8BbgE5t',
    likes: 0
  },
  {
    id: '8',
    title: 'Easy Chocolate Chip Cookie Dough Cheesecake',
    description: 'A cheesecake mixture spread on a base of chocolate chip cookie dough and topped with pieces of cookie dough bakes up into this easy dessert.',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/4483419.jpg',
    ingredients: ['2 (8 ounce) packages cream cheese, softened', '1 cup white sugar', '2 eggs', '2 teaspoons vanilla extract', '2 (18 ounce) packages chocolate chip cookie dough'],
    instructions: `Preheat oven to 350 degrees F (175 degrees C).
    Mix cream cheese, sugar, eggs, and vanilla together in a bowl until smooth and well blended.
    Spread 1 roll of cookie dough on the bottom of a 9x13-inch baking pan to form the base. Spread cream cheese mixture evenly on top. Pinch off small pieces of the remaining cookie dough and distribute them on the cream cheese mixture.
    Bake in the preheated oven until cream cheese mixture is set and cookies on top are golden brown, 30 to 45 minutes. Let cool before serving, about 30 minutes.`,
    categoryId: '-L4N7j93c7MH0bR7rEH5',
    likes: 0
  },
  {
    id: '9',
    title: 'Sandy Homemade Broccoli and Cheddar Soup',
    description: 'Serve fresh broccoli and Cheddar soup in under an hour! This quick recipe is easily adaptable to suit your tastes.',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/4539521.jpg',
    ingredients: ['3 tablespoons butter', '1/4 small onion, chopped', '2 tablespoons all-purpose flour', '1 cup half-and-half', '1 1/2 cups chicken broth salt and ground black pepper to taste', '2 cups chopped broccoli', '1 carrot, chopped', '1 celery stalk, chopped', '1 1/4 cups shredded mild Cheddar cheese'],
    instructions: `Melt butter in a stock pot over medium-high heat; add onion and saute until tender, 3 to 4 minutes. Whisk in flour and continue to stir until mixture turns golden brown, about 5 minutes. Slowly add half-and-half to onion mixture, stirring until mixture is smooth. Add chicken broth; season with salt and ground black pepper.
    Reduce heat to medium-low and simmer mixture until thickened, about 10 minutes. Add broccoli, carrot, and celery. Simmer until vegetables are tender yet crisp, about 20 minutes.
    Reduce heat to low. Add Cheddar cheese to soup and cook, stirring occasionally, until cheese melts, about 5 minutes.`,
    categoryId: '-L4N7j92qDMvS8BbgE5t',
    likes: 0
  },
  {
    id: '10',
    title: 'Skillet Breakfast Pizza',
    description: 'Hot, crispy pizza dough topped with ricotta, bacon, and spinach is a unique choice for a savory breakfast cooked in a cast iron skillet.',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/4579704.jpg',
    ingredients: ['5 slices low-sodium bacon', '1/2 teaspoon olive oil (optional)', '1/2 onion, thinly sliced (optional)', '1 (16 ounce) package refrigerated pizza dough', '1 cup part-skim ricotta cheese', '1 teaspoon garlic powder', '1 cup shredded part-skim mozzarella cheese', '1/4 teaspoon freshly ground black pepper cooking spray', '1 (6 ounce) package fresh baby spinach'],
    instructions: `Place bacon in a large skillet and cook over medium-high heat, turning occasionally, until evenly browned, about 10 minutes. Drain on paper towels; crumble into small pieces.
    Preheat oven to 450 degrees F (230 degrees C).
    Heat olive oil in a skillet over medium-high heat. Add onion; cook and stir until translucent and starting to brown, 7 to 8 minutes. Remove from heat; transfer to a bowl.
    Roll out pizza dough into a 12-inch circle and press into the bottom and 1 inch up the sides of a well seasoned 10-inch cast iron skillet. Fold the edges of the dough under and crimp like a pie.
    Mix ricotta cheese and garlic powder together in a bowl; spread over the bottom of the crust. Scatter bacon, onion, mozzarella cheese, and black pepper on top.
    Place cast iron skillet over high heat until mozzarella cheese starts to melt, about 3 minutes.
    Transfer skillet to the preheated oven; bake pizza until crust is lightly browned, about 18 minutes.
    Heat a large skillet over medium-high heat and coat with cooking spray. Add spinach; cook, stirring frequently, until wilted, about 1 minute. Transfer to paper towels to drain excess moisture. Place spinach over pizza; slice into 8 wedges.`,
    categoryId: '-L4N7j92qDMvS8BbgE5u',
    likes: 0
  }
];

export default recipes;
