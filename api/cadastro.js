import mongoose from 'mongoose';
import Usuario from '../models/Usuario.js';

const connect = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  await connect();
  const { nome, cpf, data_nascimento } = req.body;

  if (!cpf || !data_nascimento) {
    return res.status(400).json({ error: 'CPF e data de nascimento são obrigatórios.' });
  }

  try {
    const usuario = new Usuario({ nome, cpf, data_nascimento });
    await usuario.save();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}