<script lang="ts">
    // Recieve props from parent
    export let todo: Todo;
</script>
<style>
    .todo-item{
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        grid-gap: 0.25rem;
        align-items: center;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        background-color: white;
        border-radius: 0.75rem;
        transform: translate(-1px, -1px);
        transition: filter 0.2s, transform 0.2s;
        filter: drop-shadow(2px 4px 6px rgba(0,0,0, 0.1));
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .todo-item button {
        height: 2em;
        width: 2em;
        border-radius: 50%;
        border: none;
        background-color: transparent;
    }
    .todo-item input {
        flex: 1;
        border-radius: 3px;
        padding: 0.5em 2em 0.5em 0.8em;
    }
    .toggle button {
        border: 1px solid rgba(0,0,0,0.2);
        background-size: 1em ;
        background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    }
    .text {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
    }
    .text button {
        position: absolute;
        right: 0;
        opacity: 0;
        border-radius: 0px;
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");
        background-size: 100%;
    }
    .text input:focus + button,
    .text button:focus {
        transition : opacity 0.2s;
        opacity: 1;
    } 

    .delete button {
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        opacity : 0.2;
        border-radius: 0px;
        background-size: 100%;
    }
    .delete button:focus,
    .delete button:hover{
        opacity: 1;
    }
    /* Uncomment when API added */
    /* .done {
        transform: none;
        opacity: 0.4;
        filter: drop-shadow(0 0 1px rgba(0,0,0,0.1));
    }   
    .done .toggle button {
        background-image: url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    } */
</style>

<div class="todo-item done">
    <form action="" method="" class="toggle">
        <input type="hidden" name="done" value="" >
        <button aria-label="Mark Done/Not Done"></button>
    </form>
    <form action="/api/todos/{todo.id}.json?_method=patch" method="post" class="text">
        <input type="text" name="text" value={todo.text}>
        <button aria-label="Save Todo" type="submit"></button> 
    </form>
    <!-- HTML form supports only POST/GET requests 😢-->
    <form action="/api/todos/{todo.id}.json?_method=delete" method="post" class="delete">
        <button aria-label="Delte Todo"></button>
    </form>
</div>