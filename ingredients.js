$(document).ready(function () {
    const params = (new URL(document.location)).searchParams;
    const id = params.get('id');

    $.ajax({
        url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=ccdaf5364a374af7aa48878964bba01d
`
    }).done(function (data) {
        $('.recipe').append(`<h3 class="recipe-name">${data.title}</h3><img src="${data.image}"></img>`);
        data.extendedIngredients.forEach(ingredient => {
            $('.ingredients').append(`<div class="ingredient"><h3>${ingredient.name}</h3><img src="https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}"></img><p>${ingredient.amount} ${ingredient.unit}</p></div>`);
        });
    });
});
