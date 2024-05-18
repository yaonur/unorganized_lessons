// bad scenario
type Filter = {
    (array: number[], predicate: (item: number) => boolean): number[];
    (array: string[], predicate: (item: string) => boolean): string[];
    (array: object[], predicate: (item: object) => boolean): object[];
};

const filter: Filter = (array: any[], predicate: Function) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
};

// good implementation
type FilterGeneric = {
    <T>(array: T[], predicate: (item: T) => boolean): T[];
};
const filterGeneric: FilterGeneric = (array, predicate) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
};

export function main() {
    console.log("Generics-----------");
    let numbers = [1, 2, 5, 7, 9, 10, 12];

    function greaterThanSven(item: number) {
        return item > 7;
    }
    console.log(filter(numbers, greaterThanSven));

    let animals = ["cat", "dog", "rat", "lion"];
    function filterCats(item: string) {
        return item === "cat";
    }
    function brokenFunction() {
        return "something";
    }
    // console.log(filter(animals, filterCats));
    // console.log(filterGeneric(animals, filterCats));
    // // with generic better explanations given
    // console.log(filter(animals,brokenFunction))
    // console.log(filterGeneric(animals,brokenFunction))
}

const customMap = <T, U>(array: T[], func: (item: T) => U) => {
    // check if the array is empty
    if (array.length === 0) {
        return array;
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i]);
    }
    return result;
};

let numbers = [4, 5, 6, 7, 8];

const converted = customMap(numbers, (num) => num.toString());

console.log(converted);
