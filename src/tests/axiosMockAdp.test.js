var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

var mock = new MockAdapter(axios);

describe('Mocking Axios', () => {
  it('should mock data for GET request', () => {
    mock.onGet("/pokemons").reply(200, {
      pokemons: [{ id: 1, name: "bulbasaur" },
                { id: 2, name: "caterpie" },
                { id: 3, name: "pikachu" }]
    });

    async function getData() {
      const res = await axios.get("/pokemons")
      return res.data
    }

    expect(getData()).resolves.toStrictEqual({
      pokemons: [{ id: 1, name: "bulbasaur" },
                { id: 2, name: "caterpie" },
                { id: 3, name: "pikachu" }]
    })

  })
})

