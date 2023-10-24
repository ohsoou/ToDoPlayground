import ListBoard from "../components/ListBoard";
import Grid from '@mui/material/Unstable_Grid2';
import * as React from "react";

const TodoBoard = () => {
    const [todoList, setTodoList] = React.useState([]);
    const [todo, setTodo] = React.useState({});
    const [done, setDone] = React.useState({});

    const getTodos = React.useCallback(async () => {
        const resp = await fetch('https://dummyjson.com/todos');
        const data = await resp?.json();
        setTodoList(data?.todos);
        setTodo({title: "todo", dataList: todoList.filter(data => !data.completed)});
        setDone({title: "done", dataList: todoList.filter(data => data.completed)});
    }, [todoList]);


    React.useEffect(() => {
        getTodos();
    }, [getTodos]);

    return (
        <>
            <Grid sx={{ mt: 10, flexGrow: 1 }} container columnSpacing={40} justifyContent="center">
                <Grid item={"true"}><ListBoard {...todo}></ListBoard></Grid>
                <Grid item={"true"}><ListBoard {...done}></ListBoard></Grid>
            </Grid>
        </>
    );
}

export default TodoBoard;