export const Practice = () => {
    const students = [2,6];
    return (
        <>

        {/*<p>{students.length === 0 && "no students found"}</p>*/}

       <p>{!students.length && "no students found"}</p>

        <p>no of students: { students.length}</p>


        </>
        

    );
};