const recipesContainer = document.getElementById('recipes-container');
const modal = document.getElementById('recipe-modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = modal.querySelector('.title');
const modalIngredients = modal.querySelector('.ingredients');
const modalSteps = modal.querySelector('.steps');
const modalNutrition = modal.querySelector('.nutrition');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter-btn');


RECEIPES = [
    {
        id:'r1',
        title:'Quinoa Salad',
        category: 'Vegetarian',
        img:'images/quinao2.jpg',
        desc: 'Protein-packed salad with veggies.',
        ingredients: ['1 cup quinoa', '2 cups water', '1 cucumber', '2 tomatoes', '2 tbsp olive oil'],
        steps: ['Rinse quinoa', 'Boil 2 cups water', 'Cook 15 mins', 'Chop veggies', 'Mix & serve'],
        nutrition: {calories: 350, carbs: 45, protein: 10, fat: 12}
    },

    {
        id:'r2',
        title:'Grilled Chicken Bowl',
        category: 'Non-Vegetarian',
        img:'images/grilledchicken2.jpg',
        desc: 'Protein-packed salad with veggies.',
        ingredients:['1 cup quinoa', '2 cups water', '1 cucumber', '2 tomatoes', '2 tbsp olive oil'],
        steps: ['Rinse quinoa', 'Boil 2 cups water', 'Cook 15 mins', 'Chop veggies', 'Mix & serve'],
        nutrition: { calories: 350, carbs: 45, protein: 10, fat: 12 }
    },

    {
        id:'r3',
        title:'Avacado Toast',
        category:'Vegetarian',
        img:'images/avacado2.jpg',
        desc:'Simple and healthy breakfast.',
        ingredients:['2 slices wholegrain bread', '1 avocado', 'Salt', 'Pepper', 'Lemon juice'],
        steps: ['Toast bread', 'Mash avocado with salt, pepper, lemon', 'Spread on toast'],
        nutrition:{ calories: 250, carbs: 30, protein: 6, fat: 12 }
    },

    {
        id:'r4',
        title:'Tuna Salad',
        category:'Non-Vegetarian',
        img:'images/tuna salad.jpg',
        desc:'Light protein-rich salad.',
        ingredients: ['1 can tuna', 'Lettuce', 'Tomatoes', 'Cucumber', 'Olive oil'],
        steps:['Drain tuna', 'Chop veggies', 'Mix all with olive oil'],
        nutrition: { calories: 320, carbs: 10, protein: 28, fat: 18 }
    },
    
    {
        id:'r5',
        title:'Vegetable Stir Fry',
        category:'Vegetarian',
        img:'images/stir fried vegetable.jpg',
        desc:'Quick, colorful, and nutritious.',
        ingredients: ['Broccoli', 'Carrots', 'Capsicum', 'Soy sauce', 'Garlic'],
        steps:['Chop vegetables', 'Heat oil', 'Stir fry with garlic & soy sauce'],
        nutrition:{ calories: 200, carbs: 25, protein: 6, fat: 8 }
    },
    
    {
        id:'r6',
        title:'Greek Salad',
        category:'Vegetarian',
        img:'images/greek salad.jpg',
        desc: 'Classic Mediterranean salad with feta cheese.',
        ingredients:['Cucumber', 'Tomatoes', 'Olives', 'Feta cheese', 'Olive oil'],
        steps:['Chop vegetables', 'Add feta & olives', 'Drizzle with olive oil'],
        nutrition:{ calories: 280, carbs: 15, protein: 8, fat: 20 }
    },

    {
        id:'r7',
        title:'Sri Lankan Jackfruit Curry (Polos Curry)',
        category:'Vegetarian',
        img:'images/polos.jpeg',
        desc:'Low-fat and nutritious green jackfruit curry.',
        ingredients:['500g green jackfruit', 'Coconut milk', 'Turmeric', 'Onion', 'Garlic', 'Spices'],
        steps:['Cook jackfruit', 'Sauté onion & garlic', 'Add spices & coconut milk', 'Simmer until cooked'],
        nutrition:{ calories: 320, carbs: 40, protein: 8, fat: 12 }
    },

    {
        id:'r8',
        title:'Egg & Spinach Omelette',
        category:'Non-Vegetarian',
        img:'images/egg n spinach.jpg',
        desc: 'Protein-packed breakfast.',
        ingredients:['2 eggs', 'Spinach', 'Salt', 'Pepper', 'Olive oil'],
        steps: ['Beat eggs', 'Cook spinach', 'Add eggs & cook omelette'],
        nutrition:{ calories: 250, carbs: 5, protein: 18, fat: 15 }

    },

    {
        id:'r9',
        title:'Grilled Salmon with Veggies',
        category:'Non-Vegetarian',
        img:'images/grilled salmon.jpg',
        desc:'Omega-3 rich healthy meal.',
        ingredients:['200g salmon', 'Broccoli', 'Carrots', 'Olive oil', 'Lemon'],
        steps:['Season salmon', 'Grill salmon', 'Steam vegetables', 'Serve together'],
        nutrition: { calories: 400, carbs: 20, protein: 35, fat: 18 }
    },

    {
        id:'r10',
        title:'Chicken & Vegetable Soup',
        category:'Non-Vegetarian',
        img:'images/soup.webp',
        desc:'Comforting, low-fat chicken soup.',
        ingredients:['200g chicken breast', 'Carrots', 'Celery', 'Onion', 'Vegetable broth'],
        steps:['Cook chicken in broth', 'Add chopped vegetables', 'Simmer until soft'],
        nutrition: { calories: 300, carbs: 18, protein: 28, fat: 8 }
    },
    {
        id:'r11',
        title:'Sri Lankan Grilled Fish with Lime',
        category:'Non-Vegetarian',
        img:'images/grilled fish.jpg',
        desc:'Local-style grilled fish with lime and spices.',
        ingredients:['1 medium fish fillet', 'Lime juice', 'Garlic', 'Chili flakes', 'Olive oil'],
        steps:['Marinate fish in lime, garlic & chili', 'Grill until cooked', 'Serve with salad'],
        nutrition:{ calories: 350, carbs: 5, protein: 32, fat: 16 }
    },

    {
        id:'r12',
        title:'Green Smoothie',
        category: 'Drink',
        img:'images/smoothie2.jpg',
        desc: 'Refreshing smoothie with spinach, banana & almond milk.',
        ingredients:['1 cup spinach', '1 banana', '1 cup almond milk', '1 tsp honey'],
        steps:['Add all ingredients to blender', 'Blend until smooth', 'Serve chilled'],
        nutrition: { calories: 180, carbs: 30, protein: 4, fat: 4 }

    },
    {
        id:'r13',
        title:'Lemon Ginger Detox Water',
        category:'Drink',
        img:'images/ginger tea2.jpg',
        desc:'Hydrating and detoxifying infused water.',
        ingredients:['1 lemon', '1-inch ginger', '1 liter water', 'Mint leaves'],
        steps:['Slice lemon & ginger', 'Add to water with mint', 'Refrigerate 1h', 'Serve cold'],
        nutrition: { calories: 10, carbs: 3, protein: 0, fat: 0 }
    },
    {
        id:'r14',
        title:'Grilled Chicken with Quinoa',
        category:'Non-Vegetarian',
        img:'images/quinoa chicken.jpg',
        desc:'Healthy protein-rich main course with grains and veggies.',
        ingredients:['200g chicken breast', '1 cup quinoa', 'Broccoli', 'Olive oil', 'Lemon juice'],
        steps:['Cook quinoa', 'Grill chicken', 'Steam broccoli', 'Serve together with lemon juice'],
        nutrition:{ calories: 450, carbs: 40, protein: 35, fat: 15 }
    },
    {
        id:'r15',
        title:'Vegetable Lentil Curry',
        category:'Vegetarian',
        img:'images/vegetable lentil.jpg',
        desc:'Protein-rich lentil curry with mixed vegetables.',
        ingredients:['1 cup red lentils', '1 carrot', '1 potato', 'Onion', 'Coconut milk', 'Spices'],
        steps:['Cook lentils', 'Add chopped vegetables', 'Add spices & coconut milk', 'Simmer until cooked'],
        nutrition:{ calories: 350, carbs: 50, protein: 15, fat: 10 }
        
    },
    {
        id:'r16',
        title:'Sweet Potato Roasti',
        category:'Vegetarian',
        img:'images/sweet potato.jpeg',
        desc:'Healthy and tasty alternative to potato pancakes.',
        ingredients:['2 sweet potatoes', '1 egg', 'Salt', 'Pepper', 'Olive oil'],
        steps:['Grate sweet potatoes', 'Mix with egg & seasoning', 'Pan-fry until golden'],
        nutrition:{ calories: 230, carbs: 35, protein: 6, fat: 8 }
    }

];

function displayRecipes(recipes){
    recipesContainer.innerHTML = '';
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.img}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <h4>${recipe.desc}</h4>
            <button class="view-btn">View</button>
        `;
        recipesContainer.appendChild(card);

        card.querySelector('.view-btn').addEventListener('click', ()=>{
            openModal(recipe.id);
        });
    });
    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach((card, index) => {
        setTimeout(() => card.classList.add('show'), index * 100); // stagger effect
    });
}

function openModal(id){
    const recipe = RECEIPES.find(r => r.id === id);
    if(!recipe) return;

    modalTitle.textContent = recipe.title;
    modalIngredients.innerHTML = '<ul>'+recipe.ingredients.map(i=>`<li>${i}</li>`).join('')+'</ul>';
    modalSteps.innerHTML = '<ol>'+recipe.steps.map(s=>`<li>${s}</li>`).join('')+'</ol>';
    modalNutrition.innerHTML = `
        <table>
            <tr>
                <th>Nutrient</th>
                <th>Amount</th>
            </tr>
            <tr><td>Calories</td><td>${recipe.nutrition.calories} kcal</td></tr>
            <tr><td>Carbs</td><td>${recipe.nutrition.carbs} g</td></tr>
            <tr><td>Protein</td><td>${recipe.nutrition.protein} g</td></tr>
            <tr><td>Fat</td><td>${recipe.nutrition.fat} g</td></tr>
        </table>
    `;
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
}

modalClose.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
});
window.addEventListener('click', e=>{
    if(e.target === modal){
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }
});


filterButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const category = btn.dataset.category;
        const filtered = category==='All'? RECEIPES : RECEIPES.filter(r=>r.category===category);
        displayRecipes(filtered);
    });
});

searchInput.addEventListener('input', ()=>{
    const query = searchInput.value.toLowerCase();
    const filtered = RECEIPES.filter(r=>r.title.toLowerCase().includes(query));
    displayRecipes(filtered);
});


displayRecipes(RECEIPES);