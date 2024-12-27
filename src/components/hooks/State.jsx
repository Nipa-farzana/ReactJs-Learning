export const State = () => {
    //let value = 0;
   // const handleButtonClick = () => {
     //   value += 1;
      //  console.log(value);
   // }

    const [value, setValue] = useState(0);
    const handleButtonClick = () => {
        setValue(value + 1);
    }
   
    return(<>

    <h1>{value}</h1>

    <button onClick={handleButtonClick}>Increment</button>


    </>)
}