import { postData } from "../postData";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({agreement:"DISAGREEMENT"}),
    })
);

it("return input", async () => {
    const data = {agreement:"DISAGREEMENT"}
    const newData = await postData('http://localhost:8081/clientdata',data)
    expect(newData).toStrictEqual({agreement:"DISAGREEMENT"})
});

