const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const WordApi = {    
    fetchWord: async (word: string) => {
        try {
            const response = await fetch(`${API_URL}${word}`);
            return response;
        } catch (error) {
            console.error('Error fetching word:', error);
        }
    }
}

