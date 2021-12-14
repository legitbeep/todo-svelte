// this will be the name of action

// This function works like useEffect
export const enhance = (form: HTMLFormElement, {
    callBack
}) => {
    // 💀NOTE: This action is executed everytime the element will
    // be mounted to the DOM.

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        try{
            // Zamn⚡
            const body = new FormData(form);
            const res = await fetch(form.action, {
                method : form.method,
                body,
                headers : {
                    accept: "application/json",
                }
            });
            if(res.ok){
                // not json to access status etc
                callBack(res,form);
            } else {
                console.error("FETCH ERROR", await res.text());
            }
        } catch (err) {
            console.error("FETCH ERROR", err);
        }
    }

    form.addEventListener("submit", handleSubmit);

    return {
        destroy(){
            // Clean all the listeners over here
            form.removeEventListener("submit", handleSubmit);
        }
    }
}