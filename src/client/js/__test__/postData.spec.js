import { postData } from "../postData";

beforeEach(() => {
    fetch.resetMocks();
});
  

it("return input to the server", async () => {
    fetch.mockResponseOnce(JSON.stringify({ sentence: hello }));
    const newData = await postData('http://localhost:8081/clientdata',data={})
    expect(newData).toBe({sentence: hello});
});

