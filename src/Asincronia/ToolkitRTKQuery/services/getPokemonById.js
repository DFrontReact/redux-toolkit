export const getPokemonById = builder => ({
  getPokemonById: builder.query({
    query: (id) => ({
      url: `/${id}`,
    }),
    transformResponse: response => {
      const result = {
        name: response?.name,
        img: response?.sprites?.front_default  ?? response?.sprites?.back_default
      };

      return result
    },
  })
});
