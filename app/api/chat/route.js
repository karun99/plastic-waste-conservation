import { askOpenRouter } from '@/lib/openrouter';
import { caseStudyContext } from '@/data/caseStudies';

export const runtime = 'edge';

const context = caseStudyContext();

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string' || !message.trim()) {
      return Response.json({ reply: 'Please type a question first.' }, { status: 400 });
    }

    if (message.length > 800) {
      return Response.json(
        { reply: 'That question is a bit too long. Try asking in one or two sentences.' },
        { status: 400 }
      );
    }

    const reply = await askOpenRouter(message, context);
    return Response.json({ reply });
  } catch (err) {
    return Response.json(
      { reply: `Server error: ${err.message}` },
      { status: 500 }
    );
  }
}
