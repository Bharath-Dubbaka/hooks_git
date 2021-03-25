import React, {useState} from 'react';
import Avatars from './Avatars'
import 'tachyons'
import './app.css'

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       name: "Press Button for Greetings"
//     }
//   }

//   nameChange(){
//     this.setState({
//       name:"Welcome Welcome Welcome"
//     })
//   }

//   render() {

//     const avatarListArray = [
//       {
//         id:1,
//         name:"Bharath",
//         title:"Web Developer"
//       },
//       {
//         id:2,
//         name:"Dubbaka",
//         title:"Front End Developer"
//       },
//       {
//         id:3,
//         name:"Brat",
//         title:"Fullstack Developer"
//       },
//       {
//         id:4,
//         name:"Chinna",
//         title:"React Developer"
//       },
//     ]

//   const newAvatarListArray = avatarListArray.map((avatar) => {
//       return <Avatars key={avatar.id} id={avatar.id} name={avatar.name} title={avatar.title}/>
//   })

//     return (
//       <div className="mainpage bg-light-blue">
//           <h1 className="tc">{this.state.name}</h1>
//           {newAvatarListArray}
//           <button onClick = {()=> this.nameChange()}> Change Text Above </button>
//       </div>
      
//     )
//   }
// }


function App() {
    const [name, setName] = useState(
      "Press Button for Greetings"
      )

     const setSomeName = () => {
       setName("Congo Congo Congo")
     }

  const avatarListArray = [
    {
      id:1,
      name:"Bharath",
      title:"Web Developer"
    },
    {
      id:2,
      name:"Dubbaka",
      title:"Front End Developer"
    },
    {
      id:3,
      name:"Brat",
      title:"Fullstack Developer"
    },
    {
      id:4,
      name:"Chinna",
      title:"React Developer"
    },
  ]

  const newAvatarListArray = avatarListArray.map((avatar) => {
      return <Avatars key={avatar.id} id={avatar.id} name={avatar.name} title={avatar.title}/>
  })
// IN VIDEO OF THAPA HE DID MAP LIKE BELOW 
//   const newAvatarListArray = avatarListArray.map((avatar, i ) => {
//     return <Avatars key={i} id={avatarListArray[i].id} name={avatarListArray[i].name} title={avatarListArray[i].title}/>
// })

  return (

      <div className="mainpage bg-light-blue">
          <h1 className="tc">{name}</h1>
          {newAvatarListArray}
          <button onClick = {() => setSomeName()}>Change Text Above</button>

      </div>

  );
}

export default App;
