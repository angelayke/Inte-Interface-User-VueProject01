import constants from '../constants';

class TodosService {
    url = constants.apiUrl;
    //accessToken = "637aa7d3e0a20b0008881c3c-b5e5c8af-dec1-40c2-ae81-071a662e96cb"  
    apiKey = constants.apiKey;
    
    //pour tous les todos
    async getTodos() {
        const endpoint = 'todos/all';
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
    async getTodo() {
        const endpoint = 'todo';
        try {
            const response = await fetch(`${this.url}/${endpoint}/_id`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.apiKey
                }
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