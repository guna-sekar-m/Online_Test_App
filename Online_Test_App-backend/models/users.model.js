import { Schema as _Schema } from 'mongoose';
import con from '../db/db.js';
const Schema = _Schema;

 const AdminSchema = new Schema(
    {
      Email:String,
      Password:String,
      Role:String,
    },
   { timestamps: true }
)

var admin=con.model("admins", AdminSchema)
export {users, admin};
