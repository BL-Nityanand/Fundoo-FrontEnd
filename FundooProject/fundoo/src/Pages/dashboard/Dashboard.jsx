import React, { useState } from 'react'
import Header from '../../Components/header/Header'
import TakeNote1 from '../../Components/takeNote1/TakeNote1'
import TakeNote2 from '../../Components/takeNote2/TakeNote2'
import TakeNote3 from '../../Components/takeNote3/TakeNote3'
import { Redirect } from 'react-router-dom'
import { getNotes } from '../../services/DataService'
import './Dashboard.css'
// import { Drawer } from '@mui/material'
import Drawer1 from '../../Components/drawer/Drawer'
import TakeNoteOne from '../../Components/takeNote1/takeNoteOneMUI'
import TakeNoteTwoMUI from '../../Components/takeNote2/takeNoteTwoMUI'
import HeaderOne from '../../Components/header/HeaderOne'
import TakeNoteThreeTest from './takeNoteThreeTest'
import TakeNoteThreeGrid from './takeNoteThreeTest'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




function Dashboard() {

  const [drawer, SetDrawer] = React.useState(false)
  const [listOfNotes, setListOfNotes] = React.useState([])
  const [noteView, setNoteView] = useState(true)
  const [currentNoteChoice, setCurrentNoteChoice] = useState('notes')
  const [modalView, setModalView] = React.useState(true)


  React.useEffect(() => {
    GetNotes()
    // getNotes().then((response)=> {
    //   console.log(response.data.data.data)
    //   setListOfNotes(response.data.data.data)
    // } ).catch((err)=>console.log(err))
  }, [noteView, currentNoteChoice])

  const GetNotes = () => {
    getNotes().then((response) => {
      let filter = []
      if (currentNoteChoice === 'notes') {
        filter = response.data.data.data.filter((note) => {
          if (note.isArchived === false && note.isDeleted === false) {
            return note
          }
        })
      }
      else if (currentNoteChoice === 'archive') {
        filter = response.data.data.data.filter((note) => {
          if (note.isArchived === true && note.isDeleted === false) {
            return note
          }
        })
      }
      setListOfNotes(filter)
    }).catch((err) => { console.log(err) })

    // .then((response) => {
    //   console.log(response.data.data.data)
    //   setListOfNotes(response.data.data.data)
    // }).catch((err) => console.log(err))
  }

  // if (!autorized) {
  //   return <Redirect to = '/SignIn'/>

  const listerToHeader = () => {
    SetDrawer(!drawer)
  }

  const listenToSideNavBar = (noteChoice) => {
    setCurrentNoteChoice(noteChoice)

  }

  const listenToTakenoteOne = () => {
    setNoteView(false)
  }

  const listenToTakenoteTwo = () => {
    setNoteView(true)
  }

  const listenToTakeNoteThree = () => {
    GetNotes()
  }

  const listenToTakeNoteThreeModal = () => {
    setModalView(!modalView)
  }

  return (
    <Box>
      <Grid container>
        <Grid item lg={12} >
          <HeaderOne listerToHeader={listerToHeader} />
        </Grid>
        <Grid item lg={2} >
          <Drawer1 drawer={drawer} listenToSideNavBar={listenToSideNavBar} />
        </Grid>
        <Grid item >

        </Grid>
      </Grid>
      <Grid>
        {
          noteView ? <TakeNoteOne listenToTakenoteOne={listenToTakenoteOne} /> : <TakeNoteTwoMUI listenToTakenoteTwo={listenToTakenoteTwo} />
        }
      </Grid>

      {/* <div className='notesContainer'>
        {listOfNotes.map((note) => (<TakeNote3 className='TakeNote3Class' notes={note}/>))}
      </div> */}

      <Grid container style={{ flexGrow: 1, width: '75vw', height: 'auto', position: 'relative', top: 10, left: 340 }} spacing={2} columns={{ xs: 8, sm: 12, md: 12 }} >
        {
          listOfNotes.map((note) => (<Grid item lg={9}>
            <TakeNoteThreeGrid listenToTakeNoteThree={listenToTakeNoteThree} listenToTakeNoteThreeModal={listenToTakeNoteThreeModal} style={{ border: '1px solid red' }} notes={note} />
          </Grid>))
        }
      </Grid>
    </Box>
  )
}

export default Dashboard