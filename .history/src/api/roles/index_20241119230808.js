import dbConnect from '../../../lib/dbConnect';
import Role from '../../../models/Role';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const roles = await Role.find({});
        res.status(200).json({ success: true, data: roles });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const role = await Role.create(req.body); // Validate or sanitize input
        res.status(201).json({ success: true, data: role });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
