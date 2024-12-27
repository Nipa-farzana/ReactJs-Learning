import "./EV.css";
export const EventHandling = () => {
    //function handleButtonClick (){
       // alert("Hey I am onClick Event");
//}
 const handleButtonClick = (event) => {
        console.log(event);

        alert("Hey I am onClick Event");
    };

    return (
        <>
    <button onClick = {handleButtonClick}>Click Me</button>
    <br />
    <button onClick = {() => handleButtonClick()}>Click Me</button>
    </>
    );
    
}