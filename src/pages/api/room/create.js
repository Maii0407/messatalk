import dbConnect from "lib/dbConnect";
import Room from "model/Room";


export default async function handler( req, res ) {
  try {
    if( req.method === 'POST' ) {
      await dbConnect();

      const newRoom = new Room({
        name: req.body.name,
        creator: req.body.creator,
        date: new Date()
      });

      newRoom.save();

      return res.status( 200 ).json({
        message: 'room created',
        newRoom
      });
    }
    else {
      return res.status( 500 ).json({
        message: '/api/room/create only handles POST requests',
      });
    }
  }
  catch( error ) {
    console.log( error );
    res.status( 500 ).json({
      message: 'error in /api/room/create',
      error
    });
  }
};