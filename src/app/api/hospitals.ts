import mysql from 'mysql2/promise';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello' });
}
// console.log('hello');


// import type { NextApiRequest, NextApiResponse } from 'next';
// import pool from '../lib/db';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const [rows] = await pool.query('SELECT * FROM hospitals');
//     console.log(rows);
//     res.status(200).json(rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching data' });
//   }
// }