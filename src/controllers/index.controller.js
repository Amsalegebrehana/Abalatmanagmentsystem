const pool= require('../queries');

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
    //   const {query}=req.params;
    //   let users= await pool.query("SELECT * FROM users WHERE gender = $1 OR lastname = $2 OR firstname = $3 OR department = $4 OR school_id = $5",[query,query,query,query,query]);
    //   if(users.rows.length===0){
    //     users=await pool.query("SELECT * FROM users WHERE batch = $1 ",[Number(query)]);
    //   }
      const {id}= req.params;
      const user= await pool.query("SELECT * FROM users WHERE user_id = $1",[id]);
      res.json(user.rows);
  
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

module.exports={getAllUsers,getUserById,deleteUser};