// const table = document.querySelector(`.commands-table`);

const section = document.querySelector('.commands');

for (const category in dump) {
    dump[category] = dump[category].sort((a, b) => a.name.localeCompare(b.name));

    let table = `<h3>${category.replaceAll('`', '')}</h3>`;

    if (category.toLowerCase().includes('betting')) {
        table += `<p>Note: FootballBot's betting system is fully simulated and uses no actual currency.</p>`;
    }

    table += `<table class="commands-table">`

    for (let i = 0; i < dump[category].length; i++) {
        table += `<tr><td>/${dump[category][i].name}</td><td>${dump[category][i].description}</td></tr>`;
    }

    table += '</table><br>';

    section.innerHTML += table;
}
