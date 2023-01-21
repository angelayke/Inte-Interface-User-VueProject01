import AuthService from '../services/auth-service';
import TodosService from '../services/todo-service';
import constants from '../constants';

// FILTRES //
class filters {
    url = constants.apiUrl;
    //const getTodos = async () => (todos.value = await todosService.getTodos());

    function depassees() => {
        let arrDepassees =  data.filter(data => data.done === false && data.timeLimit =< Date.now());
        return arrDepassees;
    };

    function noLimit () => {
        let arrNoLimit = data.filter (data => data.timeLimit === undefined); 
            // ou === null mais null équivaut à zéro..undefined équivaut à aucune valeur de rentrée..?
        return arrNoLimit;
    };

    function enCours () => {
        let arrEnCours = data.filter (data => data.done === false && data.timeLimit > Date.now());
        return arrEnCours;
    };

    function doneGoodTime () => {
        let arrDoneGoodTime = data.filter (data => data.done === true && data.timeLimit =< this.timeLimit.value);
        return arrDoneGoodTime;
    };

    function doneOutOfTime () => {
        let arrDoneOutOfTime = data.filter (data => data.done === true && data.timeLimit => this.timeLimit.value);
        return arrDoneOutOfTime;
    };
}

export default filters;
