describe("Testing the update function", () => {
    test("Testing if function updateUI add HTML to the div element",async () => {
        document.body.innerHTML = `
            <form class="" onsubmit="return handleSubmit(event)">
                <input id="name" type="text" name="input" value="" onblur="onBlur()" placeholder="Name">
            </form>
            <section>
                <div id="results"><strong>Form Results:</strong></div>
                <div id="polarity"></div>
                <div id="agreement"></div>
                <div id="subjectivity"></div>
                <div id="confidence"></div>
                <div id="irony"></div>
            </section>
        `;
        require("../updateUI")

        const newpolarity = document.getElementById("polarity");
        const newAgreement = document.getElementById("agreement")
        const newSubjectivity = document.getElementById("subjectivity")
        const newConfidence = document.getElementById("confidence")
        const newIrony = document.getElementById("irony")
        const button = document.getElementById("name")

        const data = {
            score_tag:"ok",
            agreement:"good",
            subjectivity:"super",
            confidence:"great",
            irony:"exellent!"
        }

        button.click();
        function updateUI(data) {
            expect(newpolarity.innerHTML).toBe('<div id="polarity">ok</div>')
            expect(newAgreement.innerHTML).toBe('<div id="polarity">good</div>')
            expect(newSubjectivity.innerHTML).toBe('<div id="polarity">super</div>')
            expect(newConfidence.innerHTML).toBe('<div id="polarity">great</div>')
            expect(newIrony.innerHTML).toBe('<div id="polarity">exellent</div>')
        }
    })
});

