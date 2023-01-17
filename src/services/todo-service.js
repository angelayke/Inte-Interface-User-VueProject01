import constants from '../constants';
import AuthService from './auth-service';

class TodosService {
    url = constants.apiUrl;
    //accessToken = "637aa7d3e0a20b0008881c3c-b5e5c8af-dec1-40c2-ae81-071a662e96cb"  
    apiKey = constants.apiKey;
    authService = new AuthService();

    async createTodo(todo) {
        const endpoint = "todos";

        try {
            const response = await fetch(`${this.url}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: this.apiKey,
                },
                body: JSON.stringify({ input: todo})
            });

            if (!response.ok) {
                throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
            }

            return await response.json();

        } catch (error) {
            console.error(error);
        }
    }
    
    //pour tous les todos
    async getTodos() {
        const endpoint = 'todos/all';
        const id = this.authService.getUserId();

        if (!id) throw new Error("User ID is not found");

        try {
            const response = await fetch(`${this.url}/${endpoint}/6383e670bef7c500081168c0`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.apiKey,
                }
            });

            console.log(response);
        
            if (!response.ok) {
                throw new Error('Could not fetch ${this.endpoint}, received ${response.status}');

        }

            const json = await response.json();

            if (json.success) {
                return json.data;
            } else {
                throw new Error('Could not fetch ${this.endpoint}, received ${json.message}');
            }

        } catch (error) {
            console.error(error);

            return [];
        }
    }

    // un seul by id
    async getTodo(id) {
       const endpoint = "todos";

        try {
            const response = await fetch(`${this.url}/${endpoint}/${id}`);
            
            if (!response.ok) {
                throw new Error(`Could not fetch ${this.endpoint}, received ${response.statut}`);
            }

            const json = await response.json();

            return json;

        } catch (error) {
            console.error(error);

            return [];
        }
    }


    //
    async updateTodo(id, todo) {
        try {
            const response = await fetch(`${this.url}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.apiKey
                },
                body: JSON.stringify({ _id: id, input: todo})
            });
            console.log(response);
        
            if (!response.ok) {
                throw new Error('Could not fetch ${this.endpoint}, received ${response.status}');

        }

            const json = await response.json();

            if (json.success) {
                return json.todo;
            } else {
                throw new Error('Could not fetch ${this.endpoint}, received ${json.message}');
            }

        } catch (error) {
            console.error(error);

            return [];
        }
    }

}


export default TodosService;