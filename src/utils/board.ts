import { BoardState, Moves } from './index'
export const printFomatedBoard = (state: BoardState): void => {
    let formatedString = '';
    state.forEach((cell,index) => {


        formatedString += cell ? ` ${cell} |` : "   |"


        const needsNewLine = (index + 1) % 3 === 0; 

        if(needsNewLine){
            formatedString = formatedString.slice(0, -1)

            if(index < 8){
                formatedString += '\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n'
            }
        }
    });

    console.log(formatedString)

}

export const isEmpty = (state: BoardState): boolean =>{
    return state.every((cell) =>{
        return cell === null
    })
}

export const isFull = (state: BoardState): boolean =>{
    return state.every((cell) =>{
        // return cell !== null
        return cell
    })
}

export const getAvailableMoves = (state: BoardState): number[] =>{
    const moves: Moves[] = []
    state.forEach((cell,index) => {
        if(cell === null){
            moves.push(index as Moves);
        }
    })

    return moves

}