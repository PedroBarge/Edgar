/* eslint-disable react/prop-types */
const SpamWithBotton = ({buttonHandler}) =>{
return (
    <span>
        <button onClick={buttonHandler}>Option 1</button>
        <button onClick={buttonHandler}>Option 2</button>
        <button onClick={buttonHandler}>Option 3</button>
    </span>
);
};

export default SpamWithBotton;