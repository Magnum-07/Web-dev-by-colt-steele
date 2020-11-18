const container = document.querySelector('#container');
for (let i=1;i<=151;i++){
    const pokemon = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement('span');
    span.innerText = `#${i}`;
    // const p = document.createElement('p');
    // p.innerText = i;
    img.src = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    pokemon.append(img)
    pokemon.append(span)
    container.append(pokemon);
}
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
