import mongoose from 'mongoose';
import Usuario from '../models/Usuario.js';

const connect = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  await connect();
  const { cpf, data_nascimento } = req.body;

  if (!cpf || !data_nascimento) {
    return res.status(400).json({ error: 'CPF e data de nascimento são obrigatórios.' });
  }

  try {
    const usuario = await Usuario.findOne({ cpf });
    if (!usuario) return res.status(401).json({ error: 'Usuário não encontrado.' });

    const inputData = new Date(data_nascimento).toISOString().split('T')[0];
    const storedData = new Date(usuario.data_nascimento).toISOString().split('T')[0];

    if (inputData !== storedData) {
      return res.status(401).json({ error: 'Dados inválidos.' });
    }

    res.status(200).json({ message: 'Login realizado com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro no servidor.' });
  }
}