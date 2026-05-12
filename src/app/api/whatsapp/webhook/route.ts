import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Simulação do payload que seria recebido pela Evolution API ou Twilio
    const { from, body } = data;
    
    if (!from || !body) {
      return NextResponse.json({ error: 'Payload inválido' }, { status: 400 });
    }

    console.log(`Mensagem recebida do WhatsApp ${from}: ${body}`);

    // Mock do processamento do Chatbot (Bloco 7)
    let responseText = '';
    const msg = body.toLowerCase().trim();

    if (msg === '1' || msg === 'tomei') {
      responseText = '✅ Medicação registrada com sucesso! Muito bem.';
      // AQUI: Salvaria no banco de dados o registro da medicação
    } else if (msg === '2' || msg === 'não tomei') {
      responseText = '⚠️ Registro recebido. Tem certeza? Lembre-se que a consistência é fundamental para o controle dos sintomas.';
      // AQUI: Alertaria o cuidador
    } else if (msg === 'sintomas') {
      responseText = 'Vamos lá. Responda de 0 (Nenhum) a 4 (Severo): Como está o seu Tremor agora?';
    } else if (msg === 'consulta') {
      responseText = 'Sua próxima consulta é com a Dra. Ana amanhã às 14h. Aqui está o link: https://pan.funati.edu.br/teleconsulta/123';
    } else {
      responseText = `Olá! Sou a assistente PAN. Como posso ajudar?
Responda:
1 - Confirmei Medicação
2 - Não tomei
sintomas - Check-in rápido
consulta - Próximo agendamento`;
    }

    // AQUI: Enviaria a 'responseText' de volta usando a API do WhatsApp (ex: axios.post a URL da Evolution API)

    return NextResponse.json({ success: true, message_processed: responseText }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro no Webhook' }, { status: 500 });
  }
}
