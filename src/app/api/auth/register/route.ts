import { NextRequest, NextResponse } from 'next/server';
import { registerSchema } from '@/validators/user';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db';
import { redirect } from 'next/navigation';
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = registerSchema.parse(body);

    const existingUser = await prisma.user.findUnique({
      where: { email: parsed.email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(parsed.password, 10);

    const user = await prisma.user.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'User created', user: { id: user.id, email: user.email } });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || 'Server error' }, { status: 500 });
  }
  
}
