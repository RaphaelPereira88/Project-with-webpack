

describe("Testing the update function", () => {
    test("Testing if function updateUI add HTML to the div element", () => {
        document.body.innerHTML = `
        <div id="polarity"></div>
        `;
    });
    require("../updateUI")

    const newpolarity = document.getElementById("polarity");

    newpolarity.value = 'ok';

    expect(newpolarity.innerHTML).toBe('<div id="polarity">ok</div>')

});

