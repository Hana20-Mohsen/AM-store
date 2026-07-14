import connectDB from "./DB/connection.js";

import path from 'path'
import { fileURLToPath } from 'url';
import cors from 'cors';
import fs from 'fs'
import { globalErrorHandling } from "./utilities/error/error.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('__dirname : ' , __dirname);

const bootstrap=(app , express)=>{
    app.use(express.json());
    // app.use('/static', express.static(path.join(__dirname, 'utilities/email/template/img')));

    const allowedOrigins = [
        'http://localhost:3000',
        `https://advanced-ecommerce-xjq1.vercel.app`
      ];
    //here i will use cors
    app.use(cors({
        origin: (origin, callback) => {
          if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
          } else {
            callback(new Error('CORS not allowed'));
          }
        },
        credentials: true
      }));


      const uploadsPath =path.join(__dirname, '../uploads');
      console.log('Serving static files from:', uploadsPath);
      if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

     app.use('/uploads', express.static(uploadsPath));

    app.get('/',(req,res,next)=>{
        return res.status(200).json({
            message:"welcome in e-commerce project..."
        })
    })


    // app.use('/api/v1/user' ,userController )


    app.use((req, res) => {
    return res.status(404).json({
        message: 'In-Valid routing!!'
    });
});
    // app.all('*' , (req,res,next)=>{
    //     return res.status(404).json({
    //         message:'In-Valid routing!!'
    //     })
    // })

    app.use(globalErrorHandling)

    connectDB()
}

export default bootstrap;