//UseEffect() = react hook that tell react do do something WHEN (PICK ONE):
//              This component Rerenders
//              This component mounts
//              The state of a value changes.

//useEffect(function, [depedencies])

//Syntax based on diffrent conditions
//1. useEffect(() = {})           //Runs after every re-render
//1. useEffect(() = {}, [])       //Runs only on mount
//1. useEffect(() = {}, [value])  //Runs on mount and when value changes

//USES
//#1 Event Listiners
//#2 DOKM manipulation
//#3 Subcriptions (real-time updates)
//#4 Fetching Data from API
//#5 Clean up when component unmounts
