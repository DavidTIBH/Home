import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: {
    type: String,
    required: true,
    unique: true,
    match: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
  },
  data_nascimento: { type: Date, required: true }
});

export default mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);