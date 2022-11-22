class TodosService {

async getTodos() {
    try {
        const response = await fetch(this.url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.accestoken
            }
        });
        if (!response.ok) throw new Error(response.status);

        return await response.json();
    } catch (e) {
        console.error(e);

        return [];
    }
}

}