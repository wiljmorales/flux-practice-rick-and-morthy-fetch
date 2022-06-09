const API_URL = "https://rickandmortyapi.com/api"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
		},
		actions: {
			getCharacters: async () => {
				try {
					const response = await fetch(
					`${API_URL}/character`
				)
				const body = await response.json()
				if (response.status !==200) {
					alert("no pudimos cargar los personajes")
					return
				}
				setStore({
					characters: body.results
				})
			}
			catch(error) {
				alert("fallamos ='(")
			} 
			}
		}
	};
};

export default getState;
