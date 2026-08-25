import { Request, Response } from 'express';
import prisma from '../prismaClient';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_ebys_key';

export const registerPharmacy = async (req: Request, res: Response) => {
  try {
    const { pharmacyName, country, email, password, firstName, lastName } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Bu email adresi zaten kullanımda.' });
    }

    const pharmacy = await prisma.pharmacy.create({
      data: {
        name: pharmacyName,
        country: country || 'TR'
      }
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: 'OWNER',
        pharmacyId: pharmacy.id
      }
    });

    res.status(201).json({ message: 'Eczane ve kullanıcı başarıyla oluşturuldu.', pharmacyId: pharmacy.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sunucu hatası oluştu.' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      include: { pharmacy: true }
    });

    if (!user) {
      return res.status(401).json({ error: 'Geçersiz email veya şifre.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Geçersiz email veya şifre.' });
    }

    const token = jwt.sign(
      { userId: user.id, pharmacyId: user.pharmacyId, role: user.role, country: user.pharmacy.country },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      message: 'Giriş başarılı',
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        pharmacyName: user.pharmacy.name
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sunucu hatası oluştu.' });
  }
};
