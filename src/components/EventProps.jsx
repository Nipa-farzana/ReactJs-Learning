export const EventProps = () => {

    const HandleWelconeUser = (name) => {
        alert(`Welcome ${name}`);
    }

    const handleHover = () => {
        console.log("Hovered");
    }

    return (
        <section>
            <WelcomeUser onClick = {() => HandleWelconeUser("Nipa")} onMouseEnter = {handleHover} />
        </section>
    );
}


const WelcomeUser = (props) => {

    const handleGreetings = () => {
        alert("Hello, Welcome to Nipa Technology");
        props.onClick(); // Call the parent function
    }
    return (
        <>

         <button onClick={props.onClick}> Click</button>

         <button onMouseEnter={props.onMouseEnter}>Hover me</button>
         <button onClick={handleGreetings}>greetings</button>

        </>
        
    );
};
