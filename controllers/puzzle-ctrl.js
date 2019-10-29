const Puzzle = require('../models/puzzle-model');

getPuzzlesByType = async (req, res) => {
    await Puzzle.find({ type: req.params.puzType }, (err, puzzles) => {
        console.log('getPuzzlesByType:');        
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!puzzles) {
            return res
                .status(404)
                .json({ success: false, error: `Puzzles not found` })
        }
        return res.status(200).json({success: true, data: puzzles })
    }).catch(err => console.log(err))
}

module.exports = { getPuzzlesByType };
