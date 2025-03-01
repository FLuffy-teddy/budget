import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || ''
const client = new MongoClient(uri)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log('Incoming data:', req.body) // Log the incoming data
      await client.connect()
      const database = client.db('budget')
      const collection = database.collection('logs')
      const result = await collection.insertOne(req.body)
      res.status(200).json({ message: 'Data saved successfully', result })
    } catch (error) {
      res.status(500).json({ message: 'Error saving data', error })
    } finally {
      await client.close()
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
