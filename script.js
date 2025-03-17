const gameboard = (function()
{
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const updateBoard = (index, character) => board.at(index) = character; 

    const resetBoard = () => board.fill("");

    return {getBoard, updateBoard, resetBoard};
})();

const player = function()
{
    return {};
};

const displayController = (function()
{

    return {};
});

const gameController = (function()
{
    return {};
})();