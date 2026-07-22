function Events(){
    function press(e){
        alert("key pressed successfully"+e.key)

    }
    return(
        <>
        <div>
            <button onMouseOver={
                ()=>alert("Doremon Came...")
            }
            >
                Doremon
                </button>
                <button onMouseLeave={()=>
                    alert("nobitha has a problem.")
                }>
                    nobitha
                    
                    </button>        
                </div>
                <input onKeyDown={press}/>
                <input onFocus={()=>console.log("Focused")}/>
                <input onBlur={()=>console.log("Blurred")}/>
        </>
    );

}
export default Events;