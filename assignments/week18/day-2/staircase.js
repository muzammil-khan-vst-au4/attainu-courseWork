function staircase(value) {
    /* if(value == 0) {
        return 0;
    } */
    if (value <= 1) {
        return 1;
    }
    /* if (value == 2) {
        return 2;
    } */

    return staircase(value-1) + staircase(value-2);
}

console.log(staircase(5));