//4. Create a component named "List" that takes one prop - "items". The component should display an
// unordered list element with the given list items.

export default function List(){
    let items = ["apple", "banana", "grapes", "pear"];

    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
            <li>{items[3]}</li>
        </ul>
    );
}