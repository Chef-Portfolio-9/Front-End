
import React, { useState, useEffect } from "react";
import {Select, FormControl,InputLabel, Button,TextField,Container ,Switch,FormControlLabel, Typography,TextareaAutosize, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar.js';
import { updateRecipe } from '../../actions/RecipeActions/UpdateRecipe';
import AxiosWithAuth from "../../utils/AxiosWithAuth.js";
 
const EditRecipe= (props) => {
   const id = props.match.params.id 
   const userID = localStorage.getItem("userID");
  //  const [update, setUpdate]= useState({
  //   recipe_name: '',
  //   meal_type: '',
  //   recipe_id: id
  //  })
  const [recipe, setRecipe] = useState({})

   useEffect(() => {
    AxiosWithAuth()
      .get(`/api/recipes/${id}`)
      .then(res => {
        console.log(res)
        setRecipe(res.data)
      })
      .catch(error => {
        console.log('the data was not returned', error)
      })
  },[])

  // const updateRecipe = event => {
  //   event.preventDefault();
  //   setRecipe(recipe)
  //   console.log(recipe)
  //   AxiosWithAuth()
  //   .put(`/api/recipes/${id}`)
  //   .then(res => {
  //     props.history.push('/ChefDashboard')
  //   });
  // };
   
  const handleChanges = e => {
    e.preventDefault();
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
   };
  //  const submitUpdatedRecipe = e=> {
  //       console.log(update, 'updated recipe')
  //       e.preventDefault();
  //       console.log(update.id, 'match id')
  //       props.updateRecipe(update.id ,update);
  //       props.history.push('/ChefDashboard')
  //     };
  return(
    <form onSubmit={updateRecipe}>
      <input value={recipe.recipe_name} name='recipe_name' id='recipename' onChange={handleChanges}/>
      <input value={recipe.meal_type} name='meal_type' id='mealtype' onChange={handleChanges}/>
      <button>Submit</button>
    </form>
  )     
 }

 export default EditRecipe;

//  const mapStateToProps = state => {
//     return state;
// }
// export default connect(mapStateToProps, {updateRecipe})(EditRecipe);

// const useStyles = makeStyles(theme => ({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: 250,
//       },
//     },
//     paper:{
  
//     }
  
//   }));

//     const EditRecipe = (props) => {

//     const classes = useStyles();
//     const userID = localStorage.getItem('userID');

//     const [recipe, updatedRecipe] = useState({
//         recipe_name: '',
//         chef_id: userID,
//         meal_type: ''
//     });

//     useEffect(() => {
//         props.updateRecipe(userID);
//       }, []);
//       console.log(props);

//     const handleChanges = event => {
//         event.preventDefault();
//         updatedRecipe({ ...recipe, [event.target.name]: event.target.value });
//       };
    
//       const submitUpdatedRecipe = event => {
//         const updatedRecipe = {
//           recipe_name: recipe.recipe_name,
//           chef_id: recipe.userID,
//           meal_type: recipe.meal_type
//         };
//         event.preventDefault();
//         props.updateRecipe(updatedRecipe, userID);
//         props.history.push('/chefDashboard')
//       };

    
//     return (
//         <div>
//             <form onSubmit={submitUpdatedRecipe} className={classes.root} noValidate autoComplete="off">
//     <NavBar/>
//       <h2>EditRecipe Recipe</h2>
//     <Paper className={classes.paper}>
//     <div>
//     <FormControl className={classes.formControl}>
//     <InputLabel htmlFor="age-native-simple">Meal Type</InputLabel>    
//   </FormControl> 
//     </div>
//     <br/>
//     <div>
//     <TextField
//       variant="outlined"
//       margin="normal"
//       required
//       fullWidth
//       id="recipename"
//       label="Recipe Name"
//       name="recipe_name"
//       autoFocus
//       value={recipe.recipe_name}
//       onChange={handleChanges}
//     />
//     <TextField
//       variant="outlined"
//       margin="normal"
//       required
//       fullWidth
//       id="mealtype"
//       label="Meal Type"
//       name="meal_type"
//       autoFocus
//       value={recipe.meal_type}
//       onChange={handleChanges}
//     />
//     </div>
// <div>
//       </div>
//       <br/>

//     </Paper>
//       <div> <br/> </div>






//       <Button type="submit" variant="contained" color="secondary" margin="normal">
//         Submit
//       </Button>
//     </form>
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return state;
// }
// export default connect(mapStateToProps, {updateRecipe})(EditRecipe);

// import React, { useState } from "react";
// import { connect } from 'react-redux';
// import { updateRecipe } from '../../actions/RecipeActions/UpdateRecipe';
// import NavBar from '../../components/NavBar.js';


// const EditRecipe = (props) => {
//     const userID = localStorage.getItem('userID');
//     const recipe_id= props.recipe.id
//     const classes = useStyles();
 
//     const [update, setUpdate] = useState({
//       recipe_name: '',
//       chef_id: userID,
//       meal_type: ''
//     });
    
//     const saveEdit= e=>{
//         e.preventDefault()
//         props.dispatch(updateRecipe(recipe_id))
//     }


//     const handleChanges = event => {
//       setUpdate({ ...update, [event.target.name]: event.target.value });
//     };
  
//     return (
  
  
//       <form onSubmit={saveEdit} className={classes.root} noValidate autoComplete="off">
//       <NavBar/>
//         <h2>Add Recipe</h2>
//       <Paper className={classes.paper}>
//       <div>
//       <FormControl className={classes.formControl}>
//       <InputLabel htmlFor="age-native-simple">Meal Type</InputLabel>
//        {/* <Select
//         native
  
//         inputProps={{
//           name: 'Meal Type',
//           id: 'meal-type',
//         }}
//       >
//         <option value="" />
//         <option>Breakfast</option>
//         <option>Lunch</option>
//         <option>Dinner</option>
//         <option>Snack</option>
//         <option>Dessert</option>
//       </Select> */}
//     </FormControl> 
  
  
//       </div>
//       <br/>
//       <div>
  
//       <TextField
//         variant="outlined"
//         margin="normal"
//         required
//         fullWidth
//         id="recipename"
//         label="Recipe Name"
//         name="recipe_name"
//         autoFocus
//         value={update.recipe_name}
//         onChange={handleChanges}
//       />
//       <TextField
//         variant="outlined"
//         margin="normal"
//         required
//         fullWidth
//         id="mealtype"
//         label="Meal Type"
//         name="meal_type"
//         autoFocus
//         value={update.meal_type}
//         onChange={handleChanges}
//       />
  
  
//       </div>
//         {/* <div>
//           <TextField
//             id="outlined-multiline-static"
//             label="Ingredients"
//             multiline
//             rows="20"
//             defaultValue="Add Ingredients"
//             variant="outlined"
//           />
//           <TextField
//             id="outlined-multiline-static"
//             label="Instructions"
//             multiline
//             rows="20"
//             defaultValue="Add Steps"
//             variant="outlined"
//           />
//         </div>
//         <br/> */}
  
//   <div>
//         {/* <Button  variant="contained" component="label">
//           Upload Recipe Image
//           <input
//             type="file"
//             style={{ display: "none"}}
//           />
//         </Button> */}
//         </div>
//         <br/>
  
//       </Paper>
//         <div> <br/> </div>
  
  
  
  
  
  
//         <Button type="submit" variant="contained" color="secondary" margin="normal">
//           Submit
//         </Button>
//       </form>
//     );
//   }
  
//   const mapStateToProps = state => {
//     return state;
//   }
  
//   export default connect(mapStateToProps, { updateRecipe })(EditRecipe);


