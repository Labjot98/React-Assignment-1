//2. Create a component named "Button" that takes two props - "text" and "onClick". The component should
//display a button element with the given text and call the onClick function when clicked5

function OnClickBtn(){
    let text = "Hey there";

    function btnClicked(){
        alert("Button Clicked");
    }

    return(
        <>
        <button onClick={btnClicked}>
            <span>{text}</span>
        </button>
        </>
    );
}

export default OnClickBtn;