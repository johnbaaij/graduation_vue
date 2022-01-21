const axios = require('axios');

// Want to use async/await? Add the `async` keyword to your outer function/method.
export async  function getPokemon():Promise<any> {
    let config = {
        method: 'get',
        url: 'https://pokeapi.co/api/v2/type/3',
        headers: { }
      };

      let list:string[] = [];
      
      axios(config)
      .then((response:any) => {

        for (let i = 0; i < response.data.moves.length; i++) { 
            list.push(response.data.moves[i].name)
        }
      })
      .catch((error:any) => {
        console.log(error);
      });

      return list;

      
  }
