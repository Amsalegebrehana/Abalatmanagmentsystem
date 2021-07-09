const pool= require('../queries');


const adduser = async (req, res) => {
  try{
      const {firstname,lastname, department, gender, muyaKifil, nisehaAbat, batch, school_id, phoneNumber} = req.body;
      const user = await pool.query(
          "INSERT INTO users (firstname,lastname, department, gender, muyaKifil, nisehaAbat, batch, school_id, phoneNumber) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
          [firstname,lastname, department, gender, muyaKifil, nisehaAbat, batch, school_id, phoneNumber]
      );
      res.json(user);
      console.log("Server runing");
  } catch (err){
      console.error(err.message);
  }
};
const getAllUsers= async(req, res) => {
    // response.json({ info: 'Node.js, Express, and Postgres API' })
    // console.log("Get working");
    try{
      const users= await pool.query("SELECT * FROM users");
      res.json(users.rows);

    }catch(err){
      console.error(err.message);
    }

};

const getUserById= async (req,res)=>{

    try{
      const {query}=req.params;
      let users= await pool.query("SELECT * FROM users WHERE gender = $1 OR lastname = $2 OR firstname = $3 OR department = $4 OR school_id = $5",[query,query,query,query,query]);
      if(users.rows.length===0){
        console.log("empty")
        users=await pool.query("SELECT * FROM users WHERE batch = $1 OR user_id = $2",[query,query]);
      };
      // const {id}= req.params;
      // const user= await pool.query("SELECT * FROM users WHERE user_id = $1",[id]);
      res.json(users.rows);
  
    }catch(err){
      console.error(err.message);
    }
  };


const updateUser= async (req,res)=>{
try{
    const {id} = req.params;
    console.log("The id is: " + id);
    const { firstname,lastname, department, gender, muyaKifil, nisehaAbat, batch, school_id, phoneNumber} = req.body;
 
    const user=await pool.query("UPDATE users SET firstname = $1, lastname=$2, department= $3, gender=$4, muyaKifil=$5, nisehaAbat=$6, batch=$7, school_id=$8, phoneNumber=$9 WHERE user_id = $10", 
    [
      firstname,lastname, department, gender, muyaKifil, nisehaAbat, batch, school_id, phoneNumber,id
    ]);
    res.json('User Updated Successfully');
  }catch(err){
    console.error(err.message);
  }
};


const deleteUser=async(req,res)=>{
    try{
      const {id}= req.params;
      const user=await pool.query("DELETE FROM users WHERE user_id = $1",[id]);
      res.json("User deleted successfully");
    }catch(err){
      console.error(err.message);
    }
};

module.exports={adduser,getAllUsers,getUserById,deleteUser,updateUser};