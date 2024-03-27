import React, { useEffect, useState } from 'react'
import { deletePuzzle, listPuzzles } from '../../services/PuzzleService'
import { useNavigate } from 'react-router-dom'

const ListPuzzlesComponent = () => {

  const [puzzles, setPuzzles] = useState([])

  const navigator = useNavigate()

  useEffect(() => {
    getAllPuzzles();
  }, [])

  function getAllPuzzles(){
    listPuzzles().then((response) => {
      setPuzzles(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  function createPuzzle() {
    navigator('/puzzle/create')
  }

  function updatePuzzle(puzzleId) {
    navigator(`/edit-puzzle/${puzzleId}`)
  }

  function removePuzzle(puzzleId) {
    console.log(puzzleId);
    deletePuzzle(puzzleId).then((response) => {
      getAllPuzzles();
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })
      
  }

  return (
    <div className="container">
      <h2 className='text-center'>List of Puzzles</h2>
      <button style={{ backgroundColor: 'black' }} className='btn btn-primary mb-2' onClick={createPuzzle}>Create Puzzle</button>
      <table className='table table-striped table bordered'>
        <thead>
          <tr>
            <th>Puzzle ID</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Answer String</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            puzzles.map(puzzle =>
              <tr key={puzzle.id}>
                <td>{puzzle.id}</td>
                <td>{puzzle.question}</td>
                <td>{puzzle.answer}</td>
                <td>{puzzle.answerString}</td>
                <td>
                    <button style={{ backgroundColor: 'black' }} className='btn btn-primary' onClick={() => updatePuzzle(puzzle.id)}>Update</button>
                    <button className='btn btn-danger' onClick={() => removePuzzle(puzzle.id)}>Delete</button>
                </td>  
              </tr>)
          }
        </tbody>
      </table>


    </div>
  )
}

export default ListPuzzlesComponent